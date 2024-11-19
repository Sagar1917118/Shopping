import {configureStore} from '@reduxjs/toolkit';
import CartSlice from "./slices/cartSlice";
import ProductSlice from "./slices/productSlice";
export const store=configureStore({
    reducer:{
        cart:CartSlice,
        product:ProductSlice,
    },
});