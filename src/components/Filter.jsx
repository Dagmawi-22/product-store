import React from "react";
import * as Select from "@radix-ui/react-select";
import { FaChevronDown } from "react-icons/fa";

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-8">
      <Select.Root value={selectedCategory} onValueChange={onSelectCategory}>
        <Select.Trigger className="bg-gray-800 text-white p-2 rounded-lg px-5 flex items-center justify-between">
          <Select.Value placeholder="Select category" />
          <Select.Icon className="ml-2">
            <FaChevronDown className="w-5 h-5 text-white" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content
          className="bg-gray-800 text-white rounded-lg"
          style={{ zIndex: 999 }}
        >
          <Select.ScrollUpButton />
          <Select.Viewport className="p-2">
            <Select.Item
              value="all"
              className="px-5 py-2 hover:bg-gray-700 cursor-pointer rounded-lg"
            >
              <Select.ItemText>All</Select.ItemText>
            </Select.Item>
            {categories.map((category) => (
              <Select.Item
                key={category}
                value={category}
                className="px-5 py-2 hover:bg-gray-700 cursor-pointer rounded-lg"
              >
                <Select.ItemText>{category}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default Filter;
