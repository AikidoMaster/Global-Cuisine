import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock } from 'lucide-react';

export default function TrendingSessions() {
  const sessions = [
    {
      id: 1,
      title: 'Authentic Pasta Making',
      description: 'Learn the art of handmade pasta',
      cuisine: 'Italian',
      chef: 'Chef Marco',
      image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826'
    },
    {
      id: 2,
      title: 'Sushi Masterclass',
      description: 'Perfect rice and rolling techniques',
      cuisine: 'Japanese',
      chef: 'Chef Yuki',
      image: 'https://images.unsplash.com/photo-1565299543923-37dd37887442'
    },
    {
      id: 3,
      title: 'Curry Fundamentals',
      description: 'Master the blend of spices',
      cuisine: 'Indian',
      chef: 'Chef Priya',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19'
    },
    {
      id: 4,
      title: 'Street Tacos Secrets',
      description: 'Authentic Mexican street food',
      cuisine: 'Mexican',
      chef: 'Chef Carlos',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {sessions.map((session) => (
        <Link
          key={session.id}
          to={`/session/${session.id}`}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 block"
        >
          <img
            src={session.image}
            alt={session.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-orange-500">
              {session.cuisine} Cuisine
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Users className="h-4 w-4 mr-1" />
              <span>{Math.floor(Math.random() * 100) + 20}</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">{session.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{session.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
              <span className="ml-2 text-sm font-medium text-gray-700">{session.chef}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>1h 30m</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}