import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
    return (
        <div>
            <section
                className="sticky bg-[url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[90vh] lg:justify-end lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center flex flex-col items-center justify-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Let us create your

                            <strong className="block font-extrabold text-rose-500"> First Blog. </strong>
                        </h1>

                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Blogging is hard because of the grind required to stay interesting and relevant!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <div
                                onClick={() => navigate('/register')}
                                className="block cursor-pointer w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        

    )
}

export default Home