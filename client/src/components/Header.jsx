import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Blogs from '../pages/Blogs'
import Register from '../pages/Register'

import Login from '../pages/Login'
import UserBlogs from '../pages/UserBlogs'
import CreateBlog from '../pages/CreateBlog'
import EditBlog from '../pages/EditBlog'
import Home from '../pages/Home'
import Error from '../pages/Error'
const Header = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/edit-blogs/:id" element={<EditBlog />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default Header