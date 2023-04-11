import React  from 'react'
import { BiShowAlt } from 'react-icons/bi'
import { TbArrowBigUpLineFilled } from 'react-icons/tb'
import { GiBathtub } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'
import { FaMapMarkerAlt } from 'react-icons/fa'

import {Link} from 'react-router-dom'
const Card = ({ house }) => {
    
  return (
        <div className='w-full h-full bg-cyan-900 text-white flex items-center flex-col mb-2 rounded-xl shadow-sm  dark:shadow-white  shadow-black  hover:bg-gradient-to-r from-sky-500 to-indigo-500  hover:shadow-md relative' >
                          <div className=' group text-2xl w-full h-60 flex  items-center  rounded-sm relative'>
                    <div className='layout  justify-center items-center flex  text-xs invisible group-hover:visible w-full h-full bg-cyan-800 opacity-60 transition-all ease-in-out delay-100  text-white z-50 absolute top-0 left-0'>
                          <BiShowAlt size={30} /> <Link to={`/HousesForSale/${house.property_id}`}  > Show Details</Link> 
                    </div>
                    <img className='w-full h-full  rounded-lg  bg-center'src={house.photo} alt='images'/>
              </div>
              <h2 className=' w-full h-8 flex justify-start p-2 mb-4 items-center  rounded-sm lg:text-[16px] text-[10px] font-body capitalize'>{house.prop_type}</h2>
              <div className='w-full h-12 text-[8px] flex overflow-hidden justify-start items-center   '><FaMapMarkerAlt size={15} color="red" /> {house.address}</div>
              <div className='flex justify-around items-center w-full h-10 lg:text-[10px] text-[10px] '>
                    <span >city : {house.address_new.city} </span>
                    <span > state : {house.address_new.state} </span>
                    <span > price : {house.short_price}</span>
              </div>
              <br/>
              <div className="w-full h-12 flex items-center justify-start ">
                    <div className='w-[33.3%] h-full flex items-center justify-center text-sm border-2 rounded-bl-lg border-r-0  border-amber-500'>
                          <TbArrowBigUpLineFilled /> {house.sqft}
                    </div>
                    <div className='w-[33.3%] h-full flex items-center justify-center text-lg border-2  border-amber-500'>
                          <BiBed />  {house.beds} 
                    </div>
                    <div className='w-[33.4%] h-full flex items-center justify-center text-sm  border-2 px-2 rounded-br-lg  border-l-0 border-amber-500'>
                          <GiBathtub /> {house.baths} 
                    </div>
                   
              </div>
     </div>
  )
}

export default Card