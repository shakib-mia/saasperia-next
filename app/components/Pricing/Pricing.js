import React from "react";

const Pricing = () => {
  const pricing = [
    {
      name: "Basic",
      price: "$29",
      billing: "One-time purchase",
      description:
        "Build your next landing page effortlessly with a variety of pre-designed blocks. No coding required.",
      ctaText: "Get Started Now",
      ctaLink: "https://templatehearth.vercel.app/",
    },
    {
      name: "Standard",
      price: "$99",
      billing: "One-time purchase",
      description:
        "Access more advanced blocks and layouts to create professional pages. Perfect for growing businesses.",
      ctaText: "Get Started Now",
      ctaLink: "https://templatehearth.vercel.app/",
    },
    {
      name: "Premium",
      price: "$149",
      billing: "One-time purchase",
      description:
        "Unlock all premium blocks, components, and layouts. Ideal for agencies or advanced projects.",
      ctaText: "Get Started Now",
      ctaLink: "https://templatehearth.vercel.app/",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6 text-black mt-10 lg:mt-16">
        {pricing.map(
          ({ name, price, billing, description, ctaText, ctaLink }, key) => (
            <div
              className="bg-white rounded-lg p-4 text-center shadow-lg hover:shadow transition"
              data-animate="fade-in-up"
              key={key}
              data-delay={key * 100}
            >
              <div className="w-24 mx-auto py-1 bg-primary/10 text-primary text-button font-bold text-center rounded-full">
                {name}
              </div>

              <h2 className="mt-7 mb-2">{price}</h2>
              <p>{billing}</p>

              <p className="py-10">{description}</p>

              <a href={ctaLink} className="w-full button inline-block">
                {ctaText}
              </a>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Pricing;
