import React, { useEffect, useState } from 'react';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all messages from the API
    const fetchMessages = async () => {
      try {
        const response = await fetch('https://iedc-03oe.onrender.com/api/contact'); // Update URL if necessary
        const data = await response.json();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (messageId: string) => {
    try {
      await fetch(`https://iedc-03oe.onrender.com/api/contact/${messageId}`, {
        method: 'DELETE',
      });

      // Filter out the deleted message from the list
      setMessages(messages.filter((message) => message._id !== messageId));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  if (loading) {
    return <p>Loading messages...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Client Messages</h1>
      {messages.length === 0 ? (
        <p style={styles.noMessages}>No messages found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name</th>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Message</th>
              <th style={styles.tableHeader}>Sent At</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id} style={styles.tableRow}>
                <td style={styles.tableCell}>{message.name}</td>
                <td style={styles.tableCell}>{message.email}</td>
                <td style={styles.tableCell}>{message.message}</td>
                <td style={styles.tableCell}>
                  {new Date(message.createdAt).toLocaleString()}
                </td>
                <td style={styles.tableCell}>
                  <button
                    onClick={() => handleDelete(message._id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
  },
  noMessages: {
    fontSize: '18px',
    color: '#777',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f4f4f4',
    color: '#333',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    textAlign: 'left',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AdminMessages;
