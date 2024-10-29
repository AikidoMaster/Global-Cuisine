import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Calendar } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Globe className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">Global Cuisine Connect</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-orange-500">
              <Calendar className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-orange-500">
              <MessageCircle className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
          </div>
        </div>
      </div>
    </nav>
  )
}