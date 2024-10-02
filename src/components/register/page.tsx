"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import { FormikHelpers } from "formik";
import "react-toastify/dist/ReactToastify.css";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  accessToken: string;
  message: string;
}

const Register: React.FC = () => {
  // Initial values for Formik fields
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"), // Added validation for name
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(1, "Password can't be empty")
      .required("Password is required"),
  });

  // Handle form submission
  const onSubmit = (
    values: RegisterFormValues,
    { setSubmitting }: FormikHelpers<RegisterFormValues>
  ) => {
    console.log("Form values", values);
    axiosInstance
      .post<RegisterResponse>("/user/register", values)
      .then((response) => {
        console.log("response:", response);
        toast.success(response?.data?.message || "Registered successfully!");
        setSubmitting(false);
      })
      .catch((error) => {
        console.log("error:", error);
        // console.log('error.response?.data?.message:', error.response?.data?.message);
        toast.error(error.response?.data?.message || "Registration failed");
        setSubmitting(false); // Stop loading after error
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 shadow-md rounded-lg bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored" 
      />
    </div>
  );
};

export default Register;
