import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import Nav from "./Nav";

const Navbar = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  const [isOpen, setIsOpen] = useState(false);

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully!");
      navigate("/");
      localStorage.clear();
    } catch (error) {
      toast.error("Internal Server Error!");
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 gap-4 items-center justify-end">
          <div className="absolute left-10 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src="https://img.freepik.com/premium-vector/word-blog-vector-banner-with-text-colored-rainbow_100655-2724.jpg" alt="Logo" className='h-10 w-20 rounded-full' />
            </Link>
          </div>

          {
            isLogin && (
              <>
                <div className="w-[25vw] m-auto hidden md:block">
                  <nav aria-label="Global" className='flex justify-center items-center'>
                    <ul className="flex justify-center items-center gap-6 text-xl">
                      <li>
                        <Link className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                          to="/blogs">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                          to="/my-blogs">
                          My Blogs
                        </Link>
                      </li>

                      <li>
                        <Link className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" to="/create-blog">
                          Create Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex gap-4 cursor-pointer  justify-center items-center  sm:flex sm:gap-4">
                    <div
                      className="rounded-md   bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>

                  </div>

                </div>
              </>

            )
          }


          {
            !isLogin && (
              <>
                <div className="flex items-center gap-4">
                  <div className="flex gap-4 justify-center items-center  sm:flex sm:gap-4">
                    <Link
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                      to="/login"
                    >
                      Login
                    </Link>

                    <div className="m:flex">
                      <Link
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                        to="/register"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )
          }



        </div>



        {isOpen && (
          <nav className="md:hidden">
            <ul className="mt-4 space-y-2 px-2 pb-3 text-gray-500 dark:text-white">
              <li>
                <Link className="block px-3 py-2 rounded-md text-base font-medium" to="/blogs">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="block px-3 py-2 rounded-md text-base font-medium" to="/my-blogs">
                  My Blog
                </Link>
              </li>
              <li>
                <Link className="block px-3 py-2 rounded-md text-base font-medium" to="/create-blog">
                  Create Blog
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;