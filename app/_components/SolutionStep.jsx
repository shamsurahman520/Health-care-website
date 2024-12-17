"use client"
import AOS from "aos"
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const SolutionStep = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        // duration: 1500, // Slow down animations globally
        easing: "ease-out",
        once: "true"
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8">
        <div className="p-6 py-10 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9562/9562871.png"
            className="w-14 mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="p-6 py-10 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="30">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10691/10691802.png"
            className="w-14 mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="p-6 py-10 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
        data-aos="fade-down"
        data-aos-duration="1400"
        data-aos-delay="60">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png"
            className="w-14 mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="p-6 py-10 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
        data-aos="fade-down"
        data-aos-duration="1600"
        data-aos-delay="90">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11421/11421769.png"
            className="w-14 mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionStep;

