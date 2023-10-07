import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import CardCart from "../components/CartCard";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
const CartPage = () => {
  const {cart} = useContext(DataContext);
  console.log(cart)
  return (
    <>
      <h1>cartpage</h1>
      <div className="cart-cont">
        <div className="cart-box box1">
          {cart.map(item => <CardCart 
            image = {item.image}
          />)}
        </div>
        <div className="cart-box box2">
          world
        </div>
      </div>
    </>
  );
};
export default CartPage;
