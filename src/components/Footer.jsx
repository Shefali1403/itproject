import { MDBBtn } from "mdb-react-ui-kit";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
const Footer = () => {
  return (
    <>
      <div className="footer-cont">
        <div className="footer-part1">
          <div className="content">
            <h4>Shefu technical</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              dicta?
            </p>
          </div>
          <div className="content">
            <p>
              Subscribe to get important
              <br />
              updates
            </p>
            <input type="text" />
            <MDBBtn style={{ width: "9vw", marginTop: "2rem" }}>
              Subscribe
            </MDBBtn>
          </div>
          <div className="content">
            <p>Follow Us</p>
            <div className="footer-icon">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
          <div className="content">
            <h4>Call Us</h4>
            <p>98772932829</p>
          </div>
        </div>
        <div className="footer-part2">
          <div className="part2-content">
            <p>&copy;2023 All Rights are reserved to Shef Tech Association</p>
          </div>
          <div className="part2-content">
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
