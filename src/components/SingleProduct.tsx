import React,{useState, useEffect} from 'react'
import {Product} from "../model"
import ActiveImage from './ActiveImage';
import "../Styles/SingleProduct/singleproduct.css"
import { Rating } from 'react-simple-star-rating';
import { postCart } from '../redux/actions';
import { dispatchStore } from '../redux/store'
import { useSelector } from 'react-redux'
import toast from "react-hot-toast";
import { getProduct } from '../redux/actions'
import { State } from '../redux/reducers'
import SingleDetails from './SingleDetails';
import Card from './Card';
import Loading from './Loading';

interface Props {
  detail: Product;
}

const SingleProduct = ({detail}: Props) => {
  const images = [detail.imageOne, detail.imageTwo, detail.imageThree, detail.imageFour];
  const [currentImage, setCurrentImage] = useState<number>(0);

  const getItems:Product[] = useSelector((state: State) => state.products['product'])


  const addToCart = (detail:Product) => {
    dispatchStore((postCart(detail)) as any)

    const check = getItems.some((item) => item.title === detail.title)
        
        if(check){
            toast.error(
                `${detail.title} already exist in cart`
            )
        }else {
            toast.success(
                `${detail.title} added to cart`
            )
        }
  }

  useEffect(() => {
    dispatchStore(getProduct() as any)
  },[])

  return !getItems?.length ? (
    <span className='loader-spinner'>
      <Loading />
    </span>
  ):(
    <section className='details'>
      <div className='singleproduct'>
        <div className='singleproduct-images'>
          <div className='currentimage-div'>
            <img className='currentimage' src={images[currentImage]} alt='' />
          </div>
          <div className='images'>
            {images.map((images, index) => <ActiveImage key={index} currentImage={currentImage} setCurrentImage={setCurrentImage} images={images} num={index}   />)}
          </div>
        </div>
        <div className='singleproduct-detail'>
          <h1>{detail.title}</h1>
          <div className='rating'>
            <Rating size={15} readonly={true} allowHover={false} ratingValue={80} />
            <p className='review-order'>4.0 &nbsp;|&nbsp; 62 Reviews 242 orders</p>
          </div>
          <p>Seamlessly predominate enterprise metrics without performance based process improvements.</p>
          <div className='price'>
            <span className='main-price'>${detail.price}</span>
            <span className='former-price'>${detail.formerPrice}</span>         
          </div>
          <div className='sizes'>
            <h4>Size:</h4>
            <div className='product-sizes'>
              {detail.sizes?.map((size) => <p className='one-size'> {size}</p>)}
            </div>
          </div>
          <div className='categories'>
            <h4>Categories:</h4>
            <div className='product-categories'>
              {detail.categories?.map((category, index) => <p key={index}>{category} {index < detail.categories.length - 1 ? ", " : ""}</p>)}
            </div>
          </div>
          <div className='categories'>
            <h4>Tag:</h4>
            <div className='product-categories'>
              {detail.tag?.map((tag, index) => <p key={index}>{tag} {index < detail.tag.length - 1 ? ", " : ""}</p>)}
            </div>
          </div>
          <button onClick={() => addToCart(detail)} className='cart-btn'>Add To Cart</button>
        </div>
      </div>
      <SingleDetails detail={detail} />
      <div className='related-product-wrapper'>
        <h2>RELATED PRODUCTS</h2>
        <div className='related-product'>
          {getItems.slice(9, 13).map((product : Product) => <div className='related-product-card'><Card key={product._id}  product={product} /></div>)}
        </div>
      </div>
    </section>
  )
}

export default SingleProduct