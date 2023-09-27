import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App(prop) {
  return (
    <>
      <MDBCard class="card-cont">
        <div className="img-cont">
        <MDBCardImage src={prop.image} alt="..."></MDBCardImage>
        </div>
        <MDBCardBody>
          <MDBCardTitle className = 'card-cont-body-title'>{prop.title}</MDBCardTitle>
          <MDBCardText className="card-cont-body-desc">{prop.description}</MDBCardText>
        </MDBCardBody>
        <MDBBtn href="#"  className="card-cont-btn">Shop</MDBBtn>
      </MDBCard>
    </>
  );
}
