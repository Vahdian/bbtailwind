import React from "react";

export default function TransitionPlans() {
  return (
    <div>
      <section className="flex flex-wrap animation landingPage min-w-screen section2">
        <div className="w-full text m-2 mt-4 mx-4 mt-12">
          <p className="text-xs font-bold ">MY JOURNEY, MY LIFE, MY VOOD</p>
          <h1 className="text-3xl">Transition plans</h1>
        </div>
        <div className="yellow-bg w-full text-center text-white p-10 m-2 mt-4 mx-4">
          <h1 className="font-bold">WEST AFRICAN PLAN</h1>
          <img
            src="https://static.wixstatic.com/media/fb7254_538501218d2142d88e12cbd80b973ba9~mv2.png/v1/fill/w_150,h_294,al_c,q_85,usm_0.66_1.00_0.01/fb7254_538501218d2142d88e12cbd80b973ba9~mv2.webp"
            alt=""
          />
          <p>
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
        </div>
        <div className="blue-bg w-full text-center text-white p-10 m-2 mx-4">
          <h1 className="font-bold">SOUTH ASIAN PLAN</h1>
          <p>
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
        </div>
        <div className="green1-bg w-full text-center text-white p-10 m-2 mx-4">
          <h1 className="font-bold">MEDITERRANEAN</h1>
          <p>
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
        </div>
        <div className="green2-bg w-full text-center text-white p-10 m-2 mb-4 mx-4">
          <h1 className="font-bold">WORLD FOOD PLAN</h1>
          <p>
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
        </div>
      </section>
    </div>
  );
}
