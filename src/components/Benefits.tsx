import React from 'react'
import "../Styles/Benefits/benefits.css"
import {TbLocation} from "react-icons/tb";
import {BsArrowClockwise} from "react-icons/bs";
import {FiLock} from "react-icons/fi";
import {RiPriceTag3Line} from "react-icons/ri";


const Benefits = () => {

    interface benefitType {
        benefit:{
            id: number,
            icon: any,
            title: string,
            info: string
        }[]
    }

    const benefit:benefitType["benefit"] = [
        {
            id: 1,
            icon: <TbLocation />,
            title: "Free Shipping",
            info: "Orders over $100",
        },
        {
            id: 2,
            icon: <BsArrowClockwise />,
            title: "Free Returns",
            info: "Within 30 days",
        },
        {
            id: 3,
            icon: <FiLock />,
            title: "100% Secure",
            info: "Payment Online",
        },
        {
            id: 4,
            icon: <RiPriceTag3Line />,
            title: "Best Price",
            info: "Guaranteed",
        }
    ]

  return (
    <main>
        <section className='benefits'>
            {benefit.map((benefit) => {
                return (
                    <div key={benefit.id} className='benefits__wrapper'>
                        <p className='benefits-icon'>{benefit.icon}</p>
                        <div className='benefits-content'>
                            <p className='benefits-content__title'>{benefit.title}</p>
                            <p className='benefits-content__info'>{benefit.info}</p>
                        </div>
                        
                    </div>
                )
            })}        
        </section>
        <hr />
    </main>
  )
}

export default Benefits