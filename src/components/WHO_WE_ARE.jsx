import React from 'react'
import './How.css'
const WHO_WE_ARE = () => {
    return (

        <div className='how-we-are max-w-full h-auto flex-col dark:bg-black text-white flex justify-center items-center lg:flex-row lg:mx-12 mt-4  '>
                <div className='How-image lg:w-1/2  w-full  h-80 '>
                </div>
                <div className='lg:w-1/2 w-full   flex justify-center  items-center flex-col h-80  lg:mt-0 mt-12  lg:ml-4'>
                    <h2 className='w-full lg:h-14 h-auto flex lg:justify-start justify-center items-center my-8 lg:items-start text-amber-500 text-3xl font-title underline'>How We Are</h2>
                    <p className=' mb-8 text-gray-400 font-body text-start capitalize tracking-tight h-96 '>
                        Our real estate company takes pride in providing comprehensive and diverse real estate services. We strive to meet the needs and fulfill the aspirations of our clients in finding the right property, whether it is in residential, commercial or industrial markets.
                        We also offer brokerage and marketing services, as well as project management and property development to maximize value for our clients and stakeholders.
                        "We offer a diverse range of properties for sale, and can help you find the perfect property to suit your needs. Additionally, we have a wide selection of properties available for rent, with options to fit every budget."
                    </p>
                </div>
            </div>

   
  )
}

export default WHO_WE_ARE