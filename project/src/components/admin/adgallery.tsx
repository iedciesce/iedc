import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the base URL for API requests
const BASE_URL = 'https://iedc-03oe.onrender.com/api/gallery';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const GalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [newGalleryItem, setNewGalleryItem] = useState<GalleryItem>({
    id: '',
    title: '',
    description: '',
    image: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingGalleryItemId, setEditingGalleryItemId] = useState<string | null>(null);

  // Fetch gallery items on component mount
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get(BASE_URL);
        if (Array.isArray(response.data)) {
          setGalleryItems(response.data);
        } else {
          console.error('Expected an array of gallery items, but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };
    fetchGalleryItems();
  }, []);

  // Handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewGalleryItem({ ...newGalleryItem, [e.target.name]: e.target.value });
  };

  // Create or update gallery item
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update gallery item
        await axios.put(`${BASE_URL}/${editingGalleryItemId}`, newGalleryItem);
        const updatedGalleryItems = galleryItems.map((item) =>
          item.id === editingGalleryItemId ? { ...item, ...newGalleryItem } : item
        );
        setGalleryItems(updatedGalleryItems);
      } else {
        // Add new gallery item
        const response = await axios.post(BASE_URL, newGalleryItem);
        setGalleryItems([...galleryItems, response.data.data]); // Append the new item to the list
      }
      setNewGalleryItem({ id: '', title: '', description: '', image: '' });
      setIsEditing(false);
    } catch (error) {
      console.error('Error submitting gallery item:', error);
    }
  };

  // Edit gallery item
  const handleEdit = (item: GalleryItem) => {
    setNewGalleryItem(item);
    setIsEditing(true);
    setEditingGalleryItemId(item.id);
  };

  // Delete gallery item
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setGalleryItems(galleryItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{isEditing ? 'Edit Gallery Item' : 'Add Gallery Item'}</h2>

      {/* Gallery Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={newGalleryItem.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={newGalleryItem.description}
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
            value={newGalleryItem.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
            {isEditing ? 'Update Gallery Item' : 'Add Gallery Item'}
          </button>
        </div>
      </form>

      {/* Gallery List */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Gallery List</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-700">Title</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Description</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Image</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(galleryItems) && galleryItems.length > 0 ? (
              galleryItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
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
                <td colSpan={4} className="py-2 px-4 border-b text-center">
                  No gallery items available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GalleryPage;
