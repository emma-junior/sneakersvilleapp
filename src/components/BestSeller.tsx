import React from 'react'
import { useEffect } from 'react'
import {Product} from '../model'
import "../Styles/Bestseller/bestseller.css"
import Card from './Card'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import Loading from './Loading'
import useFetch from '../hooks/usePublicFetch'


const BestSeller = () => {
  const { data, isloading, isError } = useFetch("products", "", "");

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
 
  return (
    <section data-aos="fade-up" className='bestseller'>
      <div className='bestseller__topic'>
        <p className='topic'><strong>Best</strong> Seller</p>
        <p className='topic-info'>Our top best selling product</p>
      </div> 
      <div className='bestseller__all'>
        <p>ALL PRODUCTS</p>
        <Link to="/products"><h4>SEE ALL PRODUCT</h4></Link>
      </div>
      <div>
        {isError && <div className='error'>{isError}</div>}
        {isloading && <span className='loader-spinner'><Loading /></span>}
        {data && <div className='bestseller__products'>
          {data.slice(0,8).map((product : Product) => <Card key={product._id}  product={product} />)}
          </div>}
      </div>
    </section>
  )
}

export default BestSeller