import React from "react";
import Navbar from "../../shared/navbar/Navbar";
import guy from "../../assets/img/Website Hompage_Large Images(1).png";
import text from "../../assets/img/Website Hompage_Large Images(2).png";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import linkedin from "../../assets/img/linkedin.png";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="homepage bg-black overflow-hidden h-full">
        <section className="homepage__section bg-black overflow-hidden flex justify-evenly items-center h-full mt-20">
          <div className="homepage__section__down w-1/2 flex flex-col items-center">
            <div className="flex flex-col items-center justify-start">
              <img src={text} alt="" className="homepage__text ml-16" />
            </div>
            <button className="brown-bg px-8 py-1 text-white mb-4 mr-24">
              Start
            </button>
            <div className="flex flex-row mr-24">
              <img src={instagram} alt="" className="h-10 m-2" />
              <img src={linkedin} alt="" className="h-10 m-2" />
              <img src={facebook} alt="" className="h-10 m-2" />
            </div>
          </div>
          <img src={guy} alt="" className="homepage__guy w-2/3" />
        </section>
      </div>
    </div>
  );
}
