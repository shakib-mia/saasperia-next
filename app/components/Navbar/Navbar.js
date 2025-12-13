"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const navbarRef = useRef(null);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down
        navbarRef.current.style.top = "-10rem";
      } else {
        // scrolling up
        navbarRef.current.style.top = "0";
      }

      navbarRef.current.style.transition = "all 0.5s ease";
      navbarRef.current.style.position = "fixed";

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className="bg-white/70 backdrop-blur py-3 fixed top-0 left-0 w-full z-50 shadow"
      id="navbar"
      ref={navbarRef}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* <!-- Left: Logo --> */}
        <div className="shrink-0">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 font-rubik"
          >
            SaaSPeria
          </Link>
        </div>

        {/* <!-- Center: Nav Items --> */}
        <div className="hidden lg:flex space-x-8 font-gilroy-medium">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-indigo-600"
          >
            Services
          </Link>

          <Link href="/plans" className="text-gray-700 hover:text-indigo-600">
            Plans
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>

        {/* <!-- Right: Buttons --> */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/signup" className="button">
            Get Started Free
          </Link>
        </div>

        {/* <!-- Mobile Hamburger --> */}
        <div className="lg:hidden">
          <button
            id="mobile-menu-button"
            className="text-gray-700 focus:outline-none"
            onClick={() => setNavbarVisible((nav) => !nav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div
        id="mobile-menu"
        className="max-h-[297px] overflow-hidden transition-all duration-500 lg:hidden divide-y divide-primary"
        style={{ height: navbarVisible ? 1000 : 0 }}
      >
        <Link
          href="/"
          className="block text-gray-700 hover:bg-primary hover:text-white py-2 container transition"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block text-gray-700 hover:bg-primary hover:text-white py-2 container transition"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block text-gray-700 hover:bg-primary hover:text-white py-2 container transition"
        >
          Services
        </Link>

        <Link
          href="/plans"
          className="block text-gray-700 hover:bg-primary hover:text-white py-2 container transition"
        >
          Plans
        </Link>
        <Link
          href="/contact"
          className="block text-gray-700 hover:bg-primary hover:text-white py-2 container transition"
        >
          Contact
        </Link>

        <div className="container">
          <Link
            href="/signup"
            className="mt-2 w-full button inline-block text-center"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
