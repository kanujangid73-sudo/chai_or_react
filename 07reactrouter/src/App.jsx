import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          {/* Dynamic route segment */}
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;