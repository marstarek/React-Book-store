import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await fetch(`http://localhost:8001/books`);
      const data = await result.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      bookData.userName = getState().auth.name;
      const result = await fetch(`http://localhost:8001/books`, {
        method: "Post",
        body: JSON.stringify(bookData),
        headers: { "content-type": "application/json;charset=UTF-8" },
      });
      const data = await result.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:8001/books/${item.id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json;charset=UTF-8" },
      });

      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const getBook = createAsyncThunk(
  "book/getBook",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:8001/books/${item.id}`, {
        method: "GET",
        headers: { "content-type": "application/json;charset=UTF-8" },
      });

      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
// book/getBooks is the type of slice  we should put slice name which is "book " and getBooks is
const bookSlice = createSlice({
  name: "book",
  initialState: { book: [], isLoading: false, error: null, bookInfo: null },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // isert books
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete books
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //getBook info
    [getBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookInfo = action.payload;
    },
  },
});
export default bookSlice.reducer;
