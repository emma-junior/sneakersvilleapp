import React, {useState} from 'react'
import { useEffect } from 'react'
import {Product} from '../model'
import "../Styles/Bestseller/bestseller.css"
import Card from './Card'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { publicRequest } from '../api'


const BestSeller = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products")
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  })

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
      {!products?.length ?
        <span className='loader-spinner'>
              <Loading />
          </span> : <div className='bestseller__products'>
            {products.slice(0, 8).map((product : Product) => <Card key={product._id}  product={product} />)}
          </div>
    }
      {/* <div className='bestseller__products'>
        {!products?.length ? 
          <span className='loader-spinner'>
              <Loading />
          </span> : products.slice(0, 8).map((product : Product) => <Card key={product._id}  product={product} />)
        }
      </div> */}
    </section>
  )
}

export default BestSeller