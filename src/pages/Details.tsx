import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SingleProduct from '../components/SingleProduct';
import Cartmodal from '../components/Cartmodal';
import { useGlobalContext } from '../hooks/Context'
import useWindowSize from '../hooks/useWindowSize'
import { Product } from '../model';
import "../Styles/Home/home.css"
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import MobileNavModal from '../components/MobileNavModal';
import { publicRequest } from '../api';


const Details = () => {
  const {cardModal, mobileNavModal} = useGlobalContext();
  const [detail, setDetail] = useState<Product | null>(null);
  const { id } = useParams()
    
    const windowSize = useWindowSize()

    useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setDetail(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getProduct();
  }, [id]);

  return (
    <div className='home'>
        {
        windowSize.width >= 768 ? (<Navbar />) : (<MobileNav />)
        } 
        {cardModal && <div className='home-cart-modal'><div className='end'><Cartmodal /></div></div>}
        {mobileNavModal && <div className='home-cart-modal'><div className='end'><MobileNavModal /></div></div>}
        <SingleProduct detail={detail}  />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Details