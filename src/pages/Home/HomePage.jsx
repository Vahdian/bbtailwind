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
        <section className="homepage__section bg-black overflow-hidden flex justify-evenly items-center h-full sm:mt-20">
          <div className="homepage__section__down sm:w-1/2 flex flex-col items-center justify-center">
            <div>
              <img
                src={text}
                alt=""
                className="homepage__text sm:ml-16 mb-12"
              />
            </div>
            <div>
              <button className="brown-bg px-12 py-2 text-white mb-4 sm:mr-24 rounded-xl">
                Learn more
              </button>
            </div>

            <div className="flex flex-row sm:mr-24">
              <img src={instagram} alt="" className="h-8 sm:h-10 m-2" />
              <img src={linkedin} alt="" className="h-8 sm:h-10 m-2" />
              <img src={facebook} alt="" className="h-8 sm:h-10 m-2" />
            </div>
          </div>
          <img
            src={guy}
            alt=""
            className="homepage__guy w-2/3 hidden sm:flex"
          />
        </section>
        <section className="flex justify-center mt-12 px-10">
          <div className="">
            <h1 className="text-3xl font-bold mb-4">
              ABOUT <span className="custom-yellow">US</span>
            </h1>
            <h2 className="text-xl font-bold mb-4">Who are we?</h2>
            <p className="mb-4">
              We are a social justice organisation which aims to address
              systemic inequalities within the mental health sector and wider
              society. We are committed to working towards building a just
              society that welcomes and celebrates diversity.
            </p>
            <h2 className="text-xl font-bold mb-4">
              Our service for individuals of afro-descent
            </h2>
            <p className="mb-4">
              We aim to{" "}
              <span className="font-bold">dismantle mental health stigma</span>{" "}
              within the afro-diaspora and{" "}
              <span className="font-bold">
                reduce barriers to mental health service engagement
              </span>{" "}
              through the provision of online mental health and wellbeing
              resources and services. We provide a free mental health and
              wellbeing service for individuals of afro-descent from the most
              vulnerable collectives (e.g. individuals with an undocumented
              migrant status) Our team of human rights advocates offer legal
              advice and support to victims of racism.
            </p>
            <h2 className="text-xl font-bold mb-4">Our social justice work</h2>
            <p className="mb-4">
              We offer a variety of anti-racist, anti-bias services to
              organisations who share our commitment to social justice.
            </p>
            <ul className="list-disc mb-8">
              <li>
                Diversity, Equity and Inclusion Consulting (DEI Audits, DEI
                reporting, Bespoke DEI strategy and intervention)
              </li>
              <li>Cultural Competency consulting (for wellbeing services)</li>
              <li>Anti-racist, anti-bias training for senior management</li>
              <li>Anti-racist, anti-bias training for staff</li>
              <li>DEI Advising for Start-ups</li>
              <li>Anti-racism resources</li>
              <li>Mental Health awareness training</li>
            </ul>
            <h1 className="text-5xl font-bold hollow">RESILIANCE.</h1>
            <h1 className="text-5xl font-bold hollow">RESISTANCE.</h1>
            <h1 className="text-7xl font-bold hollow">REFORM.</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
