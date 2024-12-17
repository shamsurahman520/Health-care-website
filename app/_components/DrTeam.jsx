import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';

const DrTeam = () => {
  return (
    <div className="mx-8 py-10">
      {/* **************************************** */}
      <div className="py-10 text-center">
        <div>
          <h2 className="text-lg md:text-xl font-medium pb-3">- Doctor Team</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Our <span className="text-blue-600">Specialist</span> Doctor Team
          </h1>
        </div>
      </div>
      {/* **************************************** */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {/* Doctor Card */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="p-5 border-2 border-gray-400 rounded-2xl hover:shadow-xl hover:shadow-gray-200 flex flex-col items-center">
            <Image
              src="/assets/mainmaledr4.jpg"
              width={400}
              height={400}
              className="shadow rounded-lg overflow-hidden border"
              alt="Dr Pic"
            />
            <div className="mt-8 w-full">
              <div className="flex justify-between items-center gap-3 w-full">
                <h4 className="font-medium text-2xl truncate">Dr. Ali Ahmed</h4>
                <p className="flex gap-2 items-center text-xl font-semibold">
                  <Star size={24} className="text-yellow-500" /> 4.8
                </p>
              </div>
              <p className="mt-2 text-gray-600 text-lg">Heart Specialist</p>
            </div>
          </div>
        ))}
      </div>
      {/* **************************************** */}
      <div className="text-center pt-10">
        <Button size="lg" className="">
          View All Doctors <ArrowRight size={24} />
        </Button>
      </div>
      {/* **************************************** */}
    </div>
  );
};

export default DrTeam;
