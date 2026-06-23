import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const kreslaSlice = createSlice({
  name: "kresla",
  initialState,
  reducers: {
    getKresla: (state, action) => {
      
      state.data += action.payload;
    },
  },
});

export const {getKresla}= kreslaSlice.actions;

export default kreslaSlice.reducer
