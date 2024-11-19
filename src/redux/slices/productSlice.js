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
    }
});
export const {updateProductData}=ProductSlice.actions;
export default ProductSlice.reducer;
