import { servicesCollection } from "@/app/lib/mongodb";
import React from "react";
import Service from "../Service/Service";
import Link from "next/link";

const Services = async ({ route }) => {
  const services = await servicesCollection
    .find(
      {},
      { projection: { title: 1, slug: 1, image: 1, shortDescription: 1 } }
    )
    .limit(route ? 0 : 3)
    .toArray();

  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ _id, ...service }, key) => (
          <Service key={_id} id={key} {...service} />
        ))}
      </div>
      {route ? (
        <></>
      ) : (
        <div className="flex mt-12 justify-center" data-animate="fade-in-left">
          <Link href={"/services"} className="button">
            Explore More
          </Link>
        </div>
      )}
    </section>
  );
};

export default Services;
