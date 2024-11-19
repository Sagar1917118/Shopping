import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {updateProductData} from "../redux/slices/productSlice";
import SearchBar from "./SearchBar";
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
     <SearchBar></SearchBar>

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
