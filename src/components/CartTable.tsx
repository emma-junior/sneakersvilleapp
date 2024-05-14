import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { useAppDispatch } from "../helper/appDispatch";
import { FaTimes } from "react-icons/fa";
import { Product } from "../model";
import "../Styles/CartTable/carttable.scss";
import { Link } from "react-router-dom";
// import { LineWave } from 'react-loader-spinner'
import {
  decreaseQty,
  increaseQty,
  removeAllItem,
  removeFromCart,
} from "../redux/actions/cart";
import Loading from "./Loading";

const CartTable = () => {
  const Cart: Product[] = useSelector((state: State) => state.cart);

  const dispatch = useAppDispatch();

  if (Cart.length < 1) {
    return (
      <section className="carttable">
        <table>
          <h1 className="cart-empty">No item in cart</h1>
        </table>
      </section>
    );
  }

  return (
    <div className="carttable">
      <h2>Your cart items</h2>
      {Cart ? (
        <>
          <table>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
            {Cart?.map((cart) => {
              return (
                <tr>
                  <td>
                    <img src={cart.imageOne} alt="" />
                  </td>
                  <td>{cart.title}</td>
                  <td>${cart.price}</td>
                  <td>
                    <span
                      className="qty-change"
                      onClick={() => dispatch(decreaseQty(cart._id))}
                    >
                      -
                    </span>
                    <span>{cart.quantity}</span>
                    <span
                      className="qty-change"
                      onClick={() => dispatch(increaseQty(cart._id))}
                    >
                      +
                    </span>
                  </td>
                  <td>
                    <p
                      className="delete"
                      onClick={() => dispatch(removeFromCart(cart._id))}
                    >
                      <FaTimes />
                    </p>
                  </td>
                </tr>
              );
            })}
          </table>
        </>
      ) : (
        <span className="loader-spinner">
          <Loading />
        </span>
      )}
      <div className="shopping-clear">
        <Link to="/products">
          <button>Continue Shopping</button>
        </Link>
        <button onClick={() => dispatch(removeAllItem())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartTable;
