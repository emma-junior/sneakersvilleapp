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
  }, [cart, data, User]);
    
  return (
    <div className="success">
      <h2>Successfull.</h2>
      <p>{`Your order number is ${orderId}`} <Link to="/">Home</Link></p>
    </div>
  );
};

export default Success;
