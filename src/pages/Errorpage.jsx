import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Homepage from "./Homepage";
import { Route, Routes, NavLink } from "react-router-dom";
const Errorpage = () => {
  const switchi = (e) => {
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>;
  };
  return (
    <>
      <div className="error-cont">
        <h1>
          <b>404</b>
        </h1>
        <h4>UH OH! You're lost</h4>
        <p>
          The page you are looking does not exist.Click on the button below to
          go back to the homepage
        </p>
        <MDBBtn onClick={switchi}>
          <NavLink to="/" style={{ color: "white" }}>
            Back
          </NavLink>
        </MDBBtn>
      </div>
    </>
  );
};
export default Errorpage;
