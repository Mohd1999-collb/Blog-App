import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {

  const [input, setInput] = useState({
    title: "",
    description: "",
    image: ""
  })

  const navigate = useNavigate();
  const id = localStorage.getItem("userId");

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.title || !input.description || !input.image) {
      toast.error('Please provide title,  description or imageurl!');
      return;
    } else {
      axios.post(`${process.env.REACT_APP_BASE_URL}/posts`, {
        title: input.title,
        description: input.description,
        image: input.image,
        user: id

      }).then((response) => {
        setInput({
          title: "",
          description: "",
          image: ""
        })
        toast.success("Blog created Successfully!");
        navigate('/my-blogs')
      }).catch((error) => {
        if (error.status === 404) {
          toast.error("Sorry! unable to find user.");
        } else {
          toast.error('Internal Server Error!');
        }
        console.log(error);
      })
    }

  }

  return (
    <section className="relative flex flex-wrap lg:items-center">
      <div className="w-full h-[89vh] px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">

          <p className="mt-4 text-gray-500">
            <h1 className="text-2xl font-bold sm:text-3xl">Creating Your First Blog!</h1>
            Discover the crucial steps to creating your first blog, from choosing a platform to publishing your first post.!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="title" className="sr-only">Title</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter blog title"
                name="title"
                value={input.title}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="sr-only">Description</label>

            <div className="relative">
              <textarea
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter blog description"
                name='description'
                value={input.description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="url" className="sr-only">Url</label>

            <div className="relative">
              <input
                type="url"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter image url"
                name='image'
                value={input.image}
                onChange={handleInputChange}
              />

            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="relative  w-full sm:h-96 lg:h-[89vh] lg:w-1/2">
        <img
          alt=""
          src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
export default CreateBlog
