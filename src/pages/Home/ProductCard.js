import React from "react";

const ProductCard = () => {
  return (
    <div className="">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1
          class="text-2xl font-semibold text-gray-700 
          capitalize lg:text-3xl dark:text-gray-800 mb-3"
        >
          OUR
          <br /> All <span class="text-blue-500"> Products</span>
        </h1>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&w=1000&q=80?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                T shirt
              </h5>
              <p className="mb-5 text-gray-700">
                We create high quality, clothes. Our clothes and labeling
                services help shape customer to find get fit your specific
                needs.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-bold 
                tracking-wide text-white transition duration-200 rounded shadow-md
                 bg-sky-500 hover:bg-sky-600 
                 focus:shadow-outline focus:outline-none"
              >
                See Details
              </button>
            </div>
          </div>
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Pant
              </h5>
              <p className="mb-5 text-gray-700">
                We create high quality, clothes. Our clothes and labeling
                services help shape customer to find get fit your specific
                needs.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center
                 h-12 px-6 font-bold tracking-wide text-white 
                 transition duration-200 rounded shadow-md bg-sky-500
                  hover:bg-sky-600 focus:shadow-outline focus:outline-none"
              >
                See Details
              </button>
            </div>
          </div>
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://images.unsplash.com/photo-1599799045670-b6a30c133f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hhcml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60?ver=6?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Shari
              </h5>
              <p className="mb-5 text-gray-700">
                We create high quality, clothes. Our clothes and labeling
                services help shape customer to find get fit your specific
                needs.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6
                 font-bold tracking-wide text-white transition duration-200 
                 rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline 
                 focus:outline-none"
              >
                See Details
              </button>
            </div>
          </div>
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://images.unsplash.com/photo-1619715613791-89d35b51ff81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVoZW5nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Lhengga
              </h5>
              <p className="mb-5 text-gray-700">
                We create high quality, clothes. Our clothes and labeling
                services help shape customer to find get fit your specific
                needs.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 
                font-bold tracking-wide text-white transition duration-200 
                rounded shadow-md bg-sky-500 hover:bg-sky-600 focus:shadow-outline
                 focus:outline-none"
              >
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Shoes"
            className="rounded-xl h-30 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">T shirt</h2>
          <p>Best T shirt.Order now to grab your favourite t shirt</p>
          <p>Price:20$</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Shoes"
            className="rounded-xl h-30 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">T shirt</h2>
          <p>Best T shirt.Order now to grab your favourite t shirt</p>
          <p>Price:20$</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
