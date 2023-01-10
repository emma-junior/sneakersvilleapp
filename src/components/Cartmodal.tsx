import React, {useEffect} from 'react'
import {FaTimes} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import {Product} from '../model'
import { useGlobalContext } from '../hooks/Context';
import "../Styles/Cardmodal/cartmodal.css"
import { Link } from 'react-router-dom'
import 'animate.css';
import StripeCheckoutBtn from './CheckoutBtns/StripeCheckoutBtn'
import PaystackCheckoutBtn from './CheckoutBtns/PaystackCheckoutBtn'



const Cartmodal = () => {
    const Cart:Product[] = useSelector((state:State) => state.cart);
    const {totalAmount, setTotalAmount, setCartModal} = useGlobalContext();
    
    useEffect(() => {
        let amount = 0;

        Cart.forEach((item) => {
            amount += item.quantity * item.price
        })

        setTotalAmount(amount)
    }, [Cart, totalAmount, setTotalAmount])

    if (totalAmount < 1) {
        return (
          <section className='cover'>
            <span className='times-icon' onClick={() => setCartModal(false)} ><FaTimes /></span>
              <h1 className='cart-empty'>No item in cart</h1>
          </section>
        );
    }

  return (
    <section className='cover animate__animated animate__slideInRight'>
        <span className='times-icon' onClick={() => setCartModal(false)} ><FaTimes /></span>
        <h2>Shopping Cart</h2>
        { Cart ? <div className='cartmap-container'>
            <div className='wrap'>
            {Cart.map((cart) => {
                return (
                    <div key={cart._id} className='cartmap-wrapper'>
                        <img src={cart.imageOne} alt="" />
                        <div className='cartmap-wrapper-content'>
                            <p className='cartmap-title'>{cart.title}</p>
                            <p className='cartmap-price'>{cart.quantity} <FaTimes /> ${cart.price}</p>
                        </div>
                        
                    </div>
                )
            })}
            </div>
            <div className='subtotal'>
                <h3>Subtotal:</h3>
                <p>${totalAmount}</p>
            </div>
            <Link to="/cart"><button className='viewcart-btn'>View Cart</button></Link>
            <StripeCheckoutBtn amount={totalAmount} />
            <PaystackCheckoutBtn />
        </div> : <h2>No Item in cart</h2>}
    </section>
  )
}

export default Cartmodal

