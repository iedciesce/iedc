import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the base URL for API requests
const BASE_URL = 'https://iedc-03oe.onrender.com/api/news';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [newNewsItem, setNewNewsItem] = useState<NewsItem>({
    id: '',
    title: '',
    content: '',
    date: '',
    image: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingNewsItemId, setEditingNewsItemId] = useState<string | null>(null);

  // Fetch news articles on component mount
  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        const response = await axios.get(BASE_URL);
        if (Array.isArray(response.data)) {
          setNewsItems(response.data);
        } else {
          console.error('Expected an array of news items, but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching news items:', error);
      }
    };
    fetchNewsItems();
  }, []);

  // Handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewNewsItem({ ...newNewsItem, [e.target.name]: e.target.value });
  };

  // Create or update news item
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update news item
        await axios.put(`${BASE_URL}/${editingNewsItemId}`, newNewsItem);
        const updatedNewsItems = newsItems.map((item) =>
          item.id === editingNewsItemId ? { ...item, ...newNewsItem } : item
        );
        setNewsItems(updatedNewsItems);
      } else {
        // Add new news item
        const response = await axios.post(BASE_URL, newNewsItem);
        setNewsItems([...newsItems, response.data.data]); // Append the new item to the list
      }
      setNewNewsItem({ id: '', title: '', content: '', date: '', image: '' });
      setIsEditing(false);
    } catch (error) {
      console.error('Error submitting news item:', error);
    }
  };

  // Edit news item
  const handleEdit = (item: NewsItem) => {
    setNewNewsItem(item);
    setIsEditing(true);
    setEditingNewsItemId(item.id);
  };

  // Delete news item
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setNewsItems(newsItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting news item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{isEditing ? 'Edit News Article' : 'Add News Article'}</h2>

      {/* News Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={newNewsItem.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content</label>
          <textarea
            name="content"
            value={newNewsItem.content}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={newNewsItem.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={newNewsItem.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
            {isEditing ? 'Update News Article' : 'Add News Article'}
          </button>
        </div>
      </form>

      {/* News List */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">News Articles List</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-700">Title</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Content</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Date</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Image</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(newsItems) && newsItems.length > 0 ? (
              newsItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b">{item.content}</td>
                  <td className="py-2 px-4 border-b">{item.date}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-2 px-4 border-b text-center">
                  No news available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsPage;
