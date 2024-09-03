import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogNotCreated = () => {
    
    const navigate = useNavigate();

  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[89vh] lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        <strong className="font-extrabold text-red-700 sm:block"> You Haven't Created A Blog! </strong>
      </h1>

      <p className="mt-4 sm:text-2xl/relaxed">
        Your blog posts won’t be perfect, but you just have to do it. You have to start somewhere.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div
          className="cursor-pointer block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          onClick={()=>navigate("/create-blog")}
        >
          Create Blog
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default BlogNotCreated