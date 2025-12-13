import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ slug, image, title, shortDescription }) => {
  return (
    <Link
      href={"/services/" + slug}
      className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-md transition"
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
