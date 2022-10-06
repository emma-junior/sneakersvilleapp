import React, {useEffect} from 'react'
import { Product } from '../model'
import { useSelector, useDispatch } from 'react-redux'
import { getCart } from '../redux/actions'
import { State } from '../redux/reducers'
import { dispatchStore } from '../redux/store'
import {BsCart} from "react-icons/bs"
import { useGlobalContext } from '../hooks/Context';
import "../Styles/CartIcon/carticon.css"


const CartIcon = () => {
    const getItems:Product[] = useSelector((state: State) => state.products['cart'])
    const {renderFix} = useGlobalContext();
    const {cartCount, setCartCount} = useGlobalContext();

    useEffect(() => {
        let count = 0;
        getItems?.forEach((cart:Product) => {
          count += cart.quantity;
        });
        setCartCount(count);
      }, [getItems, cartCount, renderFix]);
      
      useEffect(() => {
        dispatchStore(getCart() as any)
    },[renderFix])

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