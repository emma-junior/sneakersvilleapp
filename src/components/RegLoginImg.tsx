import React from 'react'
import fadeOut from '../helper/fadeOut'

const RegLoginImg = ({pic}: {pic: string}) => {
  return (
    <div className='reg-img-container'>
        <div className='reg-img-cover'></div>
        <img onLoad={fadeOut} className="reg-img" src={`/assets/images/${pic}.jpg`} alt='' />
        <div className='reg-img-loader'>
            <img src='/assets/svgs/loader.svg' alt='' />
        </div>
    </div>
  )
}

export default RegLoginImg