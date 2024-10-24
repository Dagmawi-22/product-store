import { Heading, Text } from "@radix-ui/themes";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="bg-[#1a1a1a] shadow-md rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <Heading size={2} className="mb-4 border-b border-gray-700 pb-4">
          {product.name}
        </Heading>
        <Text className="text-gray-400 mb-4">{product.description}</Text>
        <div className="flex justify-between items-center">
          <Text className="text-xl font-bold text-gray-900 mb-3">
            {product.price}
          </Text>
          <button
            className={`relative flex items-center px-4 py-2 rounded-lg transition-transform transform hover:scale-105 ${
              isInCart
                ? "bg-red-500"
                : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            }`}
            onClick={onAddToCart}
          >
            {isInCart ? <></> : <FaShoppingCart className="mr-2" />}
            {isInCart ? "X" : "Buy Now"}
            <span className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg animate-ping"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
