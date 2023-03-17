import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GiSpookyHouse } from 'react-icons/gi'
const Footer = () => {
  return (
    <div className='w-full lg:h-[400px] h-auto mt-6 text-black  bg-Footer-pattern bg-center ' >
      <div className='w-full h-full   flex  flex-col  ' style={{ backgroundColor: '#324f5ae8 ' }}>
        <div className='w-full h-[75%] px-10 py-6 flex  lg:flex-row  flex-col   ' >
          <div className='lg:w-1/4 w-full flex flex-col items-start  mr-12 lg:mb-0 mb-4  '>
            <h3 className='font-body text-amber-500 mb-6 '>New House</h3>
            <p className='font-body text-gray-300 mb-6 text-start '>
              CitiLights brings wide range of choice, steadily updated property list and market trend for you to figure out your right decision.
            </p>
            <p className='font-body text-gray-300 text-start '>
              You are now at right place for your real estate research.
            </p>
          </div>
          <div className='lg:w-1/4 w-full flex flex-col items-start lg:mb-0 mb-4  '>
            <h3 className='font-body text-amber-500 mb-6 '>Featured Property</h3>
            <div className='flex w-full '>
              <div className='bg-Footer-1  w-20 h-20 bg-center bg-cover mr-6'></div>
              <div className=' w-44 h-20 flex flex-col  justify-center items-start font-body text-gray-300 text-sm '>
                <p className='hover:text-amber-300 cursor-pointer'>For Open house</p>
                <p className='hover:text-amber-300 cursor-pointer'>Fresno,CA93722</p>
              </div>
            </div>
            <div className='flex w-full  mt-6'>
              <div className='bg-Footer-2  w-20 h-20 bg-center bg-cover mr-6'></div>
              <div className=' w-44 h-20 flex flex-col  justify-center items-start font-body text-gray-300 text-sm '>
                <p className='hover:text-amber-300 cursor-pointer'>For Sale</p>
                <p className='hover:text-amber-300 cursor-pointer'>3/15 Dudley Street,</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 w-full  flex flex-col items-start  lg:px-6 px-0 lg:mb-0 mb-4'>
            <h3 className='font-body text-amber-500 mb-6 '>Useful links</h3>
            <ul className='w-full font-body text-gray-300'>
              <li className='mb-2 h-6 hover:text-amber-500'>Home</li>
              <hr />
              <li className='mb-2 h-6 hover:text-amber-500'>forSale</li>
              <hr />
              <li className='mb-2 h-6 hover:text-amber-500'>for Rent</li>
              <hr />
              <li className='mb-2 h-6 hover:text-amber-500'>About</li>
              <hr />
            </ul>
          </div>
          <div className='lg:w-1/4 w-full  flex flex-col items-start  px-2 lg:mb-0 mb-4 '>
            <h3 className='font-body text-amber-500 mb-6 '>Contact info</h3>
            <div className='w-full  flex flex-col  '>
              <div className='w-full  h-8 flex justify-start items-start rounded-lg text-sm mb-4  ' style={{ backgroundColor: '#2d3b40' }} >
                <span className=' w-12 h-full rounded-l-lg flex justify-center items-center text-sm font-body' style={{ backgroundColor: '#1a1d1e' }}><FaMapMarkerAlt color='#fff' /></span>
                <span className=' w-full h-full rounded-l-lg flex justify-center items-center font-body text-[12px] ml-2 text-gray-300'>376 Baker Street, New York</span>
              </div>
              <div className='w-full  h-8 flex justify-start items-start rounded-lg text-sm mb-4  ' style={{ backgroundColor: '#2d3b40' }} >
                <span className=' w-12 h-full rounded-l-lg flex justify-center items-center text-sm font-body' style={{ backgroundColor: '#1a1d1e' }}><BsFillTelephoneFill color='#fff' /></span>
                <span className=' w-full h-full rounded-l-lg flex justify-center items-center font-body text-[12px] ml-2 text-gray-300'>(+01)-486-2857</span>
              </div>
              <div className='w-full  h-8 flex justify-start items-start rounded-lg text-sm mb-4  ' style={{ backgroundColor: '#2d3b40' }} >
                <span className=' w-12 h-full rounded-l-lg flex justify-center items-center text-sm font-body' style={{ backgroundColor: '#1a1d1e' }}><AiOutlineMail color='#fff' /></span>
                <span className=' w-full h-full rounded-l-lg flex justify-center items-center font-body text-[12px] ml-2 text-gray-300'>info@newhouse.com</span>
              </div>
            </div>
          </div>
          
      </div>
        <div className='w-full  lg:h-[25%] h-auto flex justify-between items-center  px-10 py-2 lg:flex-row flex-col   ' style={{ backgroundColor:'rgb(12 25 30 / 38%)'}}>
          <div className='lg:w-1/2 w-full h-auto text-gray-300 font-body  opacity-70 flex flex-col  justify-center items-start'>
            <h4>© 2023 NewHouse. All Rights Reserved.</h4>
            <h6>Powered by React js</h6>
          </div>
          <div className='lg:w-1/2 w-full  h-auto flex flex-col justify-center lg:items-end items-center ' >
            <h2  className='text-2xl text-gray-300 font-body mb-[-8px] mt-3'>New House</h2>
            <div className='flex justify-center items-center h-full '><GiSpookyHouse size={40} color="#fff" /> <span className= 'text-gray-300 font-body pt-4'>Real Estate Company</span></div>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Footer