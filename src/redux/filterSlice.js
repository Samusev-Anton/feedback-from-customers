import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getfilteredComments: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { getfilteredComments } = filterSlice.actions;

//Selectors
export const selectFilterValue = (state) => state.filter.filter;
