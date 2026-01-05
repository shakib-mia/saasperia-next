import { servicesCollection } from "@/app/lib/mongodb";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiGumroad } from "react-icons/si";

const Footer = async () => {
  const services = await servicesCollection
    .find({}, { projection: { title: 1, slug: 1 } })
    .limit(4)
    .toArray();

  return (
    <>
      <footer className="container grid gap-10 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-light">
        {/* <!-- Company section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Company</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/plans">Plans</Link>
            </li>
          </ul>
        </aside>

        {/* <!-- Services section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Services</h6>
          <ul className="mt-2 space-y-1">
            {services.map(({ _id, title, slug }) => (
              <li key={_id}>
                <Link href={`/services/${slug}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* <!-- Legal section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Legal</h6>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/terms-and-condition">Terms & Conditions</Link>
            </li>
          </ul>
        </aside>

        {/* <!-- Contact & Social Media section --> */}
        <aside>
          <h6 className="mb-2 lg:mb-5">Contact Us</h6>
          <ul className="mt-2 space-y-2">
            {/* <!-- Email link --> */}
            <li>
              <a href="mailto:templatehearth@gmail.com">
                templatehearth@gmail.com
              </a>
            </li>

            {/* <!-- Social media icons --> */}
            <li className="flex gap-2 items-center text-white">
              {/* <!-- Facebook --> */}
              <a
                href="https://www.facebook.com/templatehearth"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-14 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition"
              >
                <FaFacebookF />
              </a>

              {/* <!-- Facebook --> */}
              <a
                href="https://www.youtube.com/@templatehearth"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-14 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition"
              >
                <FaYoutube />
              </a>

              {/* <!-- Twitter / X --> */}
              <a
                href="https://x.com/TemplateHearth/"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-14 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition fill-white"
              >
                {/* <!-- X logo SVG --> */}
                <FaXTwitter />
              </a>

              {/* <!-- LinkedIn --> */}
              <a
                href="https://www.linkedin.com/in/templatehearth/"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-14 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition"
              >
                <FaLinkedinIn />
              </a>

              {/* <!-- Gumroad --> */}
              <a
                href="https://templatehearth.gumroad.com/"
                target="_blank"
                rel="no-referrer"
                className="inline-flex justify-center items-center w-14 aspect-square rounded-full bg-primary shadow-xl hover:shadow transition"
              >
                {/* <!-- Gumroad SVG Logo --> */}
                <SiGumroad />
              </a>
            </li>
          </ul>
        </aside>
      </footer>
      <div className="container text-center py-4">
        © <span id="year"></span> SaaSPeria, Designed by{" "}
        <a
          href="https://www.figma.com/@sejal_ui_ux"
          target="_blank"
          rel="no-referrer"
        >
          Seju_ui_ux
        </a>
        , Developed By{" "}
        <a
          href="https://templatehearth.vercel.app/"
          target="_blank"
          rel="no-referrer"
        >
          Template Hearth
        </a>
      </div>
    </>
  );
};

export default Footer;
