import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProduct } from '../redux/actions'
import { State } from '../redux/reducers'
import { dispatchStore } from '../redux/store'
import {Product} from '../model'
import "../Styles/Bestseller/bestseller.css"
import Card from './Card'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import Loading from './Loading'


//USED STORE.DISPATCH IN PLACE OF USEDISPATCH

const BestSeller = () => {
  const getItems:Product[] = useSelector((state: State) => state.products['product'])

  useEffect(() => {
    Aos.init({duration: 2000})
    dispatchStore(getProduct() as any)
  },[])
 
  return (
    <section data-aos="fade-up" className='bestseller'>
      <div className='bestseller__topic'>
        <p className='topic'><strong>Best</strong> Seller</p>
        <p className='topic-info'>Top our product best selling</p>
      </div> 
      <div className='bestseller__all'>
        <p>ALL PRODUCTS</p>
        <Link to="/products"><h4>SEE ALL PRODUCT</h4></Link>
      </div>
      <div className='bestseller__products'>
        {!getItems?.length ? 
          <span className='loader-spinner'>
              <Loading />
          </span> : getItems.slice(0, 8).map((product : Product) => <Card key={product._id}  product={product} />)
        }
      </div>
    </section>
  )
}

export default BestSeller