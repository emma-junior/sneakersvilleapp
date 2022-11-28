import React, {useEffect} from 'react'
import {FaTimes} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { dispatchStore } from '../redux/store'
import { getCart } from '../redux/actions'
import {Product} from '../model'
import { useGlobalContext } from '../hooks/Context';
import "../Styles/Cardmodal/cartmodal.css"
import { Link } from 'react-router-dom'
import 'animate.css';


//USED STORE.DISPATCH IN PLACE OF USEDISPATCH

const Cartmodal = () => {
    const getItems:Product[] = useSelector((state: State) => state.products['cart'])
    const {totalAmount, setTotalAmount, setCardModal} = useGlobalContext();

    useEffect(() => {
        dispatchStore(getCart() as any)
    },[])

    useEffect(() => {
        let amount = 0;

        getItems.forEach((item) => {
            amount += item.quantity * item.price
        })

        setTotalAmount(amount)
    }, [getItems, totalAmount, setTotalAmount])

    if (totalAmount < 1) {
        return (
          <section className='cover'>
            <span className='times-icon' onClick={() => setCardModal(false)} ><FaTimes /></span>
              <h1 className='cart-empty'>No item in cart</h1>
          </section>
        );
    }

  return (
    <section className='cover animate__animated animate__slideInRight'>
        <span className='times-icon' onClick={() => setCardModal(false)} ><FaTimes /></span>
        <h2>Shopping Cart</h2>
        { getItems ? <div className='cartmap-container'>
            <div className='wrap'>
            {getItems.map((cart) => {
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
            <button className='viewcart-btn'>Checkout</button>
        </div> : <h2>No Item in cart</h2>}
    </section>
  )
}

export default Cartmodal