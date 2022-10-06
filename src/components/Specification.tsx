import React from 'react'
import {Product} from "../model"
import "../Styles/Singledetails/singledetails.css"

interface Props {
    detail: Product;
}

const Specification = ({detail}: Props) => {
  return (
    <table >
        <tr>
            <td className='bold'>Name</td>
            <td className='not-bold'>{detail.title}</td>
        </tr>
        <tr>
            <td className='bold'>Style</td>
            <td className='not-bold'>DV2223-100</td>
        </tr>
        <tr>
            <td className='bold'>Categories</td>
            <td className='not-bold'>{detail.categories.map((category) => <span>{category},</span>)}</td>
        </tr>
        <tr>
            <td className='bold'>Sizes</td>
            <td className='not-bold'>{detail.sizes.map((size) => <span>{size},</span>)}</td>
        </tr>
        <tr>
            <td className='bold'>Brand</td>
            <td>Adidas</td>
        </tr>
        <tr>
            <td className='bold'>Color</td>
            <td>Black, White</td>
        </tr>
    </table>
  )
}

export default Specification