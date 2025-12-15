import React from "react";
import Pricing from "../components/Pricing/Pricing";
import PageHeader from "../components/PageHeader/PageHeader";
import Faq from "../components/Faq/Faq";

export const generateMetadata = () => {
  return {
    title: "Plans - SaaSPeria",
  };
};

const page = () => {
  return (
    <>
      <PageHeader
        title={"Pricing & Plans"}
        description={`With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.`}
      />
      <Pricing />
      <section className="container">
        <Faq />
      </section>
    </>
  );
};

export default page;
