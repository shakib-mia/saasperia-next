import React from "react";
import Services from "../components/Services/Services";
import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Services - SaaSPeria",
};

const page = () => {
  return (
    <>
      <PageHeader
        title={"Services"}
        description={
          "From strategy to execution, we provide tailored services that make your success achievable."
        }
      />
      <Services route={"/services"} />
    </>
  );
};

export default page;
