import { createSlice } from "@reduxjs/toolkit";
import { fetchHeadphones } from "../asyncRequests/asyncRequest";

const initialState = {
  product: [],
  loading: false,
  error: "",
};




const productSlice = createSlice({
  name: "product",
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(fetchHeadphones.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchHeadphones.fulfilled,(state,action)=>{
        state.loading = false;
        state.error="";
        state.product = action.payload
    })
    builder.addCase(fetchHeadphones,(state)=>{
        state.loading = false;
        state.error = "something wrong"
        state.product = []
    })
  },
});


export default productSlice.reducer