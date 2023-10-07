import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App(prop) {
  const { addtocart } = useContext(DataContext);
  return (
    <>
      <MDBCard className="card-cont">
        <div className="img-cont">
          <MDBCardImage src={prop.image} alt="..."></MDBCardImage>
        </div>
        <MDBCardBody>
          <MDBCardTitle className="card-cont-body-title">
            {prop.title}
          </MDBCardTitle>
          <MDBCardText className="card-cont-body-desc">
            {prop.description}
          </MDBCardText>
        </MDBCardBody>
        <MDBBtn
          className="card-cont-btn"
          onClick={() => {
            addtocart(prop.image, prop.price, 1, prop.title);
          }}
        >
          Shop
        </MDBBtn>
      </MDBCard>
    </>
  );
}
