import React from 'react'
import { AiFillContainer } from 'react-icons/ai'
import { MdRealEstateAgent } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const OurServices = () => {
    return (
      <div className=" w-full h-auto   flex lg:px-12 px-0  flex-col pt-4  pb-4">
        <h2 className="w-full h-10 mb-2  lg:mt-0 mt-6 text-start text-[16px] text-blue-title font-title">
          Our Services
        </h2>
        <div className="w-full lg:h-48 h-auto lg:flex-row flex-col flex lg:p-4 p-0 justify-around lg:items-start items-center  flex-wrap ">
          <div className="lg:w-[300px] max-w-[350px] lg:mb-0 mb-4 h-36 mr-2 flex border-gray-300 border-2 shadow-lg bg-white">
            <div className="w-[15%] h-1/3 flex bg-blue-title justify-center items-center">
              <AiFillContainer size={40} className="text-white" />
            </div>
            <div className="w-[85%] h-full flex flex-col justify-start m-4 ">
              <h5 className="h-8 border-b-2 border-gray-300 text-blue-title text-left font-bold font-title text-[16px]">
                Wide Range of Properties
              </h5>
              <p className="text-gray-500 text-md mt-1 text-start text-[14px]">
                We have many advantages and options
              </p>
              <div className="group w-full h-8 text-start flex items-center mt-4  cursor-pointer">
                <span className="text-gray-400 font-body mr-1 text-[14px] ">
                  see more
                </span>
                <MdOutlineKeyboardDoubleArrowRight
                  size={14}
                  className="text-blue-title group-hover:scale-150"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[300px] max-w-[350px]  lg:mb-0 mb-4 h-36 flex border-gray-300 border-2 shadow-lg lg:mr-2 mr-0  bg-white">
            <div className="w-[15%] h-1/3 flex bg-blue-title justify-center items-center">
              <MdRealEstateAgent size={40} className="text-white" />
            </div>
            <div className="w-[85%] h-full flex flex-col justify-start m-4 ">
              <h5 className="h-8 border-b-2 text-blue-title border-gray-300  text-left font-bold font-title text-[16px]">
                20 Agents for Your Service
              </h5>
              <p className="text-gray-500 text-md mt-1 text-start text-[14px]">
                We have the best customers to serve you
              </p>
              <div className="group w-full h-8 text-start flex items-center mt-4  cursor-pointer">
                <span className="text-gray-400 font-body mr-1 text-[14px] ">
                  see more
                </span>
                <MdOutlineKeyboardDoubleArrowRight
                  size={14}
                  className="text-blue-title group-hover:scale-150"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[300px] max-w-[350px] h-36 flex border-gray-300 border-2 shadow-lg  bg-white">
            <div className="w-[15%] h-1/3 flex bg-blue-title justify-center items-center">
              <AiFillContainer size={40} className="text-white" />
            </div>
            <div className="w-[85%] h-full flex flex-col justify-start m-4 ">
              <h5 className="h-8 border-b-2 text-blue-title border-gray-300  text-left font-bold font-title text-[16px]">
                Best Price Guarantee!
              </h5>
              <p className="text-gray-500 text-md mt-1 text-start  text-[14px]">
                You will find our best offers on all prices
              </p>
              <div className="group w-full h-8 text-start flex items-center mt-4  cursor-pointer">
                <span className="text-gray-400 font-body mr-1 text-[14px] ">
                  see more
                </span>
                <MdOutlineKeyboardDoubleArrowRight
                  size={14}
                  className="text-blue-title group-hover:scale-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurServices
