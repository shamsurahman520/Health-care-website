import React from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ConsultSolution = () => {
  return (
    <div className="container md:py-16 my-10 md:my-20 bg-[#f1f5ff]">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center mx-4 sm:mx-6 md:mx-10">
        {/* ************************ */}
        {/* Right-side Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/assets/consultsolution.webp"
            width={600}
            height={600}
            alt="consultsolution"
            className="rounded-md"
          />
        </div>
        {/* ************************ */}
        {/* Left-side Content */}
        <div className="md:p-20 order-2 md:order-1">
          <div className="">
            <h2 className="text-xl font-medium pb-3">- Fastest Solution</h2>
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
              <span className="text-blue-600">4 Easy Steps</span> And Get Your Solution
            </h1>
          </div>
          <div className="flex flex-col gap-4 py-8">
            <div className="flex items-center space-x-3">
              <Checkbox id="terms1" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms1"
                className="text-[17px] font-normal leading-none"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="terms2" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms2"
                className="text-[17px] font-normal leading-none"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="terms3" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms3"
                className="text-[17px] font-normal leading-none"
              >
                Accept terms and conditions
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="terms4" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms4"
                className="text-[17px] font-normal leading-none"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <Button size="lg" className="">
            Book an appointment
          </Button>
        </div>
        {/* ************************ */}
      </div>
    </div>
  );
};

export default ConsultSolution;
