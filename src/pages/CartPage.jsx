<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Product({ id, image, quantity, price, update_quantity }) {
  return (
    <div className="product">
      <img src={image} />
      <div className="info">
        <div className="quantity">
          <button onClick={() => update_quantity(id, "inc")}>+</button>
          <span>{quantity}</span>
          <button onClick={() => update_quantity(id, "dec")}>-</button>
        </div>
        <div class="price">
          <b>Price : {price * quantity}</b>
        </div>
      </div>
    </div>
  );
}

const CartPage = () => {
  const { cart, update_quantity } = useContext(DataContext);

  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.quantity * item.price;
    });
    setTotalPrice(sum);
  }, [cart]);

=======
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
>>>>>>> origin/master
  return (
    <>
      <h1>cartpage</h1>
      <div className="cart-cont">
<<<<<<< HEAD
        <div className="products-cont">
          {cart.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              update_quantity={update_quantity}
            />
          ))}
        </div>
        <div className="payment-cont border-left">
          <div className="pay-cont">
            <span>
              <b>Total Amount : {totalPrice}</b>
            </span>
            <button className="price">Pay</button>
          </div>
=======
        <div className="cart-box box1">
          {cart.map(item => <CardCart 
            image = {item.image}
          />)}
        </div>
        <div className="cart-box box2">
          world
>>>>>>> origin/master
        </div>
      </div>
    </>
  );
};
export default CartPage;
