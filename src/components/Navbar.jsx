import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <NavLink to="/">
                Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'> <NavLink to="/about">
                About
                </NavLink></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'> <NavLink to="/product">
                Products
                </NavLink></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
              <NavLink to="/contact">
                Contact
                </NavLink></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <MDBBtn style={{width:'8vw', height:'6vh', marginTop:'1rem'}}>Shop</MDBBtn>
     <MDBNavbar expand='lg' light bgColor='light'>
     <MDBContainer fluid>
       <MDBNavbarNav>
         <MDBNavbarItem>
           <MDBNavbarLink href='#'>
             <MDBBadge pill color='danger'>!</MDBBadge>
             <span>
               <MDBIcon fas icon='shopping-cart'></MDBIcon>
             </span>
           </MDBNavbarLink>
         </MDBNavbarItem>
       </MDBNavbarNav>
     </MDBContainer>
   </MDBNavbar>
   </>
  );
}