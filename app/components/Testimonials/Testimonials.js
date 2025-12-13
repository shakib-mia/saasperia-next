"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Anderson",
      role: "Product Manager",
      heading: "Boosted team workflow",
      details:
        "Our remote teams deliver faster now with clearer tasks and smoother daily collaboration across projects.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Jessica Miller",
      role: "Operations Lead",
      heading: "Perfect for remote teams",
      details:
        "Managing distributed teams feels effortless with real time updates, clear ownership, and simple planning tools.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      name: "Daniel Thompson",
      role: "Startup Founder",
      heading: "Improved project clarity",
      details:
        "Tasks are more organized now, deadlines are visible, and everyone stays aligned without constant meetings.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      name: "Emily Carter",
      role: "Remote Team Lead",
      heading: "Simplified daily execution",
      details:
        "Daily workflows became structured, progress is transparent, and team communication feels far more focused.",
    },
  ];

  return (
    // <!-- =====  Testimonial Section  ===== -->
    <section className="bg-[#F4F7FA]">
      <div className="container">
        {/* <div className="owl-carousel">
          <div className="text-center">
            <Image
              src="https://randomuser.me/api/portraits/men/58.jpg"
              alt="testimonialuser58"
              className="w-16! mx-auto aspect-square rounded-full"
            />
            <h5 className="mt-11">“You made it so simple”</h5>
            <p className="py-6">
              This platform made collaboration effortless. We’ve doubled our
              output in just 3 months!
            </p>
            <h6>Corey Valdez</h6>
            <p>Founder at Zenix</p>
          </div>

          <div className="text-center">
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="testimonialuser44"
              className="w-16! mx-auto aspect-square rounded-full"
            />
            <h5 className="mt-11">“Boosted our productivity”</h5>
            <p className="py-6">
              Within weeks, our team workflow became smoother. Deadlines no
              longer feel stressful.
            </p>
            <h6>Amanda Rivera</h6>
            <p>Project Manager at Collabify</p>
          </div>

          <div className="text-center">
            <Image
              src="https://randomuser.me/api/portraits/men/12.jpg"
              alt="testimonialuser12"
              className="w-16! mx-auto aspect-square rounded-full"
            />
            <h5 className="mt-11">“Exactly what we needed”</h5>
            <p className="py-6">
              From onboarding to daily use, everything feels intuitive. It’s a
              game-changer for us.
            </p>
            <h6>Michael Green</h6>
            <p>CTO at Nexora</p>
          </div>

          <div className="text-center">
            <Image
              src="https://randomuser.me/api/portraits/women/30.jpg"
              alt="testimonialuser30"
              className="w-16! mx-auto aspect-square rounded-full"
            />
            <h5 className="mt-11">“Collaboration at its best”</h5>
            <p className="py-6">
              Remote teamwork finally feels natural. We’re saving hours every
              week on communication.
            </p>
            <h6>Sophia Chen</h6>
            <p>CEO at BrightDesk</p>
          </div>
        </div> */}

        <Swiper slidesPerView={2} autoplay modules={[Autoplay]}>
          {testimonials.map(({ image, name, role, heading, details }, key) => (
            <SwiperSlide key={key}>
              <div className="text-center">
                <Image
                  width={64}
                  height={64}
                  src={image}
                  alt={name}
                  className="w-16! mx-auto aspect-square rounded-full"
                />
                <h5 className="mt-11">{`"${heading}"`}</h5>
                <p className="py-6">{details}</p>
                <h6>{name}</h6>
                <p>{role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
