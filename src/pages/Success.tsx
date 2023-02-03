import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../redux/reducers";
import { CurrentUser } from "../model";
import { userRequest } from "../api";
import { Product } from "../model";
import { useGlobalContext } from '../hooks/Context';
import "../Styles/Success/success.css"
import {BsFillCheckCircleFill} from "react-icons/bs"

const Success = () => {
    const {totalAmount} = useGlobalContext();
    const location:any = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.products;
    const User:CurrentUser | null = useSelector((state:State) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);
    useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: User?._id,
          products: cart.map((item:Product) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: totalAmount,
          address: data?.address || data?.billing_details.address
        });
        setOrderId(res.data._id);
      } catch(err) {
        console.log(err)
      }
    };
    data && createOrder();
  }, [cart, data, User, totalAmount]);
    
  return (
    <section className="success">
      <div className="success_wrapper">
        <h2 className="check-icon"><BsFillCheckCircleFill /></h2>
        <h2 className="successfull">Payment Successfull!</h2>
        <p className="order-id">{`Transaction Number: ${orderId}`}</p>
        <hr />
        <div className="paid">
          <p>Amount Paid:</p>
          <p>{`$${totalAmount}`}</p>
        </div>
        <div className="paid">
          <p>Bank:</p>
          <p>Emmanuels Bank</p>
        </div>
        <p className="home"><Link to="/">HOME</Link></p>
      </div>
    </section>
  );
};

export default Success;
