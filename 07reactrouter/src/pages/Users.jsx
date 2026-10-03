import React from 'react';
import { Link } from 'react-router-dom';

const usersList = [
  { id: 101, name: "Alex Johnson", role: "Frontend Developer" },
  { id: 102, name: "Sarah Williams", role: "UI/UX Designer" },
  { id: 103, name: "Michael Brown", role: "Backend Engineer" },
];

function Users() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Team Directory</h1>
      <div className="space-y-4">
        {usersList.map((user) => (
          <div key={user.id} className="p-4 bg-slate-100 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
            <Link
              to={`/user/${user.id}`}
              className="bg-slate-800 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-slate-700 transition"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;