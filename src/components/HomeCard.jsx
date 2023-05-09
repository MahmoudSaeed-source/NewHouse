/* eslint-disable no-template-curly-in-string */
import React from 'react'

import { Link } from 'react-router-dom';
const HomeCard = ({ house }) => {
    return (
      <Link to={`/houses-for-sale/${house.property_id}`} className="w-full">
        <div className=" group homeCard md:w-[250px]  w-full h-[200px] bg-green-300  cursor-pointer overflow-hidden ">
          <div
            className="w-full h-full  "
            style={{
              backgroundImage: `url(${house.photo})`,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
            }}
          >
            <div
              className="w-full h-full  z-100 relative"
              style={{ backgroundColor: " #00000060" }}
            >
              <div className="  w-full h-auto  flex flex-start absolute lg:top-[56%] top-[60%] left-0  flex-col overflow-hidden ">
                <h5 className=" h-[20px] w-[30%]  rounded-sm text-[12px] font-bolder pl-2 bg-blue text-white justify-center flex items-center  ">
                  {house.price}
                </h5>
                <p className="text-[15px] font-bold  text-white text-start pl-2">
                  {house.address_new.city}
                </p>
                <div className="w-full h-10 flex  bg-blue-hover  invisible group-hover:visible transition-all delay-75 ease-out">
                  <div className="w-[33.3%] h-full flex flex-col text-[10px] items-center justify-center   text-white ">
                    <p className="mb-0 h-4 text-gray-400">area :</p>
                    {house.sqft}
                  </div>
                  <div className="w-[33.3%] h-full flex flex-col text-[10px] items-center justify-center   text-white ">
                    <p className="mb-0 h-4 text-gray-400">bads :</p>
                    {house.beds}
                  </div>
                  <div className="w-[33.4%] h-full flex  flex-col items-center justify-center text-[10px]  text-white">
                    <p className="mb-0 h-4 text-gray-400">baths :</p>
                    <p className="flex">{house.baths}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default HomeCard