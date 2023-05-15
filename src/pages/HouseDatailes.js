import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import NAV_BAR from "../components/NAV_BAR";
import { fetchHousesForSale } from "../app/features/forSale/forSale";
import { useDispatch,useSelector } from "react-redux";
import Map,{ Marker,NavigationControl } from 'react-map-gl';
import Footer from "../components/Footer";
import MoveUp from "../components/MoveUp";
import SearchHouses from "../components/SearchHouses";
import MapComponent from "../components/MapComponent";
const HouseDatailes = () => {
  const { HouseId } = useParams();
  const dispatch = useDispatch();
      const Houses = useSelector((state) => state.forSale);
      const HousesForSale = Houses.housesForSale;
   
  const house = Houses.housesForSale.filter(
    (house) => house.property_id === HouseId
  )[0];
      const lon = house.lon
      const lat = house.lat
      console.log(house)
  useEffect(() => {
    dispatch(fetchHousesForSale());
  }, []);
  return (
        <div className="w-screen h-full bg-gray-100 dark:bg-gray-800  flex flex-col overflow-hidden">
              <NAV_BAR color='#38bdf8' />
              <div className='houseLocation w-full h-96 lg:px-0 px-4'>
               <MapComponent lat={lat} lon={lon}/>
              </div>    
      <div className="w-full h-full  flex justify-start  flex-col overflow-hidden lg:px-12 px-4  ">
             <div className="content w-full h-auto flex md:flex-row flex-col justify-start items-start lg:px-12 px-6 ">
                          <div className="leftSide md:w-[80%] w-full h-auto mt-4 justify-start items-start ">
                                <div className='Content-image w-full h-96 border-2 border-red-300'></div>
                          </div>
                          <div className="rightSide md:w-[20%] flex w-full h-auto lg:ml-2 ml-0 mt-4 flex-col">
                                <SearchHouses />
                          </div>
            </div>
      </div>
      <MoveUp />
      <Footer />
    </div>
  );
};

export default HouseDatailes;
