import React from "react";

const PageHeader = ({ title, description }) => {
  return (
    <header className="mt-16 pt-12 container text-center">
      <>
        <h2 data-animate="fade-in-left">{title}</h2>
        <p
          className="lg:w-1/2 mx-auto"
          data-animate="fade-in-left"
          data-delay="100ms"
        >
          {description}
        </p>
      </>
    </header>
  );
};

export default PageHeader;
