import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details by id from backend or static data
    const fetchProduct = async () => {
      // Placeholder static data
      const products = [
        { id: '1', name: 'Floral Essence', price: 49.99, image: '/images/floral-essence.jpg', description: 'A fresh floral scent.' },
        { id: '2', name: 'Ocean Breeze', price: 59.99, image: '/images/ocean-breeze.jpg', description: 'A cool oceanic fragrance.' },
        { id: '3', name: 'Mystic Amber', price: 69.99, image: '/images/mystic-amber.jpg', description: 'A warm amber aroma.' },
        { id: '4', name: 'Citrus Splash', price: 39.99, image: '/images/citrus-splash.jpg', description: 'A zesty citrus burst.' },
      ];
      const found = products.find(p => p.id === id);
      setProduct(found);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // To be implemented with context
    console.log('Add to cart:', product);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
        />
        <div className="md:ml-10">
          <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
          <p className="text-pink-600 text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
