import React, { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch, useSelector } from "react-redux";
import "./book.css";
import { getBooks, deleteBook, getBook } from "./../../store/bookSlice";
// import actions from slice
const PostContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, books, bookInfo } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks({ id: 1 }));
  }, [dispatch]);
  return (
    <div className="container mx-auto flex w-full  flex-col px-4 lg:flex-row ">
      <div className="card rounded-box grid  flex-grow basis-1/2 place-items-center bg-base-300 py-10 ">
        {" "}
        <BooksList
          isLoading={isLoading}
          books={books}
          deleteBook={deleteBook}
          dispatch={dispatch}
          getBook={getBook}
        />
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="card rounded-box flex h-fit   flex-grow basis-1/2 place-items-center  bg-base-300 py-10">
        {" "}
        <BookInfo bookInfo={bookInfo} />
      </div>
    </div>
  );
};

export default PostContainer;
