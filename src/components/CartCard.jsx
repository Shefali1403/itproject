import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function CardCart(prop) {
  const { addtocart } = useContext(DataContext);
  return (
    <>
      <div className="card-cont">
        <div className="img-cont">
          <img src={prop.image} alt="..."></img>
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
