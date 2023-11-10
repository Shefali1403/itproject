import React from "react";
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
const Hero = ({ mydata }) => {
  const { name } = mydata;
  return (
    <>
      <div className="hero-container">
        <div className="grid-two">
          <div className="grid-two-data">
            <p>Welcome to</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consequuntur illo, officiis eligendi voluptatum asperiores maxime
              praesentium molestiae ea cum!
            </p>
            <NavLink to="/product">
              <MDBBtn
                style={{ width: "8vw", height: "6vh", marginTop: "1rem" }}
              >
                Shop
              </MDBBtn>
            </NavLink>
          </div>
          <div className="grid-two-img">
            <figure>
              <img src="./images/heroimg.jpg" alt="notfound" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
