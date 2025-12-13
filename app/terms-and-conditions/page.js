import React from "react";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";

export const generateMetadata = () => {
  return {
    title: "Terms and Conditions - SaaSPeria",
  };
};

const page = () => {
  return (
    <>
      <TermsAndConditions />
    </>
  );
};

export default page;
