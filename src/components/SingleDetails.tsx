import React, { useState } from 'react'
import {Product} from "../model"
import "../Styles/Singledetails/singledetails.css"
import Specification from './Specification';

interface Props {
    detail: Product;
}

const SingleDetails = ({detail}: Props) => {
    const [activeDetail, setActiveDetail] = useState("description")
  return (
    <section className='single-details'>
        <div className='details-headers'>
            <h3 onClick={() => setActiveDetail("description")} className={`${activeDetail === "description" && "header-active"} headers`}>Description</h3>
            <h3 onClick={() => setActiveDetail("specification")} className={`${activeDetail === "specification" && "header-active"} headers`}>Specification</h3>
            <h3 onClick={() => setActiveDetail("material")} className={`${activeDetail === "material" && "header-active"} headers`}>Materials</h3>
            <h3 className='headers'>Reviews and Rating</h3>
        </div>
        {activeDetail === "description" && <div className='description'><p>{detail.description}</p><p>advanced performance metrics for endurance sports, Garmin quality navigation features and smart notifications. In fenix Chronos top-tier performance meets sophisticated design in a highly evolved timepiece that fits your style anywhere, anytime. Solid brushed 316L stainless steel case with brushed stainless steel bezel and integrated EXOTM antenna for GPS + GLONASS support. High-strength scratch resistant sapphire crystal. Brown vintage leather strap with hand-sewn contrast stitching and nubuck inner lining and quick release mechanism.</p></div>}
        {activeDetail === "specification" && <Specification detail={detail} />}
        {activeDetail === "material" && <table>
            <tr>
                <td className='bold'>Top</td>
                <td className='not-bold'>Cotton Digital Print Chain Stitch Embroidery Work</td>
            </tr>
            <tr>
                <td className='bold'>Bottom</td>
                <td className='not-bold'>Cotton Cambric</td>
            </tr>
            <tr>
                <td className='bold'>Dupatta</td>
                <td className='not-bold'>Digital Printed Cotton Malmal With Chain Stitch</td>
            </tr>
        </table>}
    </section>
  )
}

export default SingleDetails