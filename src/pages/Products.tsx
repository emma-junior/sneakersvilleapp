import React, {useState, useMemo} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import '../Styles/Products/products.scss'
import "../Styles/Home/home.scss"
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import { useGlobalContext } from '../hooks/Context'
import useWindowSize from '../hooks/useWindowSize'
import MobileNav from '../components/MobileNav'
import Cartmodal from '../components/Cartmodal'
import MobileNavModal from '../components/MobileNavModal'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import useFetch from '../hooks/usePublicFetch'


let PageSize = 6;
  
const Products = () => {
    const {cartModal, mobileNavModal} = useGlobalContext();

    const [category, setCategory] = useState<string>("")
    const [currentPage, setCurrentPage] = useState<number>(1);

    const windowSize = useWindowSize()
    
    const { data, isloading, isError } = useFetch("products", "", category);

    const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data]);

    return (
        <div className='home'>
            {
                windowSize.width >= 768 ? (<Navbar />) : (<MobileNav />)
            }
            {cartModal && <div className='home-cart-modal'><div className='end'><Cartmodal /></div></div>}
            {mobileNavModal && <div className='home-cart-modal'><div className='end'><MobileNavModal /></div></div>}
            <div>
              {isError && <div className='error'>{isError}</div>}
              {isloading && <span className='loader-spinner'><Loading /></span>}
              {data ?
                <div className='categories_products'>
                  <div className='categories'>
                    <h3>Categories</h3>
                    <ul>
                      <li onClick={() => setCategory("")} className={`${!category && "all"}`}>All</li>
                      <li onClick={() => setCategory("Men")} className={`${category === "Men" && "men"}`}>Men</li>
                      <li onClick={() => setCategory("Women")} className={`${category === "Women" && "women"}`}>Women</li>
                      <li onClick={() => setCategory("Kids")} className={`${category === "Kids" && "kids"}`}>Kids</li>
                    </ul>
                  </div>
                    <div className='products-containers'>
                      <div className='products-wrapper'>
                          {currentData?.map((product, index) => <Card key={index}  product={product} />)}
                      </div>
                      <div className='products-pagination'>
                          <Pagination
                              className="pagination-bar"
                              currentPage={currentPage}
                              totalCount={data?.length || 17}
                              pageSize={PageSize}
                              siblingCount = {1}
                              onPageChange={(page) => setCurrentPage(page)}
                          />
                      </div>
                    </div>
                </div> : <div>No Sneakers now, please check back</div>
              }
            </div>  
            <div className='sub-footer'>
                <Subscribe />
                <Footer />
            </div>
        </div>
  )
}

export default Products