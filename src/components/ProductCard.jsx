import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-[#1a1a1a] shadow-md rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-2xl text-gray-300 font-semibold mb-2">
          {product.name}
        </h2>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            {product.price}
          </span>
          <button
            className="relative flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-transform transform hover:scale-105"
            onClick={onAddToCart}
          >
            <FaShoppingCart className="mr-2" /> Buy Now
            <span className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg animate-ping"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
