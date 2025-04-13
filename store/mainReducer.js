import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productReducer";
import cartreducer from "./cartSlice";


export const store = configureStore({
    reducer:{

        products : ProductReducer,
        cartItems : cartreducer
    }
})

