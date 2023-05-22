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
import Floor_one from '../assets/images/floor/01floor.jpg';
import Floor_tow from '../assets/images/floor/02floor.jpg';
import Floor_three from '../assets/images/floor/03floor.jpg';
import HOUSEvideo from '../assets/videos/Gray Neutral Minimalist Animated Open House Real Estate Video.mp4'
import Agent from '../assets/images/agentPhoto/01.jpg'
import comment_one from '../assets/images/agentPhoto/002.jpg'
import comment_tow from '../assets/images/agentPhoto/003.jpg'
import comment_three from '../assets/images/agentPhoto/004.jpg'
import { AiTwotoneStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { FaReply } from 'react-icons/fa'
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
      <div className="all-content w-full h-full  flex justify-start  flex-col overflow-hidden lg:px-12 px-4  ">
             <div className="content w-full h-auto flex lg:flex-row flex-col justify-start items-start lg:px-12 px-6 ">
                          <div className="leftSide lg:w-[80%] w-full h-auto mt-4 justify-start items-start ">
            <div className='Content-image w-full lg:h-[400] h-auto '>
              <img src={house.photo} alt={house.id} className="w-full h-full "/>
            </div>
            <div className="descriptions w-full h-auto flex  lg:flex-row flex-col mt-8 p-2">
              <div className="info lg:w-[20%] w-full h-full flex  flex-col mr-12 ">
                <h4 className="w-full h-10 font-body border-b-2 dark:text-white  border-gray-400 flex justify-start items-center text-[20px]">Quick Summary</h4>
                <div className=" info-content w-full h-full flex mt-2">
                  <div className="w-[50%] h-full text-start font-body dark:text-gray-200 text-gray-600 font-bold text-[14px] capitalize">
                    <p className="w-full h-10 flex justify-start items-center  ">location</p>
                    <p className="w-full h-10 flex justify-start items-center ">price</p>
                    <p className="w-full h-10 flex justify-start items-center ">Property Type:</p>
                    <p className="w-full h-10 flex justify-start items-center ">Status</p>
                    <p className="w-full h-10 flex justify-start items-center ">Area</p>
                    <p className="w-full h-10 flex justify-start items-center ">Beds</p>
                    <p className="w-full h-10 flex justify-start items-center ">Baths</p>
                  </div>
                  <div className="w-[50%] h-full  text-end font-body text-gray-500 dark:text-gray-300 text-[13px] capitalize">
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
              <div className="Dis lg:w-[80%] w-full h-full flex flex-col ">
                <h4 className="w-full h-10 font-body border-b-1 flex justify-start items-center text-[20px] dark:text-white border-b-2 border-gray-400 ">Property Description</h4>
                <p className=" w-full h-auto mt-4 text-gray-400 dark:text-gray-300 font-links flex lg:justify-start justify-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum,
                  bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod
                  placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris.
                  Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, nec consequat orci.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis
                  dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis. Cras at tincidunt magna. Mauris aliquam sem sit
                  amet dapibus venenatis. Sed metus orci
                  , tincidunt sed fermentum non, ornare non quam. Aenean nec turpis at libero lobortis pretium.</p>
                <div>
                  <div className="Floor-Plans lg:w-[80%] w-full h-full flex flex-col mt-4 ">
                    <h4 className="w-full h-10 font-body border-b-1 flex justify-start items-center text-[20px] dark:text-white border-b-2 border-gray-400 ">Floor Plans</h4> 
                    <div className="w-full h-auto flex  gap-4 lg:flex-row flex-col mt-4 ">
                     <img src={Floor_one} alt="floor_one"/>
                      <img src={Floor_tow} alt="Floor_tow"/>
                      <img src={Floor_three} alt="Floor_three" />
                    </div>
                  </div>
                  <div className="video-Plans w-full h-full flex flex-col mt-6 ">
                    <h4 className="w-full h-10 font-body border-b-1 flex justify-start items-center text-[20px] dark:text-white border-b-2 border-gray-400 ">House Video</h4> 
                    <video className="w-full h-auto  mt-4" preload="none" controls>
                      <source src={HOUSEvideo} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className='contact-agent w-full h-auto flex flex-col'>
              <h4 className="w-full h-10 font-body border-b-2 dark:text-white  border-gray-400 flex justify-start items-center text-[20px]">contact Agent</h4>
              <div className=" agent-content w-full h-full flex lg:flex-row  flex-col">
                <div className='agent-Datalist lg:w-[60%] w-full h-full flex lg:flex-row flex-col mt-4' >
                  <div className='agent-photo lg:w-[30%] w-full h-auto'>
                    < img src={Agent} alt="agent" className="w-full h-full" />
                  </div>
                  <div className="agent-datalist lg:w-[70%] w-full h-auto flex flex-col ml-4 lg:px-4 px-0">
                    <h6 className="w-full h-10 text-blue-title font-links text-[18px] mt-2">Robert Farley</h6>
                    <p className="w-full h-auto text-gray-400 text-[14px] font-body my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit
                      amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus.</p>
                    <div className="phone w-full h-10 flex justify-between items-center  ">
                      <p className="title-details text-gray-800 font-body text-[15px]  dark:text-gray-300 ">Phone:</p>
                      <p className="text-gray-600 font-links text-[15px]  dark:text-gray-400">(123) 456 789</p>
                    </div>
                    <div className="phone w-full h-10 flex justify-between items-center  ">
                      <p className="title-details text-gray-800 font-body text-[15px]  dark:text-gray-300">Mobile:</p>
                      <p className="text-gray-600 font-links text-[15px]  dark:text-gray-400">888 123 456 789</p>
                    </div>
                    <div className="phone w-full h-10 flex justify-between items-center  ">
                      <p className="title-details text-gray-800 font-body text-[15px]  dark:text-gray-300">Email:</p>
                      <p className="text-blue-title font-links text-[15px] ">john.doe@example.com</p>
                    </div>
                  </div>
                </div>
                <div className='agent-contact lg:w-[40%] w-full  h-auto mt-4'>
                  <form className="w-full h-auto flex flex-col px-4 mt-4">
                    <div className="w-full h-auto flex flex-col font-links ">
                      <label className="w-full h-4 flex items-center justify-start mb-2  dark:text-gray-400">Your Name*</label>
                      <input type='text' name="username" className="w-full h-11 bg-gray-200 text-black border-none outline-none px-4"/>
                    </div>
                    <div className="w-full h-auto flex flex-col font-links mt-3">
                      <label className="w-full h-4 flex items-center justify-start mb-2  dark:text-gray-400">Your Email*</label>
                      <input type='text' name="username" className="w-full h-11 bg-gray-200 text-black border-none outline-none px-4"/>
                    </div>
                    <div className="w-full h-auto flex flex-col font-links mt-3">
                      <label className="w-full h-4 flex items-center justify-start mb-2  dark:text-gray-400">Your Message*</label>
                      <input type='text' name="username" className="w-full h-20 bg-gray-200 text-black border-none outline-none px-4"/>
                    </div>
                    <div className="button w-full h-20 flex justify-end items-center">
                      <button type="button " className="w-40 h-10 bg-blue-title text-white capitalize"> send a massage</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="Comments-container w-full h-auto flex mt-4 flex-col  ">
              <h4 className="w-full h-10 font-body border-b-1 flex justify-start items-center text-[20px] dark:text-white border-b-2 border-gray-400 ">Comments</h4>
              <div className="comment w-full h-auto flex gap-6  py-2 border-b-2 border-gray-400 lg:flex-row flex-col ">
                <div className="comment-photo lg:w-[10%] w-50% flex justify-center  h-auto">
                  <img className="w-full h-[30%]" src={comment_one} alt="agent"/>
                </div>
                <div className="comment-details lg:w-[80%] w-full flex flex-col ">
                  <h5 className="w-full h-10 flex justify-start items-center text-[18px] font-body capitalize dark:text-gray-200">Emy robbin</h5>
                  <div className="stars-date w-full h-10 flex justify-between items-center ">
                    <div className="stars w-[50%]  h-10 flex gap-2 mt-1 justify-start items-center ">
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                    </div>
                    <p className="w-[50%] h-10 flex justify-end items-center gap-2 text-[12px]  dark:text-gray-400"> <BsCalendarDate/> 12.05.2023</p>
                  </div>
                  <p className="w-full h-auto font-links text-[14px ] dark:text-gray-400 text-gray-500 mt-4 lg:justify-start justify-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, sem ut sollicitudin
                    consectetur, augue diam ornare massa, ac vehicula leo turpis eget purus. Nunc pellentesque vestibulum mauris, eget suscipit mauris imperdiet vel. Nulla et massa metus. Nam porttitor quam eget ante elementum consectetur. Aenean ac nisl et nulla
                    placerat suscipit eu a mauris. Curabitur quis augue condimentum, varius mi in, ultricies velit. Suspendisse potenti.
                  </p>
                  <p className="w-full h-10 flex justify-start items-center gap-2 text-[16px]  dark:text-gray-100"><FaReply className="text-blue-title"/> Replay</p>
                </div>
              </div>
              <div className="comment w-full h-auto flex gap-6  py-2  border-b-2 border-gray-400 lg:flex-row flex-col ">
                <div className="comment-photo lg:w-[10%] w-50% flex justify-center">
                  <img className="w-full h-[30%]" src={comment_tow} alt="agent"/>
                </div>
                <div className="comment-details lg:w-[80%] w-full ] flex flex-col ">
                  <h5 className="w-full h-10 flex justify-start items-center text-[18px] font-body capitalize dark:text-gray-200">John Doe</h5>
                  <div className="stars-date w-full h-10 flex justify-between items-center ">
                    <div className="stars w-[50%]  h-10 flex gap-2 mt-1 justify-start items-center ">
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiOutlineStar  />
                    </div>
                    <p className="w-[50%] h-10 flex justify-end items-center gap-2 text-[12px] dark:text-gray-400"> <BsCalendarDate/> 20.09.2022</p>
                  </div>
                  <p className="w-full h-auto font-links text-[14px ] text-gray-500 mt-4 lg:justify-start justify-center dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, sem ut sollicitudin
                    consectetur, augue diam ornare massa, ac vehicula leo turpis eget purus. Nunc pellentesque vestibulum mauris, eget suscipit mauris imperdiet vel. Nulla et massa metus. Nam porttitor quam eget ante elementum consectetur. Aenean ac nisl et nulla
                    placerat suscipit eu a mauris. Curabitur quis augue condimentum, varius mi in, ultricies velit. Suspendisse potenti.
                  </p>
                  <p className="w-full h-10 flex justify-start items-center gap-2 text-[16px]  my-4  dark:text-gray-100"><FaReply className="text-blue-title"/> Replay</p>
                </div>
              </div>
              <div className="comment w-full h-auto flex gap-6  py-2 mb-4 border-b-2 border-gray-400 lg:flex-row flex-col ">
                <div className="comment-photo lg:w-[10%] w-50% flex justify-center">
                  <img className="w-full h-[30%]" src={comment_three} alt="agent"/>
                </div>
                <div className="comment-details lg:w-[80%] w-full flex flex-col ">
                  <h5 className="w-full h-10 flex justify-start items-center text-[18px] font-body capitalize dark:text-gray-200">Catherine Brown</h5>
                  <div className="stars-date w-full h-10 flex justify-between items-center ">
                    <div className="stars w-[50%]  h-10 flex gap-2 mt-1 justify-start items-center ">
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiTwotoneStar className="text-blue-title" />
                      <AiOutlineStar  />
                      <AiOutlineStar  />
                    </div>
                    <p className="w-[50%] h-10 flex justify-end items-center gap-2 text-[12px]  dark:text-gray-400"> <BsCalendarDate/> 15.08.2020</p>
                  </div>
                  <p className="w-full h-auto font-links text-[14px ] text-gray-500 mt-4 lg:justify-start justify-center dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, sem ut sollicitudin
                    consectetur, augue diam ornare massa, ac vehicula leo turpis eget purus. Nunc pellentesque vestibulum mauris, eget suscipit mauris imperdiet vel. Nulla et massa metus. Nam porttitor quam eget ante elementum consectetur. Aenean ac nisl et nulla
                    placerat suscipit eu a mauris. Curabitur quis augue condimentum, varius mi in, ultricies velit. Suspendisse potenti.
                  </p>
                  <p className="w-full h-10 flex justify-start items-center gap-2 text-[16px]  dark:text-gray-100 "><FaReply className="text-blue-title"/> Replay</p>
                </div>
              </div>

            </div>
                          </div>
                          <div className="rightSide lg:w-[20%] flex w-full h-auto lg:ml-2 ml-0 mt-4 flex-col">
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
