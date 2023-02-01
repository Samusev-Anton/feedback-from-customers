import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getfilteredComments: (state, action) => {
      console.log("state: ", state);
      state.filter = action.payload;
    },
  },
});

export const { getfilteredComments } = filterSlice.actions;

//Selectors
export const selectFilterValue = (state) => state.filter.filter;
