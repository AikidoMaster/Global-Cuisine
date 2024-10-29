import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import LiveSession from '../components/LiveSession';
import UpcomingSessions from '../components/UpcomingSessions';
import FeaturedChefs from '../components/FeaturedChefs';
import TrendingSessions from '../components/TrendingSessions';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Search for cuisines, chefs, or sessions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <LiveSession />
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-orange-500" />
                Trending Sessions
              </h2>
              <TrendingSessions />
            </div>
          </div>
          <div className="space-y-8">
            <UpcomingSessions />
            <FeaturedChefs />
          </div>
        </div>
      </div>
    </main>
  );
}