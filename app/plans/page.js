import React from "react";
import Pricing from "../components/Pricing/Pricing";
import PageHeader from "../components/PageHeader/PageHeader";

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
    </>
  );
};

export default page;
