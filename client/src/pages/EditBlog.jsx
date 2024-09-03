import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
    const [input, setInput] = useState({
      title: '',
      description: '',
      image: ''
    });

    const { id } = useParams();
    const navigate = useNavigate()
 
    useEffect(() => {
      getBlogDetails();
    }, [id]);

    /* Get blog details */
    const getBlogDetails = () =>{
      axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
       .then((response) => {
          setInput({
            title: response?.data?.blog?.title,
            description: response?.data?.blog?.description,
            image: response?.data?.blog?.image,
          });
        })
       .catch((error) => {
          console.log(error);
        });
    }

    //Handle Input Change
    const handleInputChange = (e) => {
      setInput({...input, [e.target.name]: e.target.value });
    };

    //Submit Blog
    const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9090/posts/${id}`, {
      title: input.title,
      description: input.description,
      image: input.image,
      user: localStorage.getItem("userId")
    }).
    then((response)=>{
      setInput({
        title: "",
        description: "",
        image: ""
      })
      toast.success("Blog Updated Successfully!");
      navigate('/my-blogs');
    }).
    catch((error)=>{
      toast.error('Internal Server Error!')
      console.log(error);
    });
    }

    
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Edit your blog!</h1>
          </div>
    
          <form  onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="title" className="sr-only">Title</label>
    
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Title"
                  name="title"  
                  value={input.title}
                  onChange={handleInputChange}
                />               
              </div>
            </div>
    
            <div>
              <label htmlFor="description" className="sr-only">Description</label>
    
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Description"
                  value={input.description}
                  name='description'
                  onChange={handleInputChange}
                />
    
              </div>
            </div>
            <div>
              <label htmlFor="imageURL" className="sr-only">Image URL</label>    
              <div className="relative">
                <input
                  type="url"
                  className="w-full rounded-lg bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Image URL"
                  value={input.image}
                  name='image'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">    
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )
}

export default EditBlog