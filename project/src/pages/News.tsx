import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Calendar } from 'lucide-react';

interface News {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const News = () => {
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news');
        setNews(response.data);
      } catch (err) {
        const error = err as AxiosError;
        setError(error.response?.data?.message || 'Failed to fetch news');
      }
    };

    fetchNews();
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest News</h1>
        
        {news.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No news available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {news.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                  <p className="text-gray-600">{item.content}</p>
                  
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;