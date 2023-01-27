import React from 'react'
import { useEffect } from 'react'
import {Product} from '../model'
import "../Styles/Bestseller/bestseller.css"
import "../Styles/New/new.css"
import Card from './Card'
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from './Loading';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useFetch from '../hooks/usePublicFetch'




const New = () => {
    const { data, isloading, isError } = useFetch("products", "true");

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section data-aos="fade-up" className='bestseller'>
      <div className='bestseller__topic'>
        <p className='topic'><strong>New</strong> Arrivals</p>
        <p className='topic-info'>We are always up to date with new arrivals following trends</p>
      </div>
      <div className='wrapper'>
        {isError && <div className='error'>{isError}</div>}
        {isloading && <span className='loader-spinner'><Loading /></span>}
        {data && <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme new-slider">
          {data?.map((product : Product) => <Card key={product._id}  product={product} />)}
        </Carousel>}
      </div>
    </section>
  )
}
{/* className='new-product track' */}

export default New