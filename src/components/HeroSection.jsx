import React from 'react'
import './Hero.css'
const HeroSection = () => {
  return (
    <div className='w-full h-{200} flex justify-center items-center w-full overflow-hidden dark:bg-black '>
        <div className="Hero flex items-center justify-center flex-col w-full" >
          <h2 className='text-white  text-5xl lg:text-7xl font-title  flex justify-center items-center capitalize p-2 '>New House</h2>
          <h2 className=' text-3xl font-title  h-28 flex justify-center items-center capitalize p-5  text-amber-500'>We have your home</h2>
          <div className="BtnSections lg:w-1/2 w-full p-5  h-16 flex justify-center items-center ">
          <button className='w-1/3 h-10 flex items-center justify-center text-amber-400 text-xl font-Links rounded-lg mr-2 capitalize bg-white hover:bg-gradient-to-r from-sky-300 to-indigo-500 hover:text-white transition-all'>Houses For sale</button>
          <button className='w-1/3 h-10 text-amber-400 text-xl font-Links rounded-lg mr-2 bg-white  hover:bg-gradient-to-r from-sky-300 to-indigo-500  hover:text-white transition-all '>Houses For Rent</button>
          <button className='w-1/3 h-10 text-amber-400 text-xl font-Links rounded-lg mr-2 bg-white hover:bg-gradient-to-r from-sky-300 to-indigo-500 hover:text-white transition-all'>Houses Sold</button>
          </div>
        </div>
   
    </div>
  )
}

export default HeroSection