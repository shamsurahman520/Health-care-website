import React from "react";
import Header from "../app/_components/Header"
import Hero from "../app/_components/Hero"
import SolutionStep from "../app/_components/SolutionStep"
import ConsultSolution from "../app/_components/ConsultSolution"
import AboutUs from "../app/_components/AboutUs"
import Services from "../app/_components/Services"
import DrTeam from "../app/_components/DrTeam"
import Testimonial from "../app/_components/Tetimonial"
import FAQ from "../app/_components/FAQ"
import Footer from "../app/_components/Footer"

export default function Home() {
  return (
   <>
   <Header />
   <div className="container mx-auto">
   <Hero />
   <SolutionStep />
   <ConsultSolution />
   <AboutUs />
   <Services />
   <DrTeam />
   <Testimonial />
   <FAQ />
   <Footer />
   </div>
   </>
  );
}
