import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "./../store/bookSlice";
import { nanoid } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const Addform = () => {
  const { isLogedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="w-full columns-1 py-5">
      <div className="col-span-1 mx-auto  mt-3 text-center">
        <Formik
          initialValues={{ title: " ", price: " ", Description: " " }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch(
              insertBook({
                ...values,
                id: nanoid(),
                image:
                  "https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg",
              }),
            );
            resetForm();
          }}
          validate={(values) => {
            let errors = {};
            if (!values.title) {
              errors.title = "title is required";
            }
            if (!values.price) {
              errors.price = "price is required";
            }
            if (!values.Description) {
              errors.Description = "Description is required";
            }

            return errors;
          }}
        >
          {({ handleSubmit, handleChange, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="mx-auto w-6/12">
              <h1 className=" text_gradient text-3xl font-bold normal-case">
                Insert Book
              </h1>

              <Field
                onChange={handleChange}
                value={values.title}
                name="title"
                type="text"
                placeholder="Type title here "
                className="input input-bordered my-2 w-full "
                id="title"
                required
              />
              <ErrorMessage
                className="text-rose-600"
                name="title"
                component="div"
              />

              <Field
                onChange={handleChange}
                value={values.price}
                name="price"
                type="number"
                placeholder="Type price here"
                className="input input-bordered my-2 w-full "
                id="price"
                required
              />
              <ErrorMessage
                className="text-rose-600"
                name="price"
                component="div"
              />

              <textarea
                onChange={handleChange}
                value={values.Description}
                name="Description"
                className="textarea input-bordered my-2 w-full "
                placeholder="Description"
                id="Description"
                rows="3"
                required
              ></textarea>
              <ErrorMessage
                className="text-rose-600"
                name="Description"
                component="div"
              />

              <button
                type="submit"
                className="btn btn-outline btn-info my-2"
                // disabled={isSubmitting}
                disabled={!isLogedIn}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Addform;
