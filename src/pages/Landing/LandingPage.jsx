import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center flex-col animation">
      <h1 className="sm:text-9xl text-gray-600 sm:w-4/6 mt-60 sm:mt-40 text-center text-6xl font-bold p-10 relative">
        WELCOME TO MY VOOD<span className="text-yellow-400">.</span>
      </h1>
      <div className="sm:relative absolute bottom-0 flex p-2">
        <a
          href="https://www.facebook.com/MyVood"
          className="p-6 hover:text-green-500"
        >
          <SiFacebook color="#4B5563"></SiFacebook>
        </a>
        <a href="https://www.twitter.com/" className="p-6">
          <SiTwitter color="#4B5563"></SiTwitter>
        </a>
        <a href="https://www.instagram.com/myvood" className="p-6">
          <SiInstagram color="#4B5563"></SiInstagram>
        </a>
        <a
          href="https://www.linkedin.com/company/myvood-ltd/about"
          className="p-6"
        >
          <SiLinkedin color="#4B5563"></SiLinkedin>
        </a>
      </div>
    </div>
  );
}