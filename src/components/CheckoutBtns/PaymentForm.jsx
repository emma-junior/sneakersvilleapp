import React, { useState, useEffect } from "react";
import "../../Styles/PaymentForm/paymentform.css";
import PaystackPop from "@paystack/inline-js";
import { useGlobalContext } from "../../hooks/Context";
import { userRequest } from "../../api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  const { totalAmount } = useGlobalContext();
  const Cart = useSelector((state) => state.cart);
  const [data, setData] = useState({
    name: "",
    // email: "",
    phone: "",
    address: {
      city: "",
      state: "",
      // country: ""
    },
  });

  const formFilled = Object.values(data && data.address).every(
    (value) => value
  );
  const [paystackToken, setPaystackToken] = useState(null);
  console.log(paystackToken, "ref Id");
  const navigate = useNavigate();
  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      // other params
      key: "pk_test_20f26c6ed5e3229ba35cc32201058a2229371c65",
      email: "emma@email.com",
      amount: totalAmount * 100 * 1000,

      onSuccess: (transaction) => {
        // Payment complete! Reference: transaction.reference
        // alert(`Payment complete! Reference: ${transaction.reference}`)
        setPaystackToken(transaction.reference);
      },
      onCancel: () => {
        // user closed popup
      },
    });
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/payment/paystack");
        navigate("/success", { state: { stripeData: data, products: Cart } });
        console.log(res.data, "paystack post data");
      } catch (error) {
        console.log(error);
      }
    };
    paystackToken && makeRequest();
  }, [paystackToken]);
  return (
    <section className="payment-form">
      <div className="form-wrapper">
        <p className="topic">Enter Details</p>
        <div className="single-form">
          <label>Name:</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        {/* <div className='single-form'>
                <label>Email:</label>
                <input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            </div> */}
        <div className="single-form">
          <label>Phone:</label>
          <input
            type="text"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <p className="address">Address</p>
        <div>
          <div className="address-input">
            <input
              placeholder="city"
              type="text"
              value={data.address.city}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, city: e.target.value },
                })
              }
            />
            <input
              placeholder="state"
              type="text"
              value={data.address.state}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, state: e.target.value },
                })
              }
            />
          </div>
        </div>
        <div className="btn">
          {formFilled ? (
            <button className="submit-btn" onClick={payWithPaystack}>
              Submit
            </button>
          ) : (
            <button className="inactive-btn">Submit</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
