import React from "react";

const Addform = () => {
  return (
    <div className="w-full columns-1 py-5">
      <div className="col-span-1 mx-auto  mt-3 text-center">
        <form className="mx-auto w-6/12">
          <h1 className=" normal-case text-3xl text_gradient font-bold">Insert Book</h1>

          <input
            type="text"
            placeholder="Type title here "
            className="input input-bordered my-2 w-full "
            id="title"
            required
          />

          <input
            type="number"
            placeholder="Type price here"
            className="input input-bordered my-2 w-full "
            id="price"
            required
          />

          <textarea
            className="textarea input-bordered my-2 w-full "
            placeholder="Description"
            id="Description"
            rows="3"
            required
          ></textarea>
          <button type="submit" className="btn btn-outline btn-info my-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
