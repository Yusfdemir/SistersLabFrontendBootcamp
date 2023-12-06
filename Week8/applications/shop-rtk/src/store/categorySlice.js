import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
  categories: [],
  loadingCategories: false,
  error: null,
  defaultCategory: 'electronics',
}

export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async () => {
      const response = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );
      return response.data;
    }
);

const categorySlice=createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.pending, (state) => {
            state.loadingCategories = true;
          })
          builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loadingCategories = false;
          })
          builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loadingCategories = false;
            state.error = action.error.message;
          })
    }

})
export default categorySlice.reducer;