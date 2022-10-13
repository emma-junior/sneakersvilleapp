import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { getProduct } from '../redux/actions'
import { State } from '../redux/reducers'
import { dispatchStore } from '../redux/store'
import {Product} from '../model'
import Card from '../components/Card'
import '../Styles/Products/products.css'
import "../Styles/Home/home.css"
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import { useGlobalContext } from '../hooks/Context'
import useWindowSize from '../hooks/useWindowSize'
import MobileNav from '../components/MobileNav'
import Cartmodal from '../components/Cartmodal'
import MobileNavModal from '../components/MobileNavModal'
import Loading from '../components/Loading'

const Products = () => {
    const getItems:Product[] = useSelector((state: State) => state.products['product'])
    const {cardModal, mobileNavModal} = useGlobalContext();

    const windowSize = useWindowSize()
    
    useEffect(() => {
        dispatchStore(getProduct() as any)
    },[])
    return (
        <div className='home'>
            {
                windowSize.width >= 768 ? (<Navbar />) : (<MobileNav />)
            }
            {cardModal && <div className='home-cart-modal'><div className='end'><Cartmodal /></div></div>}
            {mobileNavModal && <div className='home-cart-modal'><div className='end'><MobileNavModal /></div></div>}    
            {!getItems.length ? (
                <span className='loader-spinner'>
                    <Loading />
                </span>
                ) : (
                <div className='products-wrapper'>
                    {getItems.map((product : Product) => <Card key={product._id}  product={product} />)}
                </div>
            )}
            <div className='sub-footer'>
                <Subscribe />
                <Footer />
            </div>
        </div>
  )
}

export default Products