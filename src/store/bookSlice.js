import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getBooks = createAsyncThunk(
  "book/getBooks",






  
  async (args, thunkAPI) => {
const {rejectWithValue}=thunkAPI
try {
  const result = await fetch(`http://localhost:8001/books`)
  const data = await result.json();
  return data
} catch (error) {
  return rejectWithValue(error.message)
}



    // 
   
  }

 
);
// book/getBooks is the type of slice  we should put slice name which is "book " and getBooks is
const bookSlice = createSlice({
  name: "book",
  initialState: { book: [], isLoading: false ,error:null},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },[getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});
export default bookSlice.reducer;
