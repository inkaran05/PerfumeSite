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
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" height="300" />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
