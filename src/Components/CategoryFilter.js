import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { products } from "../utils/products";
import {useDispatch,useSelector} from 'react-redux';
import {updateProductData} from "../redux/slices/productSlice";
const CategoryFilter = () => {
    const cart=useSelector((state)=>state.product);
    const dispatch=useDispatch(); 
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  useEffect(()=>{
        if(selectedCategory=="ALL")
                dispatch(updateProductData("ALL"));
        else{
            dispatch(updateProductData(selectedCategory));
        }
  },[selectedCategory])
  const categories = ["ALL", "Laptops", "Mobile Phones", "Smart Watches", "Cameras", "Bluetooth Speakers"];

  return (
    <div className="w-[90%] sm:w-[80%] flex flex-col gap-3 sm:flex-row items-center justify-between p-1 space-y-2 sm:space-y-0 bg-gray-100">
      {/* Search Bar */}
      <div className="w-full sm:w-auto flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-100px sm:w-64 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="text-2xl text-blue-500 cursor-pointer hover:scale-105"/>
      </div>

      {/* Category Selection */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
