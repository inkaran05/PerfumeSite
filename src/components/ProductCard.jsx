import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-[#121212] border border-[#c5a880] rounded-lg p-6 m-4 max-w-xs hover:shadow-lg transition-shadow duration-500 transform hover:-translate-y-1 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-md mb-6"
      />
      <h3 className="text-2xl font-serif font-bold mb-3 text-[#c5a880]">{product.name}</h3>
      <p className="text-[#c5a880] text-xl font-extrabold mb-6">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="border border-[#c5a880] text-[#c5a880] px-6 py-3 rounded-full hover:bg-[#c5a880] hover:text-[#121212] transition-colors duration-300 shadow-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
