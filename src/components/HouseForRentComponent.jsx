import "./houseForSale.css";
import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { fetchHousesForRent } from "../app/features/forRent/ForRentSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import HomeCard from "./HomeCard";
const HouseForRentComponent = () => {
  const dispatch = useDispatch();
  const Houses = useSelector((state) => state.forRent);
  useEffect(() => {
    dispatch(fetchHousesForRent());
  }, []);

  return (
    <div className=" w-full h-auto flex justify-start items-start lg:mt-4 mt-12 flex-col  lg:mx-12 ">
      <div className="w-full h-32 flex justify-center items-center flex-col">
        <h2 className="text-blue-title   text-[20px] w-full h-14 flex items-center justify-center font-body capitalize ">
          Properties for rent
        </h2>
        <h4 className="text-blue-300 text-[14px]   lg:w-[600px] w-full h-auto flex items-center justify-center font-body capitalize">
          These are the latest properties in the Sales category. You can create
          the list using the “latest listing shortcode” and show items by
          specific categories.
        </h4>
      </div>

      <hr></hr>
      <div className="w-full flex justify-center items-center  m-0 p-0 flex-col">
        {Houses.loading && (
          <ReactLoading type="spin" color="blue" height={20} width={20} />
        )}
        {!Houses.loading && Houses.houseForRent.length && (
          <ul className="card-container relative md:flex-row flex-col lg:px-0 p-3  ">
            {Houses.houseForRent.slice(0, 9).map(
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
};

export default HouseForRentComponent;
