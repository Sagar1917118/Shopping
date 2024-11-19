import { FaSearch } from "react-icons/fa";
import { products } from "../utils/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar(){
    const navigate=useNavigate();
    const [selectedProduct,setSelectedProduct]=useState("");
    const productName = products.map((product) => ({
        name: product.name.toLowerCase(),
        id: product.id,
      }));
    const [relatedName,setRelatedNames]=useState([]);
    function handleChange(e) {
        const searchQuery = e.target.value.toLowerCase();
        if (searchQuery) {
          const filteredNames = productName.filter((product) =>
            product.name.startsWith(searchQuery.toLowerCase())
          ||
          product.name.includes(searchQuery.toLowerCase())
          );
          setRelatedNames(filteredNames);
        } else {
          setRelatedNames([]);
        }
      }
    return(
        <div className="w-full sm:w-auto flex items-center gap-2">
        <div className="flex flex-col relative">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          className="w-100px sm:w-64 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> 
      
            {relatedName && relatedName.length>0 && 
              <div className=" w-full gap-2 p-1 text-sm flex flex-col absolute left-0 top-9 bg-white z-50 border-l-2 border-r-2 border-b-2">
               { relatedName.map(ele=>{
                    return(
                        <div onClick={()=>{ navigate(`/view-product/${ele.id}`)}} className="border-b-2 hover:cursor-pointer" key={ele.id}>{ele.name}</div>
                    )
                })
               }
            </div>
            } 
        </div>
        <FaSearch onClick={()=>{
        }}className="text-2xl text-blue-500 cursor-pointer hover:scale-105"/>
      </div>
    )
}
export default SearchBar;