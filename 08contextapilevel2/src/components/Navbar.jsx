import React from 'react';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-blue-400">Context Cart Store</h1>
      <div className="bg-blue-600 px-4 py-1.5 rounded-full font-semibold text-sm flex items-center gap-2">
        <span>Cart Items:</span>
        <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-bold">
          {cart.length}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;