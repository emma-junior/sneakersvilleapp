import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { State } from '../redux/reducers'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { dispatchStore } from '../redux/store'
import { getDetail } from '../redux/actions';
import SingleProduct from '../components/SingleProduct';
import Cartmodal from '../components/Cartmodal';
import { useGlobalContext } from '../hooks/Context'
import useWindowSize from '../hooks/useWindowSize'
import "../Styles/Home/home.css"
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import MobileNavModal from '../components/MobileNavModal';


//USED STORE.DISPATCH IN PLACE OF USEDISPATCH

const Details = () => {
  const {cardModal, mobileNavModal} = useGlobalContext();
  const { id } = useParams()
    const details = useSelector((state: State) => state['products'])
    
    const windowSize = useWindowSize()

    const detail  = details['viewedProduct'];

    useEffect(() => {
      dispatchStore(getDetail(id!) as any)    
    },[id])

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