import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import myvood from "../../assets/images/myvood.png";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center flex-col animation landingPage">
      <section className="flex justify-center items-center flex-col animation landingPage min-h-screen section1">
        <img src={myvood} alt="" className="" />
        <h1 className="sm:text-6xl yellow sm:w-4/6 sm:mt-60 text-center text-xl font-bold px-8 relative">
          MY LIFE, MY JOURNEY, MY VOOD<span className="yellow">.</span>
        </h1>
        <h4 className="sm:text-2xl text-white sm:w-4/6text-center text-md px-10 relative text-center">
          Try our culturally diverse, vegan transition plans to transform and
          energize your life.
        </h4>
        <div className="sm:relative absolute bottom-0 flex p-2 hidden">
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
        <a className="mt-20 hidden" href="mailto:info@myvood.co.uk">
          info@myvood.co.uk
        </a>
        <button className="p-2 bg-grey mt-10 border-2 border-white text-white font-bold">
          Transition plans
        </button>
      </section>
      <section className="flex flex-wrap animation landingPage min-h-screen min-w-screen section2">
        <div className="yellow-bg w-full text-center text-white p-10 m-2 mt-4 mx-4">
          <h1 className="font-bold">WEST AFRICAN PLAN</h1>
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
      <section className="text-center flex flex-col justify-center items-center animation landingPage min-h-screen min-w-screen p-6 section3">
        <div className="flex items-center flex-col mb-10 border-2 border-gray-100 rounded-xl py-6 px-3">
          <img src="https://static.wixstatic.com/media/fb7254_0dd9432a370b47519ce2015b2a831773~mv2.png/v1/fill/w_205,h_205,al_c,q_85,usm_0.66_1.00_0.01/fb7254_0dd9432a370b47519ce2015b2a831773~mv2.webp" alt="vegan health"/>
          <h3 className="font-bold text-2xl green2">FOR HEALTH</h3>
          <p className="mt-2">
            Vegetarian diets protect against cardiovascular diseases, cardio
            metabolic risk factors, some cancers and total mortality. However,
            Vegan diets in particular provide additional protection against
            obesity, hypertension, type 2 diabetes and cardiovascular mortality.
          </p>
          <p className="font-bold text-sm mt-2">
            (Jenkins et al., 2014. Beyond meatless, the health effects of vegan
            diets: Findings from the Adventist cohorts.)
          </p>
        </div>
        <div className="flex items-center flex-col mb-10 border-2 border-gray-100 rounded-xl py-6 px-3">
          <img src="https://static.wixstatic.com/media/fb7254_2743e16fcad9468d812932f5f9981616~mv2.png/v1/fill/w_173,h_173,al_c,q_85,usm_0.66_1.00_0.01/fb7254_2743e16fcad9468d812932f5f9981616~mv2.webp" alt="vegan planet"/>
          <h3 className="font-bold text-2xl green2">FOR THE PLANET</h3>
          <p className="mt-2">
            With animal agriculture contributing to 18% of Greenhouse Gas
            emissions, the most effective way you can reverse the impact of
            Global warming is to transition to a Vegan diet. Oxford University
            researches found that simply transitioning to a vegan diet can
            reduce your carbon footprint by 73%.
          </p>
          <p className="font-bold text-sm mt-2">
            (Olivia Petter (2020) independant.co.uk)
          </p>
        </div>
        <div className="flex items-center flex-col mb-10 border-2 border-gray-100 rounded-xl py-6 px-3">
          <img src="https://static.wixstatic.com/media/fb7254_0671a5d9c855468c95b5c0887d958b7b~mv2.png/v1/fill/w_181,h_180,al_c,q_85,usm_0.66_1.00_0.01/fb7254_0671a5d9c855468c95b5c0887d958b7b~mv2.webp" alt="vegan humans" />
          <h3 className="font-bold text-2xl green2">FOR HUMANS</h3>
          <p className="mt-2">
            In 2014 researchers found that reducing animal products in the human
            diet offers the potential to save water resources, up to the amount
            currently required to feed 1.8 billion additional people globally.
          </p>
          <p className="font-bold text-sm mt-2">
            (Jalava et al. (2014). Diet change—a solution to reduce water use?)
          </p>
        </div>
        <div className="flex items-center flex-col mb-10 border-2 border-gray-100 rounded-xl py-6 px-3">
          <img src="https://static.wixstatic.com/media/fb7254_4f24e57377d94e1c93da28014df5bbd0~mv2.png/v1/fill/w_199,h_199,al_c,q_85,usm_0.66_1.00_0.01/fb7254_4f24e57377d94e1c93da28014df5bbd0~mv2.webp" alt="vegan animals" />
          <h3 className="font-bold text-2xl green2">FOR ANIMALS</h3>
          <p className="mt-2">
            Veganism promotes biodiversity. Not only farm animals suffer at the
            hands of the agricultural industry. Thousands of animals are killed
            in an effort to eradicate “nuisance” wildlife that could potentially
            attack “livestock”. Each year in the U.S., more than 3 million
            animals (including endangered species such as golden and bald
            eagles) are killed by Wildlife Services.
          </p>
          <p className="font-bold text-sm mt-2">
            (Veganism and Animal Rights: How Your Diet Affects the Lives of
            Animals. North American Vegetarian Society)
          </p>
        </div>
        <div className="flex items-center flex-col mb-10 border-2 border-gray-100 rounded-xl py-6 px-3">
          <img src="https://static.wixstatic.com/media/fb7254_21da0cebd0bf4b9bbccf56931f2c7ca4~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01/fb7254_21da0cebd0bf4b9bbccf56931f2c7ca4~mv2.webp" alt="vegan world"/>
          <h3 className="font-bold text-2xl green2">FOR THE FUTURE</h3>
          <p className="mt-2">
            Food (and land) security is becoming a major issue. The United
            Nations Food and Agriculture Organization (FAO) estimates that one
            in nine people are chronically undernourished. With the world’s
            population expected to increase from 7 billion to reach 9-11 billion
            by 2050, one of the most urgent questions we now face is how we, as
            a species, will feed ourselves in the future. Unlike industrial
            livestock farming the cultivation of plant foods, is sustainable and
            requires significantly less land usage and other vital resources
            such as water.
          </p>
          <p className="font-bold text-sm mt-2">
            (The Vegan Society. Vegan and plant-based diets use less resources.)
          </p>
        </div>
      </section>
      <section className="flex flex-wrap animation landingPage min-h-screen min-w-screen section2 mb-16">
        <div className="yellow-bg w-full text-center text-white p-10 m-2 mt-4 mx-4">
          <h1 className="font-bold">ABOUT US</h1>
          <p>
            We want to be part of the change and empower others to successfully
            transition to a healthy and sustainable plant-based diet. Learn more
            about MyVood here!
          </p>
        </div>
        <div className="blue-bg w-full text-center text-white p-10 m-2 mx-4">
          <h1 className="font-bold">TRANSITION PLANS</h1>
          <p>
            Have you checked out our transition plans? We have four plans for
            you to choose from which include a diverse range of delicious dishes
            from around the world!
          </p>
        </div>
        <div className="green1-bg w-full text-center text-white p-10 m-2 mx-4">
          <h1 className="font-bold">BLOG</h1>
          <p>
            Check out our articles on topics in Veganism and for more ideas on
            how to successfully transition to a vegan diet!
          </p>
        </div>
        <div className="green2-bg w-full text-center text-white p-10 m-2 mb-4 mx-4">
          <h1 className="font-bold">GET IN TOUCH</h1>
          <p>
            We would love to hear from you; we invite our users to engage with
            us and share their feedback.
          </p>
        </div>
      </section>
      <section className="relative w-full">
        <div className="sm:relative absolute bottom-0 left-0 right-0 mr-0 ml-0 flex p-2 items-center justify-center">
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
      </section>
    </div>
  );
}
