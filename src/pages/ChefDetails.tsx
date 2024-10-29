import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Award, Users, Calendar, Clock } from 'lucide-react';

export default function ChefDetails() {
  const { id } = useParams();

  const upcomingSessions = [
    {
      id: 1,
      title: "Classic Risotto Masterclass",
      date: "Tomorrow, 3:00 PM",
      duration: "90 min",
      spots: "8 spots left"
    },
    {
      id: 2,
      title: "Perfect Pizza Workshop",
      date: "Saturday, 2:00 PM",
      duration: "120 min",
      spots: "5 spots left"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-orange-400 to-red-500">
          <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end space-x-8">
            <div className="h-32 w-32 rounded-xl overflow-hidden border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90"
                alt="Chef profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white pb-2">
              <h1 className="text-4xl font-bold mb-2">Chef Marco Rossi</h1>
              <p className="text-lg opacity-90">Italian Cuisine Expert</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex space-x-8">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                <span className="font-medium">4.9</span>
                <span className="text-gray-500 ml-1">(1.2k reviews)</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="font-medium">15k</span>
                <span className="text-gray-500 ml-1">students</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-gray-400 mr-2" />
                <span className="font-medium">15+ years</span>
                <span className="text-gray-500 ml-1">experience</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600">
                Born and raised in Florence, Italy, I've spent the last 15 years perfecting the art of 
                Italian cuisine. From working in Michelin-starred restaurants to running my own 
                successful establishments, I'm passionate about sharing authentic Italian cooking 
                techniques and traditions with aspiring chefs worldwide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Specialties</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Traditional Pasta Making",
                  "Regional Italian Cuisine",
                  "Wine Pairing",
                  "Artisanal Pizza",
                  "Italian Pastries",
                  "Mediterranean Seafood"
                ].map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 bg-orange-500 rounded-full" />
                    <span className="text-gray-600">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Upcoming Sessions</h3>
              <div className="space-y-4">
                {upcomingSessions.map(session => (
                  <div key={session.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-gray-800 mb-2">{session.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{session.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-orange-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{session.spots}</span>
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      Book Session
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}