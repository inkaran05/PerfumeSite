import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6 m-4 max-w-xs hover:shadow-3xl transition-shadow duration-500 transform hover:-translate-y-1 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-lg mb-6"
      />
      <h3 className="text-2xl font-serif font-bold mb-3 text-pink-700">{product.name}</h3>
      <p className="text-pink-700 text-xl font-extrabold mb-6">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors duration-300 shadow-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
