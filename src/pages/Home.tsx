import React, { useEffect} from 'react'
import Benefits from '../components/Benefits'
import BestSeller from '../components/BestSeller'
import Cartmodal from '../components/Cartmodal'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import MobileNav from '../components/MobileNav'
import New from '../components/New'
import Shopnow from '../components/Shopnow'
import Subscribe from '../components/Subscribe'
import { useGlobalContext } from '../hooks/Context'
import useWindowSize from '../hooks/useWindowSize'
import "../Styles/Home/home.css"
import MobileNavModal from '../components/MobileNavModal'


const Home = () => {
  const {cardModal, setCardModal, mobileNavModal, setMobileNavModal} = useGlobalContext();

  const windowSize = useWindowSize()


  useEffect(() => {
    setCardModal(false)
    setMobileNavModal(false)
  },[setCardModal, setMobileNavModal])
  return (
    <div className='home'>
      {
        windowSize.width >= 768 ? (<Navbar />) : (<MobileNav />)
      }        
        {cardModal && <div className='home-cart-modal'><div className='end'><Cartmodal /></div></div>}
        {mobileNavModal && <div className='home-cart-modal'><div className='end'><MobileNavModal /></div></div>}
        <Header />
        <Benefits />
        <BestSeller />
        <New />
        <Shopnow />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home

// https://youtu.be/yMq2aUv9nKU