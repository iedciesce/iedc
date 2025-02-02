import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Define the base URL for API requests
const BASE_URL = 'http://localhost:5000/api/events';

interface Event {
  _id: string;  // Using _id instead of id, since MongoDB generates an _id field.
  title: string;
  description: string;
  date: string;
  image: string;
  googleFormLink?: string;  // Make googleFormLink optional
  registrationStatus: string;
}

const EventPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({
    _id: '',
    title: '',
    description: '',
    date: '',
    image: '',
    googleFormLink: '',
    registrationStatus: 'open',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(BASE_URL);
        if (Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          console.error('Expected an array of events, but received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  // Handle changes in the form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Create or update event
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update event
        await axios.put(`${BASE_URL}/${editingEventId}`, newEvent);
        setEvents(events.map((event) => (event._id === editingEventId ? newEvent : event)));
      } else {
        // Add new event
        const response = await axios.post(BASE_URL, newEvent);
        setEvents([...events, response.data.data]); // Append the new event to the list
      }
      setNewEvent({
        _id: '',
        title: '',
        description: '',
        date: '',
        image: '',
        googleFormLink: '',
        registrationStatus: 'open',
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error submitting event:', error);
    }
  };

  // Edit event
  const handleEdit = (event: Event) => {
    setNewEvent(event);
    setIsEditing(true);
    setEditingEventId(event._id);  // Use _id for editing
  };

  // Delete event
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setEvents(events.filter((event) => event._id !== id));  // Filter based on _id
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{isEditing ? 'Edit Event' : 'Add Event'}</h2>

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-gray-700">Event Title</label>
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={newEvent.description}
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
            value={newEvent.date}
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
            value={newEvent.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Google Form Link</label>
          <input
            type="url"
            name="googleFormLink"
            value={newEvent.googleFormLink}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Registration Status</label>
          <select
            name="registrationStatus"
            value={newEvent.registrationStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
            {isEditing ? 'Update Event' : 'Add Event'}
          </button>
        </div>
      </form>

      {/* Events List */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Events List</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-700">Title</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Description</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Date</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Registration Status</th>
              <th className="py-2 px-4 border-b text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(events) && events.length > 0 ? (
              events.map((event) => (
                <tr key={event._id}>  {/* Use _id here instead of id */}
                  <td className="py-2 px-4 border-b">{event.title}</td>
                  <td className="py-2 px-4 border-b">{event.description}</td>
                  <td className="py-2 px-4 border-b">{event.date}</td>
                  <td className="py-2 px-4 border-b">{event.registrationStatus}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEdit(event)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}  // Use _id here
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
                  No events available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventPage;
