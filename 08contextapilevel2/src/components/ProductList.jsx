import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 2999 },
  { id: 2, name: 'Mechanical Keyboard', price: 4500 },
  { id: 3, name: 'Gaming Mouse', price: 1800 },
];

function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border border-slate-200 p-5 rounded-xl bg-white shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-slate-900">{item.name}</h3>
              <p className="text-slate-500 font-medium my-2">₹{item.price}</p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-500 transition cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;