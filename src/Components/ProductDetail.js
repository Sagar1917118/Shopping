import React, { useEffect, useState } from "react";
import { products } from "../utils/products";
import { useParams ,useNavigate} from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {add,remove,addItem,removeItem} from '../redux/slices/cartSlice'
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import { IoArrowBackSharp } from "react-icons/io5";
const ProductDetail = () => {
    const { id } = useParams();
    const [selectedProduct,setSelectedProduct]=useState();
    useEffect(()=>{
        const obj = products.filter((ele) =>ele.id == id);
        setSelectedProduct(obj);
    },[id]);
    console.log(selectedProduct);
    const [selected,setSelected]=useState(false); 
    const navigate=useNavigate();
    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch(); 
    function checkPersent(data){
        var flag=false;
        for(let i=0;i<cart.length;i++){
            if(cart[i].item.id===data.id){
                flag=true;
                break;
            }
        }
        return flag;
    }
    function RemoveItemToCard(){
        dispatch(remove(selectedProduct[0].id));
    }
    function AddItemToCart(data){ 
        console.log(data);
        dispatch(add(data));
    }
    const [classAdd,setClassAdd]=useState("scale-125");
    const [classRemove,setClassRemove]=useState("scale-125");
    function addSameItem(id){
        dispatch(addItem(id));
        setClassAdd("scale-90");
        setTimeout(()=>{
            setClassAdd("scale-125");
        },100);
    }
    function removeSameItem(id){
        dispatch(removeItem(id));
        setClassRemove("scale-90");
        setTimeout(()=>{
            setClassRemove("scale-125");
        },100);
    }
  return (
    <>{
        selectedProduct && (
            <div className="flex flex-col sm:flex-row gap-6 mt-5 border-2 p-8 rounded-lg relative">
                <IoArrowBackSharp onClick={()=>{navigate("/")}}className="absolute top-2 left-2 text-[30px] hover:scale-110"/>
                <img src={selectedProduct[0].image}></img>
                <div className="p-4 max-w-md mx-auto bg-white border border-gray-200 shadow-md rounded-lg ">
                <div className="text-sm bg-purple-600 text-white py-1 px-3 rounded-full inline-block">
                1 YEAR ONSITE WARRANTY
                </div>
                <h2 className="mt-4 text-xl font-bold text-gray-900">
                {selectedProduct[0].name}
                </h2>
                <div className="flex items-center mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★ ★ ★ ★ ☆</span>
                </div>
                <span className="text-gray-600 text-sm ml-2">(49)</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Added to cart 80 times recently</p>
                <div className="mt-4">
                <p className="line-through text-gray-500 text-sm">MRP ₹{selectedProduct[0].price*10}</p>
                <p className="text-2xl font-bold text-gray-900">₹{selectedProduct[0].price}</p>
                <p className="text-green-600 text-sm font-semibold">39% off</p>
                <p className="text-gray-600 text-sm">{selectedProduct[0].description}</p>
                </div>
                <div className="mt-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2 text-sm w-full"
                    placeholder="Use eCoupon DOORBUSTERDEAL"
                />
                </div>
                <div className='flex flex-row-reverse justify-between items-center mt-2'>
                        <div className='flex gap-6'>
                            <AiOutlinePlusCircle className={`${classAdd} cursor-pointer hover:bg-green-300 rounded-full`} onClick={()=>{addSameItem(selectedProduct[0].id)}}/>
                            <AiOutlineMinusCircle className={`${classRemove} cursor-pointer hover:bg-green-300 rounded-full`} onClick={()=>{removeSameItem(selectedProduct[0].id)}}/>
                        </div>
                            {(checkPersent(selectedProduct[0]))?
                            <button className=" w-[120px] text-[12px] bg-green-500  p-2   rounded-full font-bold text-black hover:bg-green-600" onClick={RemoveItemToCard}>Remove from Cart</button>
                            :
                            <button className=" w-[120px] text-[12px]  bg-green-500 p-2   rounded-full  font-bold text-black hover:bg-green-600" onClick={()=>{AddItemToCart(selectedProduct[0])}}>Add to Cart</button>
                            }
                </div>
            </div>
          </div>
        )
    }</>
   
  );
};

export default ProductDetail;
