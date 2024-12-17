"use client"
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import React from "react";

const AboutUs = () => {
  useEffect(()=>{
      if (typeof window !== "undefined") {
          AOS.init({
            easing: "ease-out",
            once: true,
          });
        }
}, []);

  return (
    <div className="container">
      <div className="grid grid-cols-4">
        <div className=""></div>
        <div className="col-span-2 text-center py-10">
          <h2 className="text-xl font-medium pb-3">- About Us</h2>
          <h1 className="text-4xl font-semibold">
            <span className="text-blue-600">4 Easy Steps</span> And Get Your
            Solution
          </h1>
        </div>
        <div className=""></div>
      </div>
      {/* ************************************** */}
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 text-center  mt-10 mx-6">
        <div className="py-16 px-4 md:px-10  border-blue-600 border-[3px] rounded-full cursor-pointer hover:transition-all duration-500 hover:bg-blue-600 hover:text-white"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="0">
          <h1 className="text-5xl pb-4">80%</h1>
          <h2 className="text-2xl py-3">Highly Skilled Doctor</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="py-16 px-4 md:px-10 rounded-full bg-blue-600 text-white"
        data-aos="fade-down"
        data-aos-duration="1300"
        data-aos-delay="30">
          <h1 className="text-5xl pb-4">80%</h1>
          <h2 className="text-2xl py-3">Highly Skilled Doctor</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="py-16 px-4 md:px-10 border-blue-600 border-[3px] rounded-full cursor-pointer hover:transition-all duration-500 hover:bg-blue-600 hover:text-white"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="60">
          <h1 className="text-5xl pb-4">80%</h1>
          <h2 className="text-2xl py-3">Highly Skilled Doctor</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="py-16 px-4 md:px-10 rounded-full bg-gray-800 text-white"
        data-aos="fade-down"
        data-aos-duration="1700"
        data-aos-delay="90">
          <h1 className="text-5xl pb-4">80%</h1>
          <h2 className="text-2xl py-3">Highly Skilled Doctor</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
 export default AboutUs
