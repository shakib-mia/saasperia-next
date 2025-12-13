"use client";

import React from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please enter your email!",
      });
      return;
    }
  };
  return (
    //    <!-- Subscribe to newsletter -->
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
      <aside>
        <h4>Subscribe to our newsletter to get latest news on your inbox.</h4>
      </aside>

      <form
        className="flex gap-2 items-center"
        id="newsletter-form"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          className="h-fit"
          id="email"
          placeholder="Enter Your Email Address"
          // data-animate="fade-in-right"
        />
        <button
          type="submit"
          className="h-fit"
          // data-animate="fade-in-right"
          // data-delay="500ms"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
