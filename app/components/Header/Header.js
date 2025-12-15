import Image from "next/image";
import React from "react";
import hero from "./../../assets/images/hero.jpg";
import Link from "next/link";

const Header = () => {
  return (
    // <!--  HEADER SECTION START  -->
    <header className="container pt-16 mt-20">
      <div className="md:w-7/12 mx-auto text-center space-y-4 lg:space-y-6">
        {/* <!-- Section Heading --> */}
        <h2 className="w-5/6 mx-auto" data-animate="fade-in-left">
          Get More Done with Your Remote Team
        </h2>

        {/* <!-- Intro Paragraph --> */}
        <p data-animate="fade-in-left" data-delay="100">
          Streamline project management, track progress in real-time, and
          deliver on time — all from one powerful platform.
        </p>

        {/* <!-- CTA Buttons --> */}
        <div className="flex gap-5 mt-2 px-4 lg:w-2/3 mx-auto">
          <Link
            data-animate="fade-in-left"
            data-delay="300"
            href="/signup"
            className="w-1/2 button"
          >
            Get Started
          </Link>
          <a
            data-animate="fade-in-left"
            data-delay="200"
            href="#"
            className="w-1/2 button-secondary"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* <!-- Hero Image --> */}
      <Image
        width={1920}
        height={1080}
        src={hero}
        alt="hero image"
        className="mt-10 lg:mt-28 w-full"
        data-animate="fade-in-up"
      />
    </header>
  );
  {
    /* <!--  HEADER SECTION END  --> */
  }
};

export default Header;
