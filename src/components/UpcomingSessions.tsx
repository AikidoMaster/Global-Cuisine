import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';

export default function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: "French Pastry Basics",
      chef: "Chef Marie",
      time: "Tomorrow, 2:00 PM",
      cuisine: "French",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
    },
    {
      id: 2,
      title: "Dim Sum Masterclass",
      chef: "Chef Liu",
      time: "Saturday, 10:00 AM",
      cuisine: "Chinese",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d"
    },
    {
      id: 3,
      title: "Mediterranean Feast",
      chef: "Chef Elena",
      time: "Sunday, 3:00 PM",
      cuisine: "Mediterranean",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Sessions</h2>
        <Calendar className="h-5 w-5 text-orange-500" />
      </div>
      <div className="space-y-4">
        {sessions.map((session) => (
          <Link
            key={session.id}
            to={`/session/${session.id}`}
            className="flex items-center space-x-4 p-3 hover:bg-orange-50 rounded-lg transition-colors"
          >
            <img
              src={session.image}
              alt={session.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{session.title}</h3>
              <p className="text-sm text-gray-500">{session.chef}</p>
              <div className="flex items-center text-sm text-orange-500 mt-1">
                <Clock className="h-4 w-4 mr-1" />
                <span>{session.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/sessions"
        className="block w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors text-center"
      >
        View All Sessions
      </Link>
    </div>
  );
}