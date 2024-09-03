import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import BlogCard from '../components/BlogCard';
import Loader from './Loader';
import BlogNotCreated from './BlogNotCreated';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(true)

  const getAllUserBlogs = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/posts`).
      then(response => {
        setBlogs(response?.data.blogs);
        setLoader(false);
      }).
      catch(err => {
        toast.error("Internal Server Error");
      })
  }

  useEffect(() => {
    getAllUserBlogs();
  }, [])

  return (
    <>
    {
     loader == true ?  <Loader/> : 
      blogs && blogs.length > 0 ?
        blogs.map((blog,  index) => <BlogCard key={index} id={blog._id}
          isUser={localStorage.getItem("userId") === blog?.user?._id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.user.username}
          time={blog.createdAt} />) : (<BlogNotCreated/>)
    }
  </>
  )
}

export default Blogs