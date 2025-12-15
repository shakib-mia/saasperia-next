"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Input from "../Input/Input";

// export const generateMetadata = () => {
//   return {
//     title: "Login - SaaSPeria",
//   };
// };

const ResetPassword = () => {
  // const [navbarHeight, setNavbarHeight] = useState(0);

  // const options = [{ label: "Remember Me", value: "rememberme" }];

  // useEffect(() => {
  //   const navbar = document.getElementById("navbar");
  //   if (navbar) {
  //     setNavbarHeight(navbar.clientHeight);
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.email.value, e.target.password.value);
  };

  return (
    <>
      <>
        <header className="container pt-24">
          <h1 className="text-center">Reset Password</h1>
          <p className="text-center mt-2">
            Enter your email to get reset link{" "}
          </p>
        </header>
        <div className="container">
          <div className="lg:w-1/3 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="mt-4 md:mt-8 lg:mt-10 bg-white p-6 shadow-lg rounded-lg space-y-6"
            >
              <Input
                label="Email"
                name="email"
                placeholder="Enter Your Email Address Here"
              />

              <button type="submit" className="w-full py-3 tracking-wider">
                Send Reset Link
              </button>
            </form>
          </div>

          <p className="mt-10 text-center text-xl">
            Remember the Password?{" "}
            <Link
              className="text-primary underline hover:no-underline underline-offset-3"
              href={"/login"}
            >
              Sign in now
            </Link>
          </p>
        </div>
      </>
    </>
  );
};

export default ResetPassword;
