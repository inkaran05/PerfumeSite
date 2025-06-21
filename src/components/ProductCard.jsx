import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-xs hover:shadow-2xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
      <p className="text-pink-600 text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
