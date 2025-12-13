import React from "react";

const PageHeader = ({ title, description }) => {
  return (
    <header className="mt-16 pt-12 container text-center">
      <div className="lg:w-1/2 mx-auto">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default PageHeader;
