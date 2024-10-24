import React from "react";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

const App = () => {
  return (
    <div className="min-h-screen bg-black py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-3 text-white">
        Our Products
      </h1>
      <h4 className="text-2xl font-bold text-center mb-10 text-gray-500">
        Look what we can get you
      </h4>
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="transform transition duration-500 ease-in-out hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`,
              animationName: "fadeIn",
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
