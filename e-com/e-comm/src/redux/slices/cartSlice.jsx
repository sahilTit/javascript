import { createSlice } from "@reduxjs/toolkit";
import ProductDetails from "../../pages/ProductDetails";

const initialState = {
  cartItems: [],
  totatlAmount: 0,
  totatlQuantity: 0,
};

const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totatlQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          ProductName: newItem.name,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.totalPrice);
      }
      state.totatlAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) + Number(item.quantityu)
      );
    },
  },
});

export const cartActions = cartSlices.actions;

export default cartSlices.reducer;
