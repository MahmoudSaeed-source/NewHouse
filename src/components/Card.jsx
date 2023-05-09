import React  from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {Link} from 'react-router-dom'
const Card = ({ house }) => {
  return (
    <div className="w-full h-full  flex items-center flex-col mb-2  shadow-sm bg-white dark:shadow-white  shadow-black  relative rounded-md ">
      <div className=" group text-2xl w-full h-auto flex  items-center  pt-1 relative overflow-hidden ">
        <div className="w-20 h-10 p-4 absolute bottom-4 bg-blue-hover flex justify-center items-center text-white text-[14px] font-links shadow-md rounded-sm">
          {" "}
          {house.price}
        </div>
        <img
          className="w-full h-full  hover:scale-110 overflow-hidden transition-all duration-300 ease-linear cursor-pointer"
          src={house.photo}
          alt="images"
        />
      </div>
      <h2 className="w-full h-auto lg:text-[14px] text-[10px] font-links capitalize flex-wrap text-blue-hover flex overflow-hidden justify-start items-center px-4 font-bold   ">
        {house.address_new.line}
      </h2>
      <h2 className="w-full h-auto lg:text-[12px] text-[10px] font-title capitalize flex-wrap text-gray-500 flex overflow-hidden justify-start items-center px-4   ">
        {house.prop_type},{house.address_new.state_code},
        {house.address_new.city}
      </h2>
      <p className="des w-full h-auto text-gray-400 font-title text-[10px] px-4 leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui
        vestibulum
      </p>
      <div className="w-full h-24 flex justify-start items-center  lg:text-[10px] text-[10px] mt-2  border-b-2 border-gray-100 px-4 pb-6">
        <div className="w-[50%] h-full text-[12px] text-black font-links flex items-start justify-start flex-col font-bold">
          <p>status : </p>
          <p> beds : </p>
          <p> baths : </p>
          <p> baths : </p>
        </div>
        <div className="w-[50%] h-full text-[12px] text-gray-500 font-title flex items-end justify-start flex-col ">
          <p> {house.address_new.city}</p>
          <p> {house.prop_status.replace("for_rent", "Rent")}</p>
          <p> {house.beds}</p>
          <p> {house.baths}</p>
        </div>
      </div>
      <h2 className="group text-gray-800 w-full h-10  flex justify-start items-center  font-links text-[12px]   px-4">
        <Link to={`/houses-for-sale/${house.property_id}`}>Read More</Link>
        <MdOutlineKeyboardDoubleArrowRight
          size={15}
          className="text-blue-title-title mr-2 group-hover:scale-125 flex justify-center items-center text-blue-title"
        />
      </h2>
    </div>
  );
}

export default Card