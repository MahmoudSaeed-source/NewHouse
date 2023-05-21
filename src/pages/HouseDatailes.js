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
  console.log(house);
      const lon = house.lon
      const lat = house.lat
      console.log(house)
  useEffect(() => {
    dispatch(fetchHousesForSale());
  }, []);
  return (
        <div className="w-screen h-full bg-gray-100 dark:bg-gray-800  flex flex-col overflow-hidden">
              <NAV_BAR color='#38bdf8' />
              <div className='houseLocation w-full h-[400px] lg:px-2 px-4 mt-2'>
               <MapComponent lat={lat} lon={lon}/>
              </div>    
      <div className="w-full h-full  flex justify-start  flex-col overflow-hidden lg:px-12 px-4  ">
             <div className="content w-full h-auto flex md:flex-row flex-col justify-start items-start lg:px-12 px-6 ">
                          <div className="leftSide md:w-[80%] w-full h-auto mt-4 justify-start items-start ">
            <div className='Content-image w-full lg:h-[400] h-auto '>
              <img src={house.photo} alt={house.id} className="w-full h-full "/>
            </div>
            <div className="descriptions w-full h-auto flex  lg-flex-row mt-8 p-2">
              <div className="info w-[20%] h-full flex  flex-col mr-12 ">
                <h4 className="w-full h-10 font-body border-b-2 border-gray-400 flex justify-start items-center text-[20px]">Quick Summary</h4>
                <div className=" info-content w-full h-full flex">
                  <div className="w-[50%] h-full text-start font-body text-gray-600 font-bold text-[14px] capitalize">
                    <p className="w-full h-10 flex justify-start items-center  ">location</p>
                    <p className="w-full h-10 flex justify-start items-center ">price</p>
                    <p className="w-full h-10 flex justify-start items-center ">Property Type:</p>
                    <p className="w-full h-10 flex justify-start items-center ">Status</p>
                    <p className="w-full h-10 flex justify-start items-center ">Area</p>
                    <p className="w-full h-10 flex justify-start items-center ">Beds</p>
                    <p className="w-full h-10 flex justify-start items-center ">Baths</p>
                  </div>
                  <div className="w-[50%] h-full  text-end font-body text-gray-500 text-[13px] capitalize">
                    <p className="w-full h-10 flex justify-end items-center  ">{house.address_new.city}</p>
                    <p className=" w-full h-10 flex justify-center items-center  text-white bg-blue-hover rounded-lg text-center">{house.price}</p>
                    <p className="w-full h-10 flex justify-end items-center ">{house.prop_type}</p>
                    <p className="w-full h-10 flex justify-end items-center ">{house.prop_status}</p>
                    <p className="w-full h-10 flex justify-end items-center ">{house.sqft_raw}</p>
                    <p className="w-full h-10 flex justify-end items-center ">{house.beds}</p>
                    <p className="w-full h-10 flex justify-end items-center ">{house.baths}</p>
                  </div>
                </div>
              </div>
              <div className="Dis w-[80%] h-full flex flex-col ">
                <h4 className="w-full h-10 font-body border-b-1 flex justify-start items-center text-[20px]">Property Description</h4>
                <div>

                   
                </div>
              </div>
            </div>
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
