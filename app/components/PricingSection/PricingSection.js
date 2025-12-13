import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Pricing from "../Pricing/Pricing";

const PricingSection = () => {
  const faqs = [
    {
      question: "Can I use this template for client projects?",
      answer:
        "Yes, you can use this template for unlimited client projects. A single purchase grants you a commercial license, allowing full customization and deployment without extra fees.",
      //   animation: "fade-in-left",
    },
    {
      question: "Does it work with WordPress?",
      answer:
        "This template is not a native WordPress theme, but it can be integrated by converting it into a custom theme or using it with a headless WordPress setup.",
      //   animation: "fade-in-right",
    },
    {
      question: "Do I get free updates after purchase?",
      answer:
        "Yes, all future updates and improvements are included for free. You will receive new features, enhancements, and bug fixes at no additional cost.",
      //   animation: "fade-in-left",
    },
    {
      question: "Will you provide customer support?",
      answer:
        "Yes, we provide dedicated support for setup, customization, and common issues. You can reach out through our support channel and expect a timely response.",
      //   animation: "fade-in-right",
    },
  ];

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

      <div className="grid grid-cols-1 lg:grid-cols-2 container mt-20 gap-12">
        {faqs.map(({ question, answer }, key) => (
          <div
            className="flex gap-5 group"
            data-animate={(key + 1) % 2 ? "fade-in-left" : "fade-in-right"}
            key={key}
          >
            <aside className="w-7! aspect-square h-7 bg-success rounded-full flex justify-center items-center">
              ?
            </aside>

            <aside className="overflow-x-hidden">
              <h6>{question}</h6>
              <p className="my-5">{answer}</p>

              <a
                className="inline-flex font-bold items-center gap-2 text-success -translate-x-48 group-hover:translate-x-0 transition-transform"
                href="#"
              >
                Click to learn more
                <FaArrowRight />
              </a>
            </aside>
          </div>
        ))}
      </div>

      <p className="text-center container mt-14">
        Haven’t got your answer?{" "}
        <Link
          className="text-success underline underline-offset-4 hover:no-underline"
          href="/contact"
        >
          Contact our support now
        </Link>
      </p>
    </section>
  );
};

export default PricingSection;
