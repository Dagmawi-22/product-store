import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import { products } from "./data/products";
import { Heading, Text } from "@radix-ui/themes";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const handleAddToCart = () => {
    setCartItems((prevCartItems) => prevCartItems + 1);
  };

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="relative min-h-screen bg-black py-10 px-4 flex flex-col items-center">
      <Cart itemCount={cartItems} />
      <Heading mb="2" size="6" className="font-bold text-center text-white">
        Our Products
      </Heading>
      <Text className="text-lg font-bold text-center mb-10 text-gray-500">
        Look what we can get you
      </Text>

      <Filter
        categories={uniqueCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="transform transition duration-500 ease-in-out hover:scale-105"
            style={{
              animationDelay: `${index * 100}ms`,
              animationName: "fadeIn",
            }}
          >
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
