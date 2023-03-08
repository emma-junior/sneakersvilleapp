import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/CheckoutBtns/checkoutbtns.css"

const KEY = process.env.REACT_APP_STRIPE;


const StripeCheckoutBtn = ({ amount}) => {
    const [stripeToken, setStripeToken] = useState(null);
    const Cart = useSelector((state) => state.cart);
    const User = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate()
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post(
          "/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 500,
          }
        );
          navigate("/success", { state: { stripeData: res.data,
          products: Cart, } })
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, Cart, navigate]);
  console.log(stripeToken);
  return (
    <>
      {User ?
        <StripeCheckout
            name="Sneakers Ville"
            billingAddress
            shippingAddress
            description={`Your total is $${amount}`}
            amount={amount * 100}
            token={onToken}
            stripeKey={KEY}
      >
        <button className="stripe-btn">Checkout With Stripe</button>
      </StripeCheckout> :
        <Link to="/login"><button className="stripe-btn">Checkout With Stripe</button></Link>
      }       
    </>
  )
}

export default StripeCheckoutBtn
