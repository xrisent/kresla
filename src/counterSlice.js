import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 999,
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCount: (state) => {
      if (state.count === 999) return;

     
      state.count = state.count + 1;
     
    },
    minusCount: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { addCount, minusCount } = counterSlice.actions;
export default counterSlice.reducer;
