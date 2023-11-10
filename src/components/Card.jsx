import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Card(prop) {
  const { addtocart } = useContext(DataContext);
  return (
    <>
      <div className="card-cont">
        <div className="img-cont">
          <img src={prop.image} alt="..."></img>
        </div>
        <div className="card-body">
          <div className="card-cont-body-title">{prop.title}</div>
          <div className="card-cont-body-desc">{prop.description}</div>
        </div>
        <MDBBtn
          className="card-cont-btn"
          onClick={() => {
            addtocart(prop.image, prop.price, 1, prop.title);
          }}
        >
          Shop
        </MDBBtn>
      </div>
    </>
  );
}
