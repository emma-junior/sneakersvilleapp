import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/actions'
import { State } from '../redux/reducers';
import { dispatchStore } from '../redux/store'
import {Product} from '../model'
import "../Styles/Bestseller/bestseller.css"
import "../Styles/New/new.css"
import Card from './Card'
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from './Loading';

const New = () => {
    const getItems:Product[] = useSelector((state: State) => state.products['product'])
  
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getProduct())
  // },[dispatch])

  useEffect(() => {
    Aos.init({duration: 2000})
    dispatchStore(getProduct() as any)
  },[])
 
  return (
    <section data-aos="fade-up" className='bestseller'>
      <div className='bestseller__topic'>
        <p className='topic'><strong>New</strong> Arrivals</p>
        <p className='topic-info'>We alway up to date new arrivals follows trending</p>
      </div>
      <div className='new'>       
        {!getItems?.length ? 
          <span className='loader-spinner'>
              <Loading />
          </span> : <div className='new-product track'>{getItems.slice(11, 17).map((product : Product) => <Card key={product._id}  product={product} />)}</div>
        }
      </div>
    </section>
  )
}

export default New