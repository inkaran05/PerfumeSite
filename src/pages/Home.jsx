import React from 'react';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: '1',
    name: 'Floral Essence',
    price: 49.99,
    image: '/images/floral-essence.jpg',
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    price: 59.99,
    image: '/images/ocean-breeze.jpg',
  },
  {
    id: '3',
    name: 'Mystic Amber',
    price: 69.99,
    image: '/images/mystic-amber.jpg',
  },
];

const Home = () => {
  const handleAddToCart = (product) => {
    // This will be implemented later with context
    console.log('Add to cart:', product);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center text-gray-900">Welcome to PerfumeSite</h1>
      <h2 className="text-2xl font-serif font-semibold mb-8 text-center text-pink-600">Featured Perfumes</h2>
      <div className="flex flex-wrap justify-center">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
