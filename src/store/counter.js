import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 1 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increse(state) {
      state.counter++;
    },
    decrese(state) {
      state.counter--;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;