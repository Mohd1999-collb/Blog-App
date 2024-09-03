import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from 'react-router-dom'
const Registar = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password) {
      toast.error('All Fields are required!');
      return;
    } else {
      axios.post(`${process.env.REACT_APP_BASE_URL}/register`, {
        username: input.name,
        email: input.email,
        password: input.password,
      }).then((response) => {
        setInput({
          name: "",
          email: "",
          password: "",
        })
        toast.success("User Register Successfully!");
        navigate('/login');        
      }).catch((error) => {
        if (error.status === 401) {
            toast.error("User already exist!");          
        } else {
          toast.error('Internal Server Error!');
        }
        console.log(error.status);
      })
    }

  }
  return (
    <form className="h-[85vh] items-center flex justify-center px-5 lg:px-0" onSubmit={handleSubmit}>
      <div className="max-w-screen-xl sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl mt-[2.8rem] xl:text-4xl font-extrabold text-blue-900">
                Register for a free account
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                />
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
                  <span className="ml-3">Sign up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <NavLink to="/login">
                    <span className="text-blue-900 font-semibold">Sign in</span>
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
export default Registar;