import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <div className="headcont">
        <NavLink to="/">
          <img src="./images/log1.webp" alt="notfound" />
        </NavLink>
        <Navbar />
      </div>
    </>
  );
};
export default Header;
