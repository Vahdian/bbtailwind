import React from "react";
import "./TransitionPlans.css"
import myvood from "../../assets/images/myvood.png"
export default function TransitionPlans() {
  return (
    <div>
      <section className="flex flex-wrap animation landingPage min-w-screen section2">
        <div className="w-full text m-2 mt-4 mx-4 mt-12">
          <p className="text-xs font-bold ">MY JOURNEY, MY LIFE, MY VOOD</p>
          <h1 className="text-4xl">Transition plans</h1>
        </div>
        <div className="yellow-bg w-full text-center text-white p-10 m-2 mt-4 mx-4 flex flex-row items-center text-left">
        <img
            src={myvood}
            className="transition--image"
          />
          <div className="text-left">
          <h1 className="font-bold">WEST AFRICAN PLAN</h1>
          <p className="text-sm">
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
          </div>
        </div>
        <div className="blue-bg w-full text-center text-white p-10 m-2 mt-4 mx-4 flex flex-row items-center text-left">
        <img
            src={myvood}
            className="transition--image"
          />
          <div className="text-left">
          <h1 className="font-bold">SOUTH ASIAN PLAN</h1>
          <p className="text-sm">
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
          </div>
        </div>
        <div className="green1-bg w-full text-center text-white p-10 m-2 mt-4 mx-4 flex flex-row items-center text-left">
        <img
            src={myvood}
            className="transition--image"
          />
          <div className="text-left">
          <h1 className="font-bold">MEDITERRANEAN</h1>
          <p className="text-sm">
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
          </div>
        </div>
        <div className="green2-bg w-full text-center text-white p-10 m-2 mt-4 mx-4 flex flex-row items-center text-left">
        <img
            src={myvood}
            className="transition--image"
          />
          <div className="text-left">
          <h1 className="font-bold">WORLD FOOD PLAN</h1>
          <p className="text-sm">
            Make this yours. Add images, text and links, or connect data from
            your collection.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}
