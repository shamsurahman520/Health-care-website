"use client";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Star } from "lucide-react";

const Tetimonial = () => {
  return (
    <>
      <div className=" lg:mx-8 text-center bg-[#f1f5ff] md:py-16 px-8 mt-32">
        <div className="grid md:grid-cols-4">
          <div className=""></div>
          <div className="col-span-2">
            <h2 className="text-xl font-medium pb-3">- Testimonials</h2>
            <h1 className="text-5xl font-semibold md:px-10">
              What <span className="text-blue-600">Our Patients</span> Says
              About Our Service
            </h1>
          </div>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {Array(4)
              .fill(0)
              .map((ele, i) => {
                return (
                  <SwiperSlide key={i}>
                    <section className="text-gray-600 body-font ">
                      <div className="container lg:px-5 py-14 pb-24 mx-auto">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 lg:px-8">
                          <div className="flex flex-wrap ">
                            <div className=" w-full bg-white p-8 rounded hover:transition-all hover:scale-105 duration-500 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <Image
                                  src="/assets/comma.png"
                                  width={32}
                                  height={32}
                                  alt="comma"
                                  className="mb-5 opacity-60"
                                />
                                <p className="flex gap-2 items-center text-xl font-semibold">
                                  <Star size={24} className="text-yellow-500" />{" "}
                                  4.8
                                </p>
                              </div>
                              <p className="leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In scelerisque semper elit non
                                pellentesque. Curabitur neque arcu, efficitur
                                facilisis porta at, feugiat ut est. Vivamus sed
                                dui in dui vehicula congue. Phasellus sed
                                pellentesque nisi. Phasellus tempus bibendum
                                massa ut tincidunt. Nam hendrerit ut tortor eget
                                rutrum. Suspendisse facilisis ante eget
                                fringilla auctor. Nam a odio orci. Pellentesque
                                imperdiet quis sem
                              </p>
                              <a className="inline-flex items-center">
                                <Image
                                  src="/assets/tetimonial1.png"
                                  width={56}
                                  height={56}
                                  alt="testimonial"
                                  className="rounded-full object-cover object-center"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                  <span className="title-font font-medium text-gray-900">
                                    Ali Ahmed
                                  </span>
                                  <span className="text-gray-500 text-sm">
                                    DESIGNER
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-wrap ">
                            <div className=" w-full bg-white p-8 rounded hover:transition-all hover:scale-105 duration-500 cursor-pointer">
                              <div className="flex items-center justify-between">
                                <Image
                                  src="/assets/comma.png"
                                  width={32}
                                  height={32}
                                  alt="comma"
                                  className="mb-5 opacity-60"
                                />
                                <p className="flex gap-2 items-center text-xl font-semibold">
                                  <Star size={24} className="text-yellow-500" />{" "}
                                  4.8
                                </p>
                              </div>
                              <p className="leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In scelerisque semper elit non
                                pellentesque. Curabitur neque arcu, efficitur
                                facilisis porta at, feugiat ut est. Vivamus sed
                                dui in dui vehicula congue. Phasellus sed
                                pellentesque nisi. Phasellus tempus bibendum
                                massa ut tincidunt. Nam hendrerit ut tortor eget
                                rutrum. Suspendisse facilisis ante eget
                                fringilla auctor. Nam a odio orci. Pellentesque
                                imperdiet quis sem
                              </p>
                              <a className="inline-flex items-center">
                                <Image
                                  src="/assets/tetimonial1.png"
                                  width={56}
                                  height={56}
                                  alt="testimonial"
                                  className="rounded-full object-cover object-center"
                                />
                                <span className="flex-grow flex flex-col pl-4">
                                  <span className="title-font font-medium text-gray-900">
                                    Ali Ahmed
                                  </span>
                                  <span className="text-gray-500 text-sm">
                                    DESIGNER
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Tetimonial;
