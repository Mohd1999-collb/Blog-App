import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";



const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!input.email || !input.password) {
      toast.error('Please provide email or password!');
      return;
    } else {
    axios.post(`${process.env.REACT_APP_BASE_URL}/login`,{
        email: input.email,
        password: input.password,
    }).then((response) => {
        setInput({
          email: "",
          password: "",
      })
      localStorage.setItem("userId", response.data?.user._id);
      dispatch(authActions.login());
      toast.success("Login Successfully!");
      navigate('/blogs')
    }).catch((error)=>{     
      toast.error('Invlid username or password!');
      console.log(error,);    
    })
  }
   
  }

  return (
    <form className="h-[85vh] items-center flex justify-center px-5 lg:px-0" onSubmit={handleSubmit}>
      <div className="max-w-screen-xl sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Login to your account
              </h1>
          <div className=" flex flex-col items-center">
              <p className="text-[12px] text-gray-500">
                Hey enter your details to login your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
               
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                />
               
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                />
                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                 
                  <span className="ml-3">Log in</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don't have any account yet?{" "}
                  <NavLink to="/register">
                    <span className="text-blue-900 font-semibold">Sign up</span>
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;