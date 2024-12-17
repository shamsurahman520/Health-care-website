import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightFromLine } from "lucide-react";

const Services = () => {
  return (
    <div className="mx-8 bg-gray-800 py-20 px-4 sm:px-4 lg:px-16 md:px-8 text-white my-32">
      {/* *************************************** */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 items-center p-2 py-10">
        <div className="">
          <h2 className="text-lg md:text-xl font-medium pb-3">- Specialized</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            <span className="text-blue-600">Specialized</span> Services For Your
            Health Needs
          </h1>
        </div>
        <div className="text-start md:text-end max-sm:mt-4">
          <Button size="lg" className="text-white">
            View All <ArrowRightFromLine size={24} />
          </Button>
        </div>
      </div>
        
        {/* *************************************** */}
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-6">
        {[1,2,3,4,5,6].map((itm,ind)=> (
        <div
        key={ind}
          className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 
        hover:transition-all hover:scale-105 text-gray-200 hover:text-gray-900 cursor-pointer hover:duration-500"
        >
          <Image
            src="/assets/dentalicon.png"
            width={56}
            height={56}
            className="bg-blue-600 p-3 rounded-lg mb-4"
            alt="dicon"
          />
          <h1 className="text-2xl font-medium pb-3">Dental</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quam voluptas ipsa delectus nemo.
          </p>
        </div>
        ))}
      </div>
      {/* *************************************** */}
    </div>
  );
};

export default Services;

