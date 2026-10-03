import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to React Router Demo</h1>
      <p className="text-gray-600 mb-6">Learn dynamic routing, URL parameters, and navigation hooks.</p>
      <button
        onClick={() => navigate('/users')}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition cursor-pointer"
      >
        Explore Users Directory
      </button>
    </div>
  );
}

export default Home;