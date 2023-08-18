import React, { Component, useState } from "react";
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(true);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51MwtCaHoWPMOpNg23E34n3adYB0xIc9jgAAZjHT4cbGBZm0YieD1noccgvtnNAnbdaTQTqkRwYCqJZ1WmQIaFgfM00wGqUBHaL"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      {toggle && (
        <div className="cart">
          <div className="cartHeader">
            <h1>Products in your cart </h1>
            <button className="cartCloseBtn" onClick={() => setToggle(!toggle)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {products?.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />

              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 30)}</p>
                <div className="price">
                  {item.quantity} x ${item.price}
                </div>
              </div>
              <DeleteOutlinedIcon
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}

          <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
          </div>
          <button onClick={handlePayment} className="checkoutBtn">
            PROCEED TO CHECKOUT
          </button>
          <span className="reset" onClick={() => dispatch(resetCart())}>
            RESET CART
          </span>
        </div>
      )}
    </>
  );
};

export default Cart;
