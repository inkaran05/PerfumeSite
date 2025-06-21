import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API or static data
    const fetchProducts = async () => {
      // Placeholder static data
      const data = [
        { id: '1', name: 'Floral Essence', price: 49.99, image: '/images/floral-essence.jpg' },
        { id: '2', name: 'Ocean Breeze', price: 59.99, image: '/images/ocean-breeze.jpg' },
        { id: '3', name: 'Mystic Amber', price: 69.99, image: '/images/mystic-amber.jpg' },
        { id: '4', name: 'Citrus Splash', price: 39.99, image: '/images/citrus-splash.jpg' },
        { id: '5', name: 'Vanilla Dream', price: 54.99, image: '/images/vanilla-dream.jpg' },
      ];
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center text-gray-900">Shop All Perfumes</h1>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
