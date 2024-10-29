import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Star } from 'lucide-react';

export default function FeaturedChefs() {
  const chefs = [
    {
      id: 1,
      name: "Marco Rossi",
      specialty: "Italian Cuisine",
      rating: 4.9,
      students: 1200,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },
    {
      id: 2,
      name: "Aisha Rahman",
      specialty: "Middle Eastern",
      rating: 4.8,
      students: 850,
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46"
    },
    {
      id: 3,
      name: "James Chen",
      specialty: "Fusion Asian",
      rating: 4.9,
      students: 1500,
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Featured Chefs</h2>
        <ChefHat className="h-5 w-5 text-orange-500" />
      </div>
      <div className="space-y-4">
        {chefs.map((chef) => (
          <Link
            key={chef.id}
            to={`/chef/${chef.id}`}
            className="flex items-center space-x-4 p-3 hover:bg-orange-50 rounded-lg transition-colors"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{chef.name}</h3>
              <p className="text-sm text-gray-500">{chef.specialty}</p>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{chef.rating}</span>
                <span className="text-sm text-gray-400 ml-2">({chef.students} students)</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/chefs"
        className="block w-full mt-6 border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50 transition-colors text-center"
      >
        Explore All Chefs
      </Link>
    </div>
  );
}