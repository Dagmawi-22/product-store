import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ itemCount }) => {
  return (
    <div className="absolute top-5 right-5 m-4">
      <div className="relative">
        <FaShoppingCart className="text-white text-3xl" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">
          {itemCount}
        </span>
      </div>
    </div>
  );
};

export default Cart;
