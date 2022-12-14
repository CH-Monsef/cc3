import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getcasd = createAsyncThunk("todo/getcasd", async () => {
  const response = await axios.get("https://dummyjson.com/carts");
  return response.data;
});

export const CardSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getcasd.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getcasd.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
            state.data = action.payload
            state.loading = 'idle'
        }
    });
  },
});


export const todoActions = CardSlice.actions;

export default CardSlice;