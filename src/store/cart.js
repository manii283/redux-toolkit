import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add(state, action) {
      const temp = state.items;
      temp.push(action.payload);
      state.items = temp;
    },
    delete(state) {
      state.items.pop();
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;