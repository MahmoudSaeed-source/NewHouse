import React from 'react'
import { AiFillContainer } from 'react-icons/ai'
import { MdRealEstateAgent } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const OurServices = () => {
    return (
        <div className=' w-full h-auto  flex p-12  flex-col '>
            <h2 className='w-full h-10 mb-2  text-start text-2xl text-blue font-title'>Our Services</h2>
            <div className='w-full lg:h-48 h-auto lg:flex-row flex-col flex p-4 justify-around  ' >
                <div className='w-[400px] h-36 flex border-gray-300 border-2 shadow-lg bg-white'>
                    <div className='w-[15%] h-1/3 flex bg-blue justify-center items-center'>
                            <AiFillContainer size={40} className='text-white' />
                        </div>
                        <div className='w-[85%] h-full flex flex-col justify-start m-4 '>
                        <h5 className='h-8 border-b-2 border-gray-300 text-lg text-left font-bold font-title'>Wide Range of Properties</h5>
                        <p className='text-gray-500 text-md mt-2 text-start'>We have many advantages and options</p>
                        <div className='w-full h-8 text-start flex  mt-4'>
                            <span className='text-gray-400 font-body mr-4'>see more</span>
                            <MdOutlineKeyboardDoubleArrowRight size={25} className='text-blue'/>
                        </div>
                        </div>
                    </div>
                <div className='w-[400px] h-40 flex border-gray-300 border-2 shadow-lg  bg-white'>
                    <div className='w-[15%] h-1/3 flex bg-blue justify-center items-center'>
                        <MdRealEstateAgent size={40} className='text-white' />
                        </div>
                        <div className='w-[85%] h-full flex flex-col justify-start m-4 '>
                        <h5 className='h-8 border-b-2 border-gray-300 text-lg text-left font-bold font-title'>20 Agents for Your Service</h5>
                        <p className='text-gray-500 text-md mt-2 text-start'>We have the best customers to serve you</p>
                        <div className='w-full h-8 text-start flex mt-4 '>
                            <span className='text-gray-400 font-body mr-4'>see more</span>
                            <MdOutlineKeyboardDoubleArrowRight size={25} className='text-blue' />
                        </div>
                        </div>
                    </div>
                <div className='w-[400px] h-40 flex border-gray-300 border-2 shadow-lg  bg-white'>
                    <div className='w-[15%] h-1/3 flex bg-blue justify-center items-center'>
                            <AiFillContainer size={40} className='text-white' />
                        </div>
                        <div className='w-[85%] h-full flex flex-col justify-start m-4 '>
                        <h5 className='h-8 border-b-2 border-gray-300 text-lg text-left font-bold font-title'>Best Price Guarantee!</h5>
                        <p className='text-gray-500 text-md mt-2 text-start'>You will find our best offers on all prices</p>
                        <div className='w-full h-8 text-start flex mt-4 '>
                            <span className='text-gray-400 font-body mr-4'>see more</span>
                            <MdOutlineKeyboardDoubleArrowRight size={25} className='text-blue' />
                        </div>
                        </div>
                    </div>
                </div>
             
            </div>
       
  )
}

export default OurServices
