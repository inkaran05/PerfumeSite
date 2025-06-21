import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-serif font-bold tracking-wide">PerfumeSite</div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-pink-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-pink-400 transition-colors duration-300">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-pink-400 transition-colors duration-300">
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-pink-400 transition-colors duration-300">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-pink-400 transition-colors duration-300">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
