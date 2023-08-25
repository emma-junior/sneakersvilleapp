import React,{useState, useEffect} from 'react'
import {Product} from "../model"
import ActiveImage from './ActiveImage';
import "../Styles/SingleProduct/singleproduct.css"
import { Rating } from 'react-simple-star-rating';
import { useAppDispatch } from '../helper/appDispatch';
import { useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cart'
import toast from "react-hot-toast";
import { State } from '../redux/reducers'
import SingleDetails from './SingleDetails';
import Card from './Card';
import Loading from './Loading';
import { publicRequest } from '../api';
import useFetch from '../hooks/usePublicFetch';

interface Props {
  id: string | undefined
}

const SingleProduct = ({id}:Props) => {
  const [detail, setDetail] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState(null);

  const images = [detail?.imageOne, detail?.imageTwo, detail?.imageThree, detail?.imageFour];
  const [currentImage, setCurrentImage] = useState<number>(0);
  const Cart:Product[] = useSelector((state:State) => state.cart);
  const [qty, setQty] = useState<number>(1)

  const dispatch = useAppDispatch()

    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products/" + id);
          setDetail(res.data);
          setIsLoading(false)
          setError(null);
        } catch (error:any) {
          console.log(error)
          setIsLoading(false);
          setError(error.message);
        }
      };
      getProduct();
    }, [id]);


  const { data, isloading, isError } = useFetch("products", "", "");

  const addCart = (detail:Product) => {
    dispatch(addToCart(detail))

    const check = Cart.some((item) => item.title === detail.title)
        
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

  const decQty = () => {
    qty > 1 && setQty(qty - 1)
    
  }

  return (
    <>
    {error && <div>{isError}</div>}
    {isLoading && <span className='loader-spinner'><Loading /></span>}
    {detail && <section className='details'>
      <div className='singleproduct'>
        <div className='singleproduct-images'>
          <div className='currentimage-div'>
            <img className='currentimage' src={images[currentImage]} alt='' />
          </div>
          <div className='images-wrapper'>
            <div className='images'>
              {images.map((images, index) => <ActiveImage key={index} currentImage={currentImage} setCurrentImage={setCurrentImage} images={images} num={index}   />)}
            </div>
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
          <span className='adjust-qty'>
            <button onClick={decQty}>-</button>{qty}<button onClick={() => setQty(qty + 1)}>+</button>
          </span>
          <button onClick={() => addCart({...detail, quantity:qty})} className='cart-btn'>Add To Cart</button>
        </div>
      </div>
      <SingleDetails detail={detail} />
      <div className='related-product-wrapper'>
        <h2>RELATED PRODUCTS</h2>
        <div>
          {isError && <div>{isError}</div>}
          {isloading && <span className='loader-spinner'><Loading /></span>}
          {data && 
            <div className='related-product'>
              {data.slice(9, 13).map((product : Product) => <div className='related-product-card'><Card key={product._id}  product={product} /></div>)}
            </div>}
        </div>
      </div>
    </section>}
  </>
  )
}

export default SingleProduct