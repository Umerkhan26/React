import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addIntialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = bagSlice.actions;

export default bagSlice;
