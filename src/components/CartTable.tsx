import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getCart } from '../redux/actions'
import { State } from '../redux/reducers'
import { dispatchStore } from '../redux/store'
import { useGlobalContext } from '../hooks/Context';
import { increaseQty, decreaseQty, deleteCart } from '../redux/actions'
import {FaTimes} from 'react-icons/fa'
import {Product} from '../model'
import "../Styles/CartTable/carttable.css"
import Loading from './Loading'

const CartTable = () => {
    const getItems:Product[] = useSelector((state: State) => state.products['cart'])
    const {renderFix, setRenderFix} = useGlobalContext();

    useEffect(() => {
        dispatchStore(getCart() as any)
    },[renderFix])
    
    const incQuantity = (_id: string) => {
        dispatchStore((increaseQty(_id)) as any)
        setRenderFix(!renderFix)
    }
    const decQuantity = (_id: string) => {
        dispatchStore((decreaseQty(_id)) as any)
        setRenderFix(!renderFix)
    }
    const delCartItem = (_id: string) => {
        dispatchStore((deleteCart(_id)) as any)
        setRenderFix(!renderFix)
    }

  return (
    <div className='carttable'>
        {getItems ? <>       
        <h2>Your cart items</h2>
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
        </table> </> : 
        <span className='loader-spinner'>
            <Loading />
        </span>}           
        <button>Continue Shopping</button>
    </div>
  )
}

export default CartTable