import './houseForSale.css'
import React,{ useEffect } from 'react'
import HomeCard from './HomeCard'
import ReactLoading from 'react-loading';
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HouseForSaleComponent = ( ) => {
      
      const dispatch = useDispatch()
      const Houses = useSelector((state) => state.forSale)
      useEffect(() => {
            dispatch(fetchHousesForSale())
      },[])

      return (
        <div className=" w-full h-auto flex justify-start items-start lg:mt-4 mt-12 flex-col lg:mx-12 ">
          <div className="w-full h-14 flex justify-between items-center">
            <h2 className="text-blue  lg:text-[16px] text-[16px] w-full h-14 flex items-start font-body capitalize underline">
              Our Featured Exclusive For Sale
            </h2>
            <h2 className=" text-blue w-full h-11 flex justify-end items-start  font-body text-[14px] font-bold lg:px-12 px-2">
              <Link to="/HousesForRent">All Properties</Link>
              <MdOutlineKeyboardDoubleArrowRight
                size={25}
                className="text-blue mr-2"
              />
            </h2>
          </div>

          <div className="w-full flex justify-start items-start  m-0 p-0 ">
            {Houses.isLoding && (
              <ReactLoading type="spin" color="blue" height={20} width={20} />
            )}
            {!Houses.isLoding && Houses.housesForSale.length && (
              <ul className="card-container  relative md:flex-row flex-col lg:px-0 p-3 ">
                {Houses.housesForSale.slice(133, 141).map(
                  (house) =>
                    house.photo && (
                      <li
                        className="Card-content font-body lg:w-1/2 w-full lg:text-xl text-sm"
                        key={house.property_id}
                      >
                        <HomeCard house={house} />
                      </li>
                    )
                )}
              </ul>
            )}
          </div>
        </div>
      );
}

export default HouseForSaleComponent