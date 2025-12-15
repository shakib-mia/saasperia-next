import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Pricing from "../Pricing/Pricing";

const PricingSection = () => {
  return (
    <section className="bg-dark text-white" id="plans">
      <div className="container">
        <h3
          className="lg:mb-4 text-center font-bold"
          data-animate="fade-in-left"
        >
          Pricing & Plans
        </h3>
        <p className="lg:w-1/2 text-center mx-auto" data-animate="fade-in-left">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <Pricing />
    </section>
  );
};

export default PricingSection;
