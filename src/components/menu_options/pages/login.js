import Mobile_header from "../components/mobile_header";
import Facebook from "../images/facebook.svg";
import Apple from "../images/apple.svg";
import Google from "../images/google.svg";
import Toggle from "../../dashboard/toggle"
import bar from "../../icons/blue-bar.svg"
import Header from "../components/header";
import { useState } from "react";
// import axiosInstance from "../../utils/axiosInstance";
import axiosInstance from "../../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({setShowForm}) {
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState("");

  const [formType, setFormType] = useState(true)

  const handleSubmit =() => {
    if (formType === false) {
      axiosInstance
        .post("/user/register", { name, email, password })
        .then((response) => {
          setFormType(!formType)
          console.log("response:", response);
          localStorage.setItem("token", response.data.accessToken);

          toast.success(response?.data?.message || "Registered successfully!");
        })
        .catch((error) => {
          console.log("error:", error);
          toast.error(error.response?.data?.message || "Registration failed");
        });
    } else {
      axiosInstance
        .post("/user/login", { email, password })
        .then((response) => {
          console.log("response:", response);
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("userId", response.data.userId);

          toast.success(response?.data?.message || "Logged in successfully!");
        })
        .catch((error) => {
          console.log("error:", error);
          toast.error(error.response?.data?.message || "Login failed");
        });
    }
  }

  return (
    <div className="bg-[#f5f6f7] min-h-screen sm:min-h-fit sm:h-fit w-full sm:w-[60rem] overflow-hidden relative sm:rounded-3xl">
      <img src={bar} className="absolute hidden sm:block"></img>
      <div className="sm:hidden">
        <Mobile_header title="Login" display_logout="hidden" />
      </div>
      <div className="hidden sm:block">
        <Header title={formType !== true ? "Sign Up" : "Log In"} setShowForm={setShowForm} />
      </div>
      <div className="px-6 flex flex-col sm:px-14">
        <div className="flex flex-col gap-6">
          {formType !== true && 
            <div className="relative">
              <input
                type="text"
                id="name"
                className="focus:outline-primary bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 
                  w-full text-[1.3rem] font-medium text-black tracking-[0px]"
                placeholder=" "
                onChange={(e) => setName(e.target.value)}
              />
              <label
                for="email"
                className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4"
              >
                Full Name *
              </label>
            </div>
          }
          <div className="relative">
            <input
              type="text"
              id="email"
              className="focus:outline-primary bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 
                w-full text-[1.3rem] font-medium text-black tracking-[0px]"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              for="email"
              className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4"
            >
              Email Address or Username *
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="focus:outline-primary bg-transparent block border-light rounded-xl px-4 pt-8 
              pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              for="password"
              className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4"
            >
              Password*
            </label>
            <img
              src="./icons/eye-gray.svg"
              className="absolute right-4 top-6"
            ></img>
          </div>
        </div>

        <p className="text-[1.2rem] font-bold tracking-[0.18px] text-primary mt-6">
          Forgot password
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex gap-4 items-center my-12">
            <Toggle />
            <p className="text-[1.4rem] font-medium tracking-[0px] text-black">
              Remember me
            </p>
          </div>
          <button
            className="w-full sm:w-auto sm:px-40 h-20 py-6 uppercase text-[1.4rem] font-semibold 
          text-white bg-primary rounded-xl"
            onClick={handleSubmit}
          >
            {formType !== true ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
      <div className="bg-primary-light px-16 py-12 mt-32">
        <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">
          {formType !== true ? "Already have an account?" : "Don’t have an account?"} 
          <span className="text-primary" onClick={()=> setFormType(!formType)}>{formType !== true ? "Log In" : "Sign Up"}</span>.
        </p>
      </div>
    </div>
  );
}
export default Login;