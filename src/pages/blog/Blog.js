import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <section class="bg-gray-900 dark:bg-gray-100 rounded">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-100 capitalize lg:text-3xl dark:text-gray-800">
            From the blog
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/blog"
                  class="text-xl font-semibold text-gray-100 hover:underline dark:text-gray-800 "
                >
                  How to Ai is effecting us in every Sector?
                </Link>

                <span class="text-sm text-gray-100 dark:text-gray-700">
                  On: 20 October 2022
                </span>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/blog"
                  class="text-xl font-semibold text-gray-100 hover:underline dark:text-gray-800 "
                >
                  How to use Silk Cotton Clothes?
                </Link>

                <span class="text-sm text-gray-100 dark:text-gray-700">
                  On: 20 November 2022
                </span>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/blog"
                  class="text-xl font-semibold text-gray-100 hover:underline dark:text-gray-800 "
                >
                  How to wash clothes properly?
                </Link>

                <span class="text-sm text-gray-100 dark:text-gray-700">
                  On: 25 November 2022
                </span>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/blog"
                  class="text-xl font-semibold text-gray-100 hover:underline dark:text-gray-800 "
                >
                  All the techniques you want to know about Best Brand finding!!
                </Link>

                <span class="text-sm text-gray-100 dark:text-gray-700">
                  On: 30 September 2022
                </span>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/blog"
                  class="text-xl font-semibold text-gray-100 hover:underline dark:text-gray-800 "
                >
                  Minimal workspace for your Dream Job?
                </Link>

                <span class="text-sm text-gray-100 dark:text-gray-700">
                  On: 13 January 2023
                </span>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <Link
                  to="/blog"
                  class="text-xl font-semibold text-gray-100 hover:underline dark:text-gray-800 "
                >
                  What do you want to know about AI effectipon in Garments Industtry?
                </Link>

                <span class="text-sm text-gray-100 dark:text-gray-700">
                  On: 10 February 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
