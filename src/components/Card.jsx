import React from 'react'
import { BiShowAlt } from 'react-icons/bi'
import { TbArrowBigUpLineFilled } from 'react-icons/tb'
import { GiBathtub } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'

import {Link} from 'react-router-dom'
const Card = ({ house  }) => {
  return (
        <div className='w-full h-full bg-slate-500 text-white flex items-center flex-col mb-2 rounded-xl hover:bg-gradient-to-r from-sky-300 to-indigo-500 relative' >
           
              <div className=' group text-2xl w-full h-60 flex  items-center  rounded-sm relative'>
                    <div className='layout  justify-center items-center flex  text-xs invisible group-hover:visible w-full h-full bg-slate-100 opacity-70 transition-all ease-in-out delay-100  text-black z-50 absolute top-0 left-0'>
                          <BiShowAlt /> <Link to={`/HousesForSale/${house.property_id}`}  > Show Details</Link> 
                    </div>
                    <img className='w-full h-full 'src={house.photo} alt='images'/>
              </div>
              <h2 className=' w-full h-8 flex justify-start p-2 items-center  rounded-sm lg:text-[16px] text-[10px] font-body capitalize'>{house.prop_type}</h2>
              <div className='flex justify-around items-center w-full h-10 lg:text-[15px] text-[10px] '>
                    <span >city : {house.address_new.city} </span>
                    <span > state : {house.address_new.state} </span>
                    <span > price : {house.short_price}</span>
              </div>
              <br/>
              <div className="w-full h-12 flex items-center justify-start ">
                    <div className='w-[33.3%] h-full flex items-center justify-center text-sm border-2'>
                          <TbArrowBigUpLineFilled /> {house.sqft}
                    </div>
                    <div className='w-[33.3%] h-full flex items-center justify-center text-lg border-2'>
                          <BiBed />  {house.beds} beds
                    </div>
                    <div className='w-[33.4%] h-full flex items-center justify-center text-sm  border-2 px-2 '>
                          <GiBathtub />  {house.baths} baths
                    </div>
                   
              </div>
     </div>
  )
}

export default Card