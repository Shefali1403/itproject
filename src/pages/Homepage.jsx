import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
const Homepage = () => {
  const data = {
    name: "shefu store",
  };
  return (
    <>
      <Hero mydata={data} />
      <Services />
      <Trusted />
    </>
  );
};
export default Homepage;
