import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, ChefHat, Star, MessageCircle } from 'lucide-react';

export default function SessionDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1547573854-74d2a71d0826"
            alt="Session cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Authentic Pasta Making</h1>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>90 minutes</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>32 enrolled</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 fill-current text-yellow-400" />
                <span>4.9 (128 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Session</h2>
              <p className="text-gray-600">
                Join Chef Marco on an authentic Italian culinary journey where you'll learn the time-honored 
                traditions of pasta making. From selecting the finest ingredients to mastering the perfect 
                dough consistency, this hands-on session will transform you into a confident pasta artisan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="space-y-3">
                {[
                  "Traditional pasta dough preparation",
                  "Hand-rolling techniques",
                  "Various pasta shapes and styles",
                  "Classic sauce pairings",
                  "Tips for achieving the perfect texture"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-orange-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Chef Marco</h3>
                  <p className="text-gray-500">Italian Cuisine Expert</p>
                </div>
              </div>
              
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors mb-4">
                Join Session
              </button>
              
              <button className="w-full border border-orange-500 text-orange-500 py-3 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Message Chef
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}