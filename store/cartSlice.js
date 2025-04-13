import { createSlice } from "@reduxjs/toolkit";



const  slice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart(state ,action){
            const itemexist = state.find((el)=> el.id === action.payload.id && el.size === action.payload.size )
            if(itemexist) state[(state.indexOf(itemexist))].quantity += 1
            else state.push(action.payload)
        },
        removeFromCart(state , action){
            const itemexist = state.find((el)=> el.id === action.payload.id && el.size === action.payload.size )
            
            state.splice(state.indexOf(itemexist),1)
        },
        increaseItemQuantity(state , action){
            const itemexist = state.find((el)=> el.id === action.payload.id && el.size === action.payload.size )
            state[state.indexOf(itemexist)].quantity += 1
        },
        decreaseItemQuantity(state , action){
            const itemexist = state.find((el)=> el.id === action.payload.id && el.size === action.payload.size )
            if(state[state.indexOf(itemexist)].quantity > 1) state[state.indexOf(itemexist)].quantity -= 1
            else state.splice(state.indexOf(itemexist),1)
        }
    }
})


export const {addToCart , removeFromCart , increaseItemQuantity , decreaseItemQuantity} = slice.actions
export default slice.reducer
