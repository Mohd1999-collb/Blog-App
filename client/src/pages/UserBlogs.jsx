import React, { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import axios from 'axios'
import toast from 'react-hot-toast'
import BlogNotCreated from './BlogNotCreated'
import Loader from './Loader'

const UserBlogs = () => {

  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(true)
  const [user, setUser] = useState("")

  const id = localStorage.getItem("userId");
  
  const getUserBlogs = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/user-blog/${id}`).
      then(response => {
        setBlogs(response?.data.userBlog.blogs);
        setUser(response?.data.userBlog.username);
        setLoader(false);
      }).
      catch(err => {
        toast.error("Internal Server Error!");
      })
  }
  useEffect(() => {
    getUserBlogs();
  }, []);


  return (
    <>
      {
       loader == true ?  <Loader/> :  blogs && blogs.length > 0 ?
          blogs.map((blog, index) => 
          <BlogCard key={index} id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={user}
            time={blog.createdAt} />) : <BlogNotCreated/>
      }
    </>

  )
}

export default UserBlogs