import React from 'react';
import { Users, Calendar, Image, MessageSquare, TrendingUp, Award, Newspaper } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, label: 'Total Users', value: '1,234' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Active Events', value: '12' },
    { icon: <Image className="w-6 h-6" />, label: 'Gallery Items', value: '89' },
    { icon: <MessageSquare className="w-6 h-6" />, label: 'New Messages', value: '23' },
  ];

  const recentEvents = [
    { title: 'Startup Weekend', date: 'March 15-17, 2024', registrations: 156 },
    { title: 'Innovation Summit', date: 'April 5, 2024', registrations: 89 },
    { title: 'Workshop', date: 'April 20, 2024', registrations: 45 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Generate Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Events */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div>
                  <p className="font-medium text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{event.registrations}</p>
                  <p className="text-xs text-gray-600">Registrations</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
            <Award className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <Calendar className="w-5 h-5 text-blue-600 mb-2" />
              <p className="font-medium">Add Event</p>
              <p className="text-sm text-gray-600">Create a new event</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <Image className="w-5 h-5 text-blue-600 mb-2" />
              <p className="font-medium">Upload Photos</p>
              <p className="text-sm text-gray-600">Add to gallery</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <Newspaper className="w-5 h-5 text-blue-600 mb-2" />
              <p className="font-medium">Post News</p>
              <p className="text-sm text-gray-600">Share updates</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
              <MessageSquare className="w-5 h-5 text-blue-600 mb-2" />
              <p className="font-medium">View Messages</p>
              <p className="text-sm text-gray-600">Check inbox</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;