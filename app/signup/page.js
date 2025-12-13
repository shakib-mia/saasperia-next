import React from "react";
import Signup from "../components/Signup/Signup";

export const generateMetadata = () => {
  return {
    title: "Signup - SaaSPeria",
  };
};

const page = () => {
  return (
    <>
      <Signup />
    </>
  );
};

export default page;
