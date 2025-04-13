import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../utils/products";

const initialState = productData

const slice = createSlice({
        name: 'products',
        initialState,
        reducers : {}
})

export default slice.reducer