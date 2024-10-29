import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Heart } from 'lucide-react';

export default function LiveSession() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
          alt="Live cooking session"
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white">
            LIVE NOW
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <h2 className="text-2xl font-bold mb-2">Traditional Thai Green Curry</h2>
              <p className="text-sm opacity-90">Master Chef Sarah's Authentic Recipe</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-1" />
                <span>1.2k watching</span>
              </div>
              <Link 
                to="/session/live"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Join Session
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Link to="/chef/sarah" className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
            <div>
              <h3 className="font-medium text-gray-800">Chef Sarah Wong</h3>
              <p className="text-sm text-gray-500">15+ years experience</p>
            </div>
          </Link>
          <button className="text-orange-500 hover:text-orange-600">
            <Heart className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>🇹🇭 Thai Cuisine</span>
          <span>•</span>
          <span>Intermediate Level</span>
          <span>•</span>
          <span>45 mins remaining</span>
        </div>
      </div>
    </div>
  );
}