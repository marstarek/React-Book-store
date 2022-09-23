import React, { Fragment } from "react";

const BookInfo = () => {
  return (
    <div className="text-center">
      <h2 className="py-5 text_gradient text-2xl font-bold">Book Details</h2>
      <div className="alert-secondary alert w-auto" role="alert">
        There is no post selected yet. Please select!
      </div>
      {/* <div>
        <p className='fw-bold'>Title:</p>
        <p className='fw-light'>Description:</p>
        <p className='fst-italic'>Price:</p>
      </div> */}
    </div>
  );
};

export default BookInfo;
