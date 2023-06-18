import {Product} from '../model'
import "../Styles/Card/card.css"
import { addToCart } from '../redux/actions/cart'
import { useAppDispatch } from '../helper/appDispatch';
import { State } from '../redux/reducers'
import { Rating } from 'react-simple-star-rating'
import { useSelector } from 'react-redux'
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

interface Props {
    product: Product    
}


const Card = ({product}: Props) => {
    const Cart:Product[] = useSelector((state:State) => state.cart);

    const dispatch = useAppDispatch()

    const addCart = (product:Product) => {
        dispatch(addToCart(product) )

        const check = Cart.some((item) => item.title === product.title)
        
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
    <main className='card'>
        <Link to={`/details/${product?._id}`}>
            <div className='card__imgwrapper'>           
            <img className='card-img' src={product.imageOne} loading="lazy" alt='' />
            </div>
        </Link>
        <section className={`move-up`}>
            <div className={`card-info `}>
                <div className='card-info__icon'>
                    <Rating size={30} readonly={true} allowHover={false} ratingValue={80} />
                </div>        
                <p className='card-info__title'>{product.title}</p>
                <p className='card-info__price'>${product.price}</p>
                <button onClick={() => addCart(product)} className='card-info__btn'>Add To Cart</button>
            </div>
        </section>
    </main>
  )
}

export default Card
