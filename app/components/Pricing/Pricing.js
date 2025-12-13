import React from "react";

const Pricing = () => {
  const pricing = [
    {
      plan: "Basic",
      price: "$29",
      billing: "One time purchase",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      ctaText: "Get Started Free",
      ctaLink: "https://templatehearth.vercel.app/",
    },
    {
      plan: "Standard",
      price: "$99",
      billing: "One time purchase",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      ctaText: "Get Started Free",
      ctaLink: "https://templatehearth.vercel.app/",
    },
    {
      plan: "Premium",
      price: "$49",
      billing: "One time purchase",
      description:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
      ctaText: "Get Started Free",
      ctaLink: "https://templatehearth.vercel.app/",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-6 text-black">
        {pricing.map(
          ({ plan, price, billing, description, ctaText, ctaLink }, key) => (
            <div
              className="bg-white rounded-lg p-4 text-center shadow-lg hover:shadow transition"
              data-animate="fade-in-up"
              key={key}
              data-delay={key * 100}
            >
              <div className="w-24 mx-auto py-1 bg-primary/10 text-primary text-button font-bold text-center rounded-full">
                {plan}
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
      </section>
    </>
  );
};

export default Pricing;
