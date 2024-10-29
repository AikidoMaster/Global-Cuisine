import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SessionDetails from './pages/SessionDetails';
import ChefDetails from './pages/ChefDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session/:id" element={<SessionDetails />} />
          <Route path="/chef/:id" element={<ChefDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;