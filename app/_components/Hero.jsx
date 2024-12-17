"use client";
import "aos/dist/aos.css";
import{ useEffect } from "react"
import AOS from "aos"

import Image from "next/image";
import React from "react";
import { MoveUpRight } from "lucide-react";
import {
  dlogo1,
  dlogo2,
  dlogo3,
  dlogo4,
  dlogo5,
} from "@/public/assets/index.js";


function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])

  const dlogoImages = [dlogo1, dlogo2, dlogo3, dlogo4, dlogo5];
  return (
    <>
      <section className="h-auto">
        <div className=" grid md:grid-cols-2 grid-cols-1 pt-14">
          {/* Image Section */}

          <div className="order-1 md:order-2 pt-14 pl-6 flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-quart"
          >
            <div className="relative aspect-square w-[600px] overflow-hidden">
              <Image
                src="/assets/main-female-doctor.webp"
                alt="main-pic"
                fill
                className="rounded-md object-contain "
              />
            </div>
          </div>

          {/* Content Section */}
          <div className=" ml-6 mr-6 pt-10 md:mt-32 py-4 order-2 md:order-1">

            <h5 className=""
                 data-aos="fade-right"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in"
                >-The Best Health Solution</h5>
            <h1 className="text-4xl font-[600] lg:text-7xl md:py-4 mt-4" 
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in"
            >
              Optimal <span className="text-blue-600">Health</span>, One Click
              Away
            </h1>
            <p className="text-lg py-4 mr-6"
            data-aos="fade-right"
            data-aos-duration="1400"
            data-aos-easing="ease-in"
            data-aos-once="true">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              tincidunt, justo in tincidunt luctus, metus tellus ultricies nunc,
              nec vestibulum sapien nunc nec sapien.
            </p>

            <div className="flex flex-wrap gap-4 mt-5" 
            data-aos="fade-right"
            data-aos-duration="1600"
            data-aos-easing="ease-in"
            data-aos-once="true"
            >
              <button className="bg-blue-600 text-white hover:shadow-xl h-12 rounded-full px-9 text-lg font-normal w-full md:w-auto">
                Book an appointment
              </button>
              <button className="bg-slate-100 text-dark inline-flex items-center justify-center gap-2 hover:shadow-xl rounded-full shadow-lg py-2 h-12 px-9 text-lg font-normal w-full md:w-auto">
                See How We Work
                <MoveUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-8 py-16">
        {dlogoImages.map((img, ind) => (
          <div key={ind} className="flex justify-center">
            <Image
              src={img}
              alt={`dlogo${ind + 1}`}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="text-center py-12 md:py-24 mx-4 md:mx-30">
        <h2 className="text-lg md:text-xl font-medium pb-3">
          -Fastest Solution
        </h2>
        <h1 className="text-2xl md:text-4xl font-semibold">
          <span className="text-blue-600">4 Easy Steps</span> And Get Your
          Solution
        </h1>
      </div>
    </>
  );
}

export default Hero;

