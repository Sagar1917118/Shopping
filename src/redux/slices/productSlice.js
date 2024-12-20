import {createSlice} from '@reduxjs/toolkit';
import { products } from '../../utils/products';
export const ProductSlice=createSlice({
    name:"product",
    initialState:products,
    reducers:{
        updateProductData:(state,action)=>{
            if(action.payload=="ALL")
                return state=products;
            else
                return products.filter((ele)=>ele.category==action.payload);
        },
        sortProductData:(state,action)=>{
            if(action.payload=="1")
                return  [...state].sort((a, b) => a.price - b.price);
            else    
                return  [...state].sort((a, b) => (b.price - a.price));
        }
    }
});
export const {updateProductData,sortProductData}=ProductSlice.actions;
export default ProductSlice.reducer;
