import React, { useEffect, useState } from 'react';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all messages from the API
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/contact'); // Update URL if necessary
        const data = await response.json();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

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
};

export default AdminMessages;
