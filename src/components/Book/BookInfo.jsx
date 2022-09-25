import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const BookInfo = ({ bookInfo }) => {
  return (
    <div className="w-full px-4 text-center ">
      <h2 className="text_gradient py-5 text-2xl font-bold">Book Details</h2>

      {bookInfo ? (
        <div className=" text-left">
          <p className="fw-bold ">
            <span className=" text-l font-bold"> Title:</span>
            {bookInfo.title}
          </p>
          <p className="">
            <span className=" text-l font-bold">Description:</span>
            {bookInfo.Description}
          </p>
          <p className="">
            <span className=" text-l font-bold">Price:</span>
            {bookInfo.price}
          </p>
          <p className="">
            <span className=" text-l font-bold">authors:</span>
            {bookInfo.authors.name}
          </p>
          <p className="">
            <span className=" text-l font-bold">subjects:</span>
            {bookInfo.subjects[0]}
          </p>
          <p className="">
            <span className=" text-l font-bold">bookshelves:</span>
            {bookInfo.bookshelves[0]}
          </p>
          <p className="">
            <span className=" text-l font-bold">languages:</span>
            {bookInfo.languages[0]}
          </p>
          <p className="">
            <span className=" text-l font-bold">download count:</span>
            {bookInfo.download_count}
          </p>

          <div className="avatar flex basis-1/2">
            <div className="w-full rounded">
              <img src={bookInfo.image} />
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning w-auto" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </div>
  );
};

export default BookInfo;
