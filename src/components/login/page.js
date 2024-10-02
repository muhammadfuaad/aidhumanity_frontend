import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // Initial values for Formik fields
  const initialValues = {
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(0, "Password can't be empty")
      .required("Password is required"),
  });

  // Handle form submission
  const onSubmit = (values, {setSubmitting}) => {
    console.log("Form values", values);
    axiosInstance.post("/user/login", values).then((response)=>{
      console.log('response:', response)
      localStorage.setItem('token', response.data.accessToken)
      toast.success(response?.data?.message || "Registered successfully!");
      setSubmitting(false);
    })
    .catch((error)=>{
      console.log("error:", error);
      toast.error(error.response?.data?.message || "Registration failed");
      setSubmitting(false); // Stop loading after error
    })
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 p-2 w-full border rounded-lg"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="mt-1 p-2 w-full border rounded-lg"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
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

export default Login;
