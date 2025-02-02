import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Calendar } from 'lucide-react';

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  googleFormLink?: string;
  registrationStatus: 'open' | 'closed';
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://iedc-03oe.onrender.com/api/events');
        setEvents(response.data);
      } catch (err) {
        const error = err as AxiosError;
        setError(error.response?.data?.message || 'Failed to fetch events');
      }
    };

    fetchEvents();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
          <p className="text-xl text-gray-600 mb-12">
            Join us for exciting events and workshops to enhance your entrepreneurial journey
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No events available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>

                  {event.registrationStatus === 'open' ? (
                    <a
                      href={event.googleFormLink || '#'}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                      Register Now
                    </a>
                  ) : (
                    <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-md cursor-not-allowed">
                      Registration Closed
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
