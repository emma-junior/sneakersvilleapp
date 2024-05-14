import React from "react";
import Select from "./Select";
import { useGlobalContext } from "../hooks/Context";
import "../Styles/Shipping/shipping.scss";
import StripeCheckoutBtn from "./CheckoutBtns/StripeCheckoutBtn";
import PaystackCheckoutBtn from "./CheckoutBtns/PaystackCheckoutBtn";

const Shipping = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <section className="shipping-wrapper">
      <div className="shipping">
        <h2>Estimate Shipping And Tax</h2>
        <p>Enter your destination to get a shipping estimate</p>
        <div>
          <label>* Country</label>
          <Select />
        </div>
        <div className="region">
          <label>* Region/State</label>
          <Select />
        </div>
        <div>
          <label>* Zip/Postal Code</label>
          <input className="input" />
        </div>
        <button className="shipping-btn">Get A Quote</button>
      </div>
      <div className="coupon">
        <h2>Use Coupon Code</h2>
        <p>Enter your coupon code if you have one</p>
        <input className="input" />
        <button className="shipping-btn">Apply Coupon</button>
      </div>
      <div className="card-total">
        <h2>Cart Total</h2>
        <div className="total-products">
          <h3>Total products</h3>
          <p>${totalAmount}</p>
        </div>
        <hr />
        <h3>Total shipping</h3>
        <div className="standard">
          <p>
            <input type="checkbox" /> Standard
          </p>
          <p>$20</p>
        </div>
        <div className="standard">
          <p>
            <input type="checkbox" /> Express
          </p>
          <p>$30</p>
        </div>
        <hr />
        <div className="grand-total">
          <h2>Grand Total</h2>
          <h2>${totalAmount}</h2>
        </div>
        <StripeCheckoutBtn amount={totalAmount} />
        <PaystackCheckoutBtn />
        {/* <button>Proceed To Checkout</button> */}
      </div>
    </section>
  );
};

export default Shipping;
