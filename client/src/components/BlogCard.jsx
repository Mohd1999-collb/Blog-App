import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { FaRegUser } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const BlogCard = ({ id,
  isUser,
  title,
  description,
  image,
  username,
  time, }) => {

  const arr = time.split("T");

  const navigate = useNavigate();

  const handleEdit = ()=> {
    navigate(`/edit-blogs/${id}`)
    
  }
  const handleDelete = ()=> {
    //edit blog
    axios.delete(`http://localhost:9090/posts/${id}`).
    then((response) => {
      toast.success("Blog deleted successfully!");
      window.location.reload();
    }).catch((err) => {
      toast.error("Internal server error: ");
    })



  }

  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Blog Image"
        src={image}
        className="h-56 w-full rounded-md object-cover"
      />
      <dt className="sr-only">Address</dt>

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">{title}</dt>

            <dd className="text-sm text-gray-500">{title}</dd>
          </div>

          <div>

            <dd className="font-medium">{description}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center justify-evenly gap-8 text-xs">
          <div>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaRegUser className='size-5 text-blue-600' />

              <div className="mt-1.5 mr-3 sm:mt-0">
                <p className="text-gray-500">Created By</p>

                <p className="font-medium">{username}</p>
              </div>
            </div>
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <IoMdTime className='size-5 text-blue-600' />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Time</p>

                <p className="font-medium">{arr[0]} / {arr[1].substring(0, 8)}</p>
              </div>
            </div>
          </div>
            {
              isUser && (
                <div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div className="mt-1.5 mr-4 cursor-pointer group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75  sm:mt-0">
                    <span onClick={handleEdit}
                      className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                    >
                      Edit
                    </span>
                  </div>
                  
                  <div className="mt-1.5 cursor-pointer group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75  sm:mt-0">
                    <span onClick={handleDelete}
                      className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                    >
                      Delete
                    </span>
                  </div>
                </div>
    
              </div>
              )
            }
          
        </div>
      </div>
    </div>
  )
}

export default BlogCard