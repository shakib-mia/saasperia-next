import React from "react";
import ResetPassword from "../components/ResetPassword/ResetPassword";

export const generateMetadata = () => {
  return {
    title: "Reset Password - SaaSPeria",
  };
};

const page = () => {
  return (
    <>
      <ResetPassword />
    </>
  );
};

export default page;
