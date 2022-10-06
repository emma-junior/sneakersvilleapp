import React, { useState, useEffect } from 'react'
import {Product} from '../model'
import "../Styles/Card/card.css"
import { useGlobalContext } from '../hooks/Context';
import { postCart } from '../redux/actions';
import { dispatchStore } from '../redux/store'
import { useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { getCart } from '../redux/actions'
import { Rating } from 'react-simple-star-rating'
import toast from "react-hot-toast"
import { Link } from "react-router-dom"


interface Props {
    product: Product    
}

const Card = ({product}: Props) => {
    const {renderFix, setRenderFix} = useGlobalContext();
    const [btnShown, setBtnShown] = useState<boolean>(false)
    const getItems:Product[] = useSelector((state: State) => state.products['cart'])


    const addToCart = (product:Product) => {
        dispatchStore((postCart(product)) as any)
        setRenderFix(!renderFix)

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

    // useEffect(() => {
    //   if(windowSize.width <= 768) {
    //     setBtnShown(true)
    //   }
    // }, [])
    
  return (
    <main className='card' onMouseEnter={() => setBtnShown(true)}  onMouseLeave={() => setBtnShown(false)}>
        <Link to={`/details/${product?._id}`} onClick={() => setRenderFix(!renderFix)}><div className='card__imgwrapper'><img className='card-img' src={product.imageOne} alt='' /></div></Link>
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