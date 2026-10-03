import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
        <Navbar />
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;