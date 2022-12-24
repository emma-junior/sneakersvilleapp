import React, {useEffect} from 'react'
import Cartmodal from '../components/Cartmodal'
import { useGlobalContext } from '../hooks/Context'
import useWindowSize from '../hooks/useWindowSize'
import CartTable from '../components/CartTable'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Shipping from '../components/Shipping'
import Subscribe from '../components/Subscribe'
import MobileNav from '../components/MobileNav'
import MobileNavModal from '../components/MobileNavModal'

const Cart = () => {
  const {cartModal,setCartModal, mobileNavModal} = useGlobalContext();
  const windowSize = useWindowSize()

  useEffect(() => {
    setCartModal(false)
  }, [])
  

  return (
    <div className='home'>
        {
          windowSize.width >= 768 ? (<Navbar />) : (<MobileNav />)
        }
        {cartModal && <div className='home-cart-modal'><div className='end'><Cartmodal /></div></div>}
        {mobileNavModal && <div className='home-cart-modal'><div className='end'><MobileNavModal /></div></div>}
        <CartTable />
        <Shipping />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Cart