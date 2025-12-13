import React from "react";
import ResetPassword from "../components/ResetPassword/ResetPassword";

export const generateMetadata = () => {
  return {
    title: "Reset Password - SaaSPeria",
  };
};

const page = () => {
  return (
    <div>
      <ResetPassword />
    </div>
  );
};

export default page;
