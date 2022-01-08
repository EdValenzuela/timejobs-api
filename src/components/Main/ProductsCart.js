import React from "react";

const ProductsCart = ({item, clean}) => {
    const { id, name, tagline, image_url, target_fg } = item;
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto p-5 ">
            <div className="flex w-full h-full border-2 bg-slate-100 hover:bg-white border-gray-200 cursor-pointer border-opacity-60 rounded-lg overflow-hidden p-5">
              <div className="w-1/12 h-2/4">
                <img
                    className="object-cover object-center mx-auto rounded"
                    src={image_url}
                    alt="blog"
                />
              </div>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {name}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {tagline}
                </h1>
                <p className="leading-relaxed mb-3 text-4xl font-bold text-black">
                  $ {target_fg}
                </p>
                <button onClick={ () => clean(id)} className="font-bold text-xl text-white bg-pink-900 hover:bg-pink-700 px-5 py-3 border-r-2 rounded-md active">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </button>
              </div>
            </div>
      </div>
    </section>
  );
};

export default ProductsCart;
