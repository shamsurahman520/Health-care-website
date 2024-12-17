import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const FAQ = () => {
    return (
      <div className="mx-12 sm:mx-8 py-20 sm:py-36">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-medium pb-2 sm:pb-3">- FAQ</h2>
          <h1 className="text-3xl lg:text-5xl font-semibold leading-tight px-4 sm:px-8 md:px-16">
            <span className="text-blue-600">Questions?</span> Look here.
          </h1>
        </div>
        {/* *************************************** */}
        <div className="pt-12 sm:pt-20">
          <Accordion type="single" collapsible>
            {Array.from({ length: 5 }).map((_, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="py-2 sm:py-3">
                <AccordionTrigger className="text-base sm:text-xl">
                  How Do I Book an Appointment Using the App?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestiae incidunt saepe beatae et libero numquam laudantium
                  tenetur? Reiciendis, repellendus odio?
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* *************************************** */}
      </div>
    );
  };
  
  export default FAQ;
  