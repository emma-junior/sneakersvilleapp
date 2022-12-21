import React, {useEffect, useState, useMemo} from 'react'
import Navbar from '../components/Navbar'
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
import Pagination from '../components/Pagination'
import { publicRequest } from '../api'

let PageSize = 6;

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const {cardModal, mobileNavModal} = useGlobalContext();

    const [currentPage, setCurrentPage] = useState<number>(1);

    const windowSize = useWindowSize()

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
    

    const merged = [...products, ...products];
    // const mergedProduct:Product[] = [...new Set(merged)];

    const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return merged.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, merged]);
  console.log(currentData,"current")
  console.log(merged, "merged")
    return (
        <div className='home'>
            {
                windowSize.width >= 768 ? (<Navbar />) : (<MobileNav />)
            }
            {cardModal && <div className='home-cart-modal'><div className='end'><Cartmodal /></div></div>}
            {mobileNavModal && <div className='home-cart-modal'><div className='end'><MobileNavModal /></div></div>}    
            {!products.length ? (
                <span className='loader-spinner'>
                    <Loading />
                </span>
                ) : (
                <>
                    <div className='products-wrapper'>
                        {currentData?.map((product : Product, index) => <Card key={index}  product={product} />)}
                    </div>
                    <div className='products-pagination'>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={merged.length}
                            pageSize={PageSize}
                            siblingCount = {1}
                            onPageChange={(page) => setCurrentPage(page)}
                         />
                    </div>
                </>
            )}
            <div className='sub-footer'>
                <Subscribe />
                <Footer />
            </div>
        </div>
  )
}

export default Products