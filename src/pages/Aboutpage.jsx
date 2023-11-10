import React from "react";
import Hero from "../components/Hero";
const Aboutpage = () => {
  const data = {
    name: "shefu mart",
  };
  return (
    <>
      <Hero mydata={data} />
      <div className="about-cont">
        <div className="about-head">
          <h1>From store to you within hours</h1>
        </div>
        <div className="about-images">
          <div className="about-box b1">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/19/77/collection-of-fashion-accessories-women-things-vector-13321977.jpg"
              alt="notfound"
            />
          </div>
          <div className="about-box b2">
            <img
              src="https://media.istockphoto.com/id/626085868/photo/mens-accessories.webp?b=1&s=170667a&w=0&k=20&c=EHt5OBGhlIr7X1Yo24B9GQHI-BSg2Y_xtzB_rz4ZIGo="
              alt="notfound"
            />
          </div>
          <div className="about-box b3">
            <img
              src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
              alt="notfound"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutpage;
