import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stringify } from "postcss";
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const result = await fetch(`http://localhost:8001/books`)
      const data = await result.json();
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);
export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const result = await fetch(`http://localhost:8001/books`, {
        method: 'Post',
        body: JSON.stringify(bookData),
       headers:{'content-type':'application/json;charset=UTF-8'}
        
      })
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);
// book/getBooks is the type of slice  we should put slice name which is "book " and getBooks is
const bookSlice = createSlice({
  name: "book",
  initialState: { book: [], isLoading: false ,error:null},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null

    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },[getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // isert books
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error=null
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload)
    },[insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default bookSlice.reducer;
