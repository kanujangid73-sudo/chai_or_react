import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-center text-gray-500 font-medium">
        Your cart is empty. Add items from above!
      </div>
    );
  }

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto border-t border-slate-200 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Your Cart</h2>
      <div className="space-y-3">
        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <div>
              <span className="font-semibold text-slate-800">{item.name}</span>
              <span className="text-slate-500 ml-3 font-medium">₹{item.price}</span>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm font-semibold hover:text-red-700 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="text-right pt-4 text-xl font-bold text-slate-900">
          Total Amount: <span className="text-blue-600">₹{total}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;