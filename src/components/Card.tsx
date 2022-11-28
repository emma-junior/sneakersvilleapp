import React, { useState } from 'react'
import {Product} from '../model'
import "../Styles/Card/card.css"
import { postCart } from '../redux/actions';
import { dispatchStore } from '../redux/store'
import { useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { Rating } from 'react-simple-star-rating'
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

interface Props {
    product: Product    
}

const Card = ({product}: Props) => {
    const [btnShown, setBtnShown] = useState<boolean>(false)
    const getItems:Product[] = useSelector((state: State) => state.products['cart'])


    const addToCart = (product:Product) => {
        dispatchStore((postCart(product)) as any)

        const check = getItems.some((item) => item.title === product.title)
        
        if(check){
            toast.error(
                `${product.title} already exist in cart`
            )
        }else {
            toast.success(
                `${product.title} added to cart`
            )
        }
    }
    
  return (
    <main className='card' onMouseEnter={() => setBtnShown(true)}  onMouseLeave={() => setBtnShown(false)}>
        <Link to={`/details/${product?._id}`}><div className='card__imgwrapper'>           
            <img className='card-img' src={product.imageOne} loading="lazy" alt='' />
            </div></Link>
        <section className={`${btnShown && "move-up"}`}>
            <div className={`card-info `}>
                <div className='card-info__icon'>
                    <Rating size={30} readonly={true} allowHover={false} ratingValue={80} />
                </div>        
                <p className='card-info__title'>{product.title}</p>
                <p className='card-info__price'>${product.price}</p>
                {btnShown && <button onClick={() => addToCart(product)} className='card-info__btn'>Add To Cart</button>}
            </div>
        </section>
    </main>
  )
}

export default Card