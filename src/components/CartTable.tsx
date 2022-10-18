import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getCart } from '../redux/actions'
import { State } from '../redux/reducers'
import { dispatchStore } from '../redux/store'
import { increaseQty, decreaseQty, deleteCart } from '../redux/actions'
import {FaTimes} from 'react-icons/fa'
import {Product} from '../model'
import "../Styles/CartTable/carttable.css"
import { Link } from 'react-router-dom'
// import { LineWave } from 'react-loader-spinner'
import Loading from './Loading'


//USED STORE.DISPATCH IN PLACE OF USEDISPATCH

const CartTable = () => {
    const getItems:Product[] = useSelector((state: State) => state.products['cart'])

    useEffect(() => {
        dispatchStore(getCart() as any)
    },[])
    
    const incQuantity = (_id: string) => {
        dispatchStore((increaseQty(_id)) as any)
    }
    const decQuantity = (_id: string) => {
        dispatchStore((decreaseQty(_id)) as any)
    }
    const delCartItem = (_id: string) => {
        dispatchStore((deleteCart(_id)) as any)
    }

    if (getItems.length < 1) {
        return (
          <section className='carttable'>
                <table>
                    <h1 className='cart-empty'>No item in cart</h1>
                </table>
          </section>
        );
    }

  return (
    <div className='carttable'>     
        <h2>Your cart items</h2>
        {getItems ?
        <>
        <table>
            <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
            </tr>
                {getItems?.map((cart) => {
                    return (
                        <tr key={cart._id}>
                            <td><img src={cart.imageOne} alt='' /></td>
                            <td>{cart.title}</td>
                            <td>${cart.price}</td>
                            <td>
                                <span onClick={() => decQuantity(cart._id)} className='qty-change'>-</span>                                
                                <span>{cart?.quantity}</span>
                                <span onClick={() => incQuantity(cart._id)} className='qty-change'>+</span>
                            </td>
                            <td><p className='delete' onClick={() => delCartItem(cart._id)}><FaTimes /></p></td>
                        </tr>
                    )
                })}       
        </table>
        </>:<span className='loader-spinner'><Loading /></span>} 
        <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  )
}

export default CartTable