"use client";

import useColumns from "@/app/hooks/useColumns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ slug, image, title, shortDescription, id }) => {
  const columns = useColumns();

  // console.log();
  return (
    <Link
      href={"/services/" + slug}
      className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-md transition"
      data-animate="fade-in-up"
      data-delay={`${(id % columns) * 100}ms`}
    >
      <Image
        src={image}
        width={600}
        height={600}
        className="w-full aspect-video object-cover"
        alt={slug}
      />
      <div className="p-6">
        <h5 className="font-medium mb-2">{title}</h5>
        <p>{shortDescription}</p>
      </div>
    </Link>
  );
};

export default Service;
