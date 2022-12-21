import React, {useEffect} from 'react'
import { Product } from '../model'
import { useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import {BsCart} from "react-icons/bs"
import { useGlobalContext } from '../hooks/Context';
import "../Styles/CartIcon/carticon.css"


const CartIcon = () => {
    const Cart:Product[] = useSelector((state:State) => state.cart);
    const {cartCount, setCartCount} = useGlobalContext();

    useEffect(() => {
        let count = 0;
        Cart?.forEach((cart:Product) => {
          count += cart.quantity;
        });
        setCartCount(count);
    }, [Cart, cartCount]);

  return (
    <div className='navbar-cart-icon'>
        <p className='cart-icon' ><BsCart /></p>
        {cartCount > 0 && (
            <div className='cart-num-bg'>
                <span className='cart-num'><>{cartCount}</></span>
            </div>
        )}
    </div>
  )
}

export default CartIcon

