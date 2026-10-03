import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams(); // Extracts 'id' from route URL parameter '/user/:id'
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-md mx-auto text-center bg-white border border-gray-200 rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-2">User Profile</h1>
      <p className="text-gray-600 mb-6">Viewing Details for User ID: <strong className="text-blue-600">{id}</strong></p>
      
      <button
        onClick={() => navigate('/users')}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition cursor-pointer"
      >
        ← Back to Users Directory
      </button>
    </div>
  );
}

export default UserDetail;