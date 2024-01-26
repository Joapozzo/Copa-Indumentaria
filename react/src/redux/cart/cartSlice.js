import { createSlice } from "@reduxjs/toolkit";
import { addItemTocart, removeItemFromCart, clearItem, resetShippingCost } from "./cart-utils";
import { SHIPPING_COST } from "../../utils/constants";


const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        },
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemTocart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            }
        },
        clearCart: (state) => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0
            }
        },
        removeTotalItem: (state, action) => {
            return {
                ...state,
                cartItems: clearItem(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            }
        }
    }
})

export const {
    toggleHiddenCart,
    addToCart,
    removeFromCart,
    clearCart,
    removeTotalItem
} = cartSlice.actions;

export default cartSlice.reducer;