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
          <div className="w-full h-32 flex justify-start items-center flex-col">
            <h2 className="text-blue-title   text-[20px] w-full h-14 flex items-center justify-center font-body capitalize ">
              Properties for sale
            </h2>
            <h4 className="text-blue-300 text-[14px]   lg:w-[600px] w-full h-auto flex items-center justify-center font-body capitalize">
              These are the latest properties in the Sales category. You can
              create the list using the “latest listing shortcode” and show
              items by specific categories.
            </h4>
          </div>

          <div className="for-sale w-full flex justify-center items-start  m-0 p-0 ">
            {Houses.isLoding && (
              <ReactLoading type="spin" color="blue" height={20} width={20} />
            )}
            {!Houses.isLoding && Houses.housesForSale.length && (
              <ul className="card-container  relative md:flex-row flex-col lg:px-0 p-3 ">
                {Houses.housesForSale.slice(133, 143).map(
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
          <h2 className="group text-blue-title w-full h-11 flex justify-center items-start  font-body text-[14px] font-bold lg:px-12 px-2">
            <Link to="/HousesForRent" className="font-body capitalize">
              see All Properties
            </Link>
            <MdOutlineKeyboardDoubleArrowRight
              size={20}
              className="text-blue-title-title mr-2 group-hover:scale-125"
            />
          </h2>
        </div>
      );
}

export default HouseForSaleComponent