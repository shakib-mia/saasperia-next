import Image from "next/image";
import React from "react";
import gettingStarted from "@/app/assets/images/getting-started-right.png";
import gettingStartedBG from "@/app/assets/images/getting-started-right-bg.png";
import Link from "next/link";

const GettingStarted = () => {
  return (
    //  <!--  Getting Started Section Start ====  -->
    <section className="bg-[#F4F7FA]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-56 items-center">
        {/* <!-- Left Side: Text Content --> */}
        <aside>
          {/* <!-- Section Heading --> */}
          <h3 data-animate="fade-in-left">
            Getting started with Albino is easier than ever
          </h3>

          {/* <!-- Section Description --> */}
          <p className="py-3 lg:pt-7 lg:pb-10" data-animate="fade-in-left">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page so quickly with Albino.
          </p>

          {/* <!-- Call to Action Button --> */}
          <Link
            href="/signup"
            className="button inline-flex items-center gap-2 group"
            data-animate="fade-in-left"
          >
            Getting Started Free
            {/* <!-- Arrow Icon Inside Button --> */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.93359 1.5L14.0003 7.13333L7.93359 12.7667"
                className="stroke-white group-hover:stroke-primary"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="bevel"
              />
              <path
                d="M1 6.90123H13.1333"
                className="stroke-white group-hover:stroke-primary"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="bevel"
              />
            </svg>
          </Link>
        </aside>

        {/* <!-- Right Side: Background + Image --> */}
        <aside
          className="bg-size-[100%] bg-no-repeat bg-center flex justify-center items-center"
          //   style="
          //     background-image: url(./src/images/getting-started-right-bg.png);
          //   "
          style={{ backgroundImage: `url(${gettingStartedBG.src})` }}
          data-animate="fade-in-right"
        >
          {/* <!-- Foreground Image --> */}
          <Image
            src={gettingStarted}
            alt="getting-started-right-bg"
            className="mt-10"
            data-animate="fade-in-right"
            data-delay="100"
          />
        </aside>
      </div>
    </section>
    // <!--  Getting Started Section End  ==== -->
  );
};

export default GettingStarted;
