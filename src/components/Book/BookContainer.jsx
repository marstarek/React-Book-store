import React, { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch, useSelector } from "react-redux";
import "./book.css";
import { getBooks } from "./../../store/bookSlice";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.books);
  console.log(isLoading);
  useEffect(() => {
    dispatch(getBooks({ id: 1 }));
  }, [dispatch]);
  return (
    <div className="container mx-auto flex w-full  flex-col px-4 lg:flex-row ">
      <div className="card rounded-box grid  flex-grow basis-1/2 place-items-center bg-base-300 py-10 ">
        {" "}
        <BooksList isLoading={isLoading} books={books} />
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="card rounded-box grid  flex-grow basis-1/2 place-items-center  bg-base-300 py-10">
        {" "}
        <BookInfo />
      </div>
    </div>
  );
};

export default PostContainer;
