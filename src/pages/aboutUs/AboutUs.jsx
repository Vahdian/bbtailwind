import React from "react";
import "./aboutus.css";
import kimmy from "../../assets/images/team/kiki.jpeg";
import louisa from "../../assets/images/team/louisa.jpeg";
import bev from "../../assets/images/team/fakebev.jpeg";
import yo from "../../assets/images/team/yo.jpg";
import dennis from "../../assets/images/team/dennis.jpeg";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <div className="px-10 sm:px-40 mt-16">
        <div className="aboutus--title mb-4">
          <h1 className="sm:text-4xl text-4xl text-left mt-4 font-bold sm:mt-40 text-white p-2">
            About us<span className="text-yellow-400">.</span>
            <h5 className="text-sm">MY LIFE, MY JOURNEY, MYVOOD</h5>
          </h1>
        </div>
        <p className="font-bold pt-4 yellow-bg p-4 text-center">
          MyVood Ltd is a black-owned business started by two young women
          passionate about making the world a more ethical place. We have
          first-hand experience of the challenges one can face when
          transitioning to a vegan and plant-based diet (social, emotional,
          physical and logistical) and endeavour to make this process a little
          more straight-forward and enjoyable for aspiring vegans.
        </p>
        <p className="pt-4 mb-4 text-center">
          MyVood is intended to be a supportive platform that provides
          individuals interested in transitioning to a plant based diet with
          information on what constitutes a healthy, sustainable and ethical
          diet. We endeavour to be transparent about the barriers you may
          encounter during your transition and provide tips, advice and
          strategies to overcome these barriers, enabling aspiring vegans to
          build the dietary resilience necessary to maintain a long-term,
          plant-based diet.
        </p>
        <img
          className="mt-4"
          src="https://static.wixstatic.com/media/d4feca9b2222e4c23072107791b8c4a4.jpg/v1/crop/x_11,y_301,w_1253,h_447/fill/w_462,h_165,al_c,q_80,usm_0.66_1.00_0.01/d4feca9b2222e4c23072107791b8c4a4.webp"
          alt=""
        />
        <h1 className="font-bold text-center mt-8">THE CHALLENGE</h1>
        <p className="text-sm text-center">
          The challenge For many years a “one-size fits all” approach, has been
          implemented in all existing, leading transition programs, apps and
          websites. Vegans are not a monolithic group, and we believe that
          veganism should be accessible to anyone who wants to live ethically.
          Furthermore, minority ethnic groups are overrepresented in poor health
          statistics and suffer the worst health outcomes, a direct consequence
          of food poverty and poor diet; further reason for minority groups to
          be considered in a movement that has been associated with improved
          health and wellbeing!{" "}
        </p>
        <div className="aboutus--vision p-4 mt-8">
          <h1 className="sm:text-4xl text-2xl text-center sm:text-left mt-10 font-bold text-white">
            OUR VISION<span className="text-yellow-400">.</span>
          </h1>
          <p className="font-bold text-white p-4 text-center">
            A more ethical world in which individuals are able to healthily and
            successfully transition to a sustainable plant-based diet.
          </p>
        </div>
        <div className="aboutus--mission p-4 mt-8">
          <h1 className="sm:text-4xl text-2xl text-center sm:text-left mt-10 font-bold text-white">
            OUR MISSION<span className="text-yellow-400">.</span>
          </h1>
          <p className="font-bold text-white p-4 text-center">
            A more ethical world in which individuals are able to healthily and
            successfully transition to a sustainable plant-based diet.
          </p>
        </div>
        <div>
          <p className="text-center text-ms font-bold mt-8 font-italic p-2">
            “Veganism isn't just about kicking a meat-eating habit and getting
            some veggies into your diet. It's a powerful rejection of a racist
            food system and a racist, cannibalistic politics that characterizes
            animals and nonwhite people as disposable and consumable.”{" "}
            <h5 className="mt-2">-Aph Ko</h5>
          </p>
        </div>
        <h1 className="font-bold mt-4 mb-4 text-center">
          HOLISTIC. INCLUSIVE. SUPPORTIVE.
        </h1>
        <p className="text-ms text-center">
          MyVood is intended to be a holistic, inclusive and supportive platform
          that provides individuals interested in transitioning to a plant based
          diet with information on what constitutes a healthy, sustainable and
          ethical diet as well as transition plans that include foods from all
          corners of the world celebrating and promoting the gastronomic culture
          of non-European countries. We endeavour to be transparent about the
          barriers aspiring Vegans may encounter during their transition and
          provide tips, advice and strategies to overcome these barriers,
          enabling aspiring vegans to build the dietary resilience necessary to
          maintain a long-term, plant-based diet.
        </p>
        <section className="flex flex-wrap animation landingPage min-h-screen min-w-screen section2 mb-16">
          <Link
            className="yellow-bg w-full text-center text-white p-10 m-2 mt-4 mx-4"
            to="/about-us"
          >
            <h1 className="font-bold">ABOUT US</h1>
            <p>
              We want to be part of the change and empower others to
              successfully transition to a healthy and sustainable plant-based
              diet. Learn more about MyVood here!
            </p>
          </Link>
          <Link
            className="blue-bg w-full text-center text-white p-10 m-2 mx-4"
            to="/transition-plans"
          >
            <h1 className="font-bold">TRANSITION PLANS</h1>
            <p>
              Have you checked out our transition plans? We have four plans for
              you to choose from which include a diverse range of delicious
              dishes from around the world!
            </p>
          </Link>
          <Link
            className="green1-bg w-full text-center text-white p-10 m-2 mx-4"
            to="/blog"
          >
            <h1 className="font-bold">BLOG</h1>
            <p>
              Check out our articles on topics in Veganism and for more ideas on
              how to successfully transition to a vegan diet!
            </p>
          </Link>
          <Link
            className="green2-bg w-full text-center text-white p-10 m-2 mb-4 mx-4"
            to="/contact"
          >
            <h1 className="font-bold">GET IN TOUCH</h1>
            <p>
              We would love to hear from you; we invite our users to engage with
              us and share their feedback.
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}
