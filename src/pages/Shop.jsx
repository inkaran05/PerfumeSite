import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend or static data
    const fetchProducts = async () => {
      // Placeholder static data
      const data = [
        { id: '1', name: 'Floral Essence', price: 49.99, image: '/images/floral-essence.jpg' },
        { id: '2', name: 'Ocean Breeze', price: 59.99, image: '/images/ocean-breeze.jpg' },
        { id: '3', name: 'Mystic Amber', price: 69.99, image: '/images/mystic-amber.jpg' },
        { id: '4', name: 'Citrus Splash', price: 39.99, image: '/images/citrus-splash.jpg' },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // To be implemented with context
    console.log('Add to cart:', product);
  };

  return (
    <div>
      <h1>Shop Perfumes</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
