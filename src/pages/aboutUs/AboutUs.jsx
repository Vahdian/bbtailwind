import React from "react";
import kimmy from "../../assets/images/team/kiki.jpeg";
import louisa from "../../assets/images/team/louisa.jpeg";
import bev from "../../assets/images/team/fakebev.jpeg";
import yo from "../../assets/images/team/yo.jpg";
import dennis from "../../assets/images/team/dennis.jpeg";
import { SiLinkedin } from "react-icons/si";

export default function AboutUs() {
  return (
    <div>
      <div className="px-10 sm:px-40">
        <h1 className="sm:text-4xl text-2xl text-center sm:text-left mt-4 font-bold sm:mt-40 text-gray-600">
          WE ARE MYVOOD<span className="text-yellow-400">.</span>
        </h1>
        <p className="font-bold text-gray-600 pt-4">
          MyVood Ltd is a black-owned business started by two young women
          passionate about making the world a more ethical place. We have
          first-hand experience of the challenges one can face when
          transitioning to a vegan and plant-based diet (social, emotional,
          physical and logistical) and endeavour to make this process a little
          more straight-forward and enjoyable for aspiring vegans.
        </p>
        <p className="pt-4">
          MyVood is intended to be a supportive platform that provides
          individuals interested in transitioning to a plant based diet with
          information on what constitutes a healthy, sustainable and ethical
          diet. We endeavour to be transparent about the barriers you may
          encounter during your transition and provide tips, advice and
          strategies to overcome these barriers, enabling aspiring vegans to
          build the dietary resilience necessary to maintain a long-term,
          plant-based diet. Watch this space, the MYVood app will be coming
          soon! To be the first to access the app, for free, share your email on
          the home page and we will contact you when the app is up and running!
          For further updates and advice, follow us on Instagram, Facebook and
          Twitter.
        </p>
        <h1 className="sm:text-4xl text-2xl text-center sm:text-left mt-10 font-bold text-gray-600">
          OUR VISION<span className="text-yellow-400">.</span>
        </h1>
        <p className="font-bold text-gray-600 pt-4">
          A more ethical world in which individuals are able to healthily and
          successfully transition to a sustainable plant-based diet.
        </p>
        <h1 className="sm:text-4xl text-2xl text-center sm:text-left mt-10 font-bold text-gray-600">
          OUR MISSION<span className="text-yellow-400">.</span>
        </h1>
        <p className="font-bold text-gray-600 pt-4">
          We want to redefine Veganism and reduce the stigma associated with the
          plant-based diet; to improve “at risk” population health outcomes, the
          environment and human and animal welfare.
        </p>
        <h1 className="sm:text-6xl mt-40 text-2xl text-center font-bold text-gray-600">
          MEET THE TEAM
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-around p-2 sm:p-20 text-center sm:text-left">
          <div className="flex flex-col justify-center items-center">
            <img
              className="h-40 rounded-full border border-gray-600"
              src={kimmy}
              alt="Kimberley Obongonyinge"
            ></img>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <figcaption className="text-gray-600 font-bold text-xl px-2">
                  KIMBERLEY OBONGONYINGE
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/kimmy-obongonyinge-she-her-62805b176/"
                  className="p-1"
                >
                  <SiLinkedin color="#4B5563" size="1.5em"></SiLinkedin>
                </a>
              </div>
              <p className="text-sm  py-4 sm:py-0">
                MyVood Co-founder, Co-Chief Executive Officer and Chief
                Marketing Officer
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="h-40 rounded-full border border-gray-600"
              src={louisa}
              alt="Kimberley Obongonyinge"
            ></img>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <figcaption className="text-gray-600 font-bold text-xl px-2">
                  LOUISA TAWIAH
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/louisa-tawiah7/"
                  className="p-1"
                >
                  <SiLinkedin color="#4B5563" size="1.5em"></SiLinkedin>
                </a>
              </div>
              <p className="text-sm py-4 sm:py-0">
                MyVood Co-founder, Co-Chief Executive Officer and Chief
                Operating Officer
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around p-2 sm:p-20 text-center sm:text-left">
          <div className="flex flex-col justify-center items-center">
            <img
              className="h-40 rounded-full border border-gray-600"
              src={bev}
              alt="Beverley Nzeadi"
            ></img>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <figcaption className="text-gray-600 font-bold text-xl px-2">
                  BEVERLEY NZEADI
                </figcaption>
                <a
                  href="https://www.linkedin.com/company/myvood-ltd/about"
                  className="p-1"
                >
                  <SiLinkedin color="#4B5563" size="1.5em"></SiLinkedin>
                </a>
              </div>
              <p className="text-sm py-4 sm:py-0">Legal Consultant</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="h-40 rounded-full border border-gray-600"
              src={dennis}
              alt="Dennis Obongonyinge"
            ></img>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <figcaption className="text-gray-600 font-bold text-xl px-2">
                  DENNIS OBONGONYINGE
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/dennisobongonyinge/"
                  className="p-1"
                >
                  <SiLinkedin color="#4B5563" size="1.5em"></SiLinkedin>
                </a>
              </div>
              <p className="text-sm py-4 sm:py-0">
                Chief Financial Officer and Business Advisor
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              className="h-40 rounded-full border border-gray-600"
              src={yo}
              alt="German Palero"
            ></img>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <figcaption className="text-gray-600 font-bold text-xl px-2">
                  GERMAN PALERO
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/germanpalero/"
                  className="p-1"
                >
                  <SiLinkedin color="#4B5563" size="1.5em"></SiLinkedin>
                </a>
              </div>
              <p className="text-sm py-4 sm:py-0">
                Chief App & Web development engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
