import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBadge,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const [showNav, setShowNav] = useState(false);
  const { cart } = useContext(DataContext);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  <NavLink to="/">Home</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  {" "}
                  <NavLink to="/about">About</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  {" "}
                  <NavLink to="/product">Products</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <NavLink to="/contact">Contact</NavLink>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  disabled
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <NavLink to="/product">
        <MDBBtn style={{ width: "8vw", height: "6vh", marginTop: "1rem" }}>
          Shop
        </MDBBtn>
      </NavLink>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  {cart.length !== 0 ? (
                    <MDBBadge pill color="danger">
                      {cart.length}
                    </MDBBadge>
                  ) : (
                    <></>
                  )}
                  <span>
                    <NavLink to="/cart">
                      <MDBIcon fas icon="shopping-cart"></MDBIcon>
                    </NavLink>
                  </span>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
