import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Image from 'react-image';
import NAV_BAR from '../components/NAV_BAR'
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'
import Footer from '../components/Footer'

const HouseDatailes = () => {
      const { HouseId } = useParams()
      const dispatch = useDispatch()
      const Houses = useSelector((state)=> state.forSale)
      const house = Houses.housesForSale.filter((house) => house.property_id === HouseId)[0];
      const sliderImages = [
            '../assets/images/sliderImages/1.jpg',
            '../assets/images/sliderImages/2.jpg',
            '../assets/images/sliderImages/3.jpg',
            '../assets/images/sliderImages/4.jpg',
            '../assets/images/sliderImages/5.jpg',
            '../assets/images/sliderImages/6.jpg',
            '../assets/images/sliderImages/7.png',
            '../assets/images/sliderImages/9.jpg',
            '../assets/images/sliderImages/10.jpg'
      ];
      useEffect(() => {
            dispatch(fetchHousesForSale())
      },[])
      return (
            <div className='w-screen h-full bg-gray-200 dark:bg-black  flex flex-col '>
                  <NAV_BAR/>
                  {console.log(house)}
                  <div className='max-w-full h-full  flex justify-start  flex-col overflow-hidden'>
                        <div className='max-w-full lg:h-[80Vh] h-[60vh] bg-hero-pattern  bg-center  bg-fixed'>
                        </div>
                        <div className='max-w-full  lg:h-[400px] h-auto lg:mr-12 lg:ml-12 mr-0 ml-0 mt-8 dark:bg-black  flex flex-col justify-start items-start overflow-hidden '>
                              <h4 className='font-body text-lg text-amber-500 underline capitalize'> {house.address_new.city}</h4>
                              <p className='font-body text-sm text-cyan-700 dark:text-gray-300 underline capitalize opacity-70 dark:opacity-100'> {house.address}</p>
                              <div className='w-full h-auto flex justify-between items -start lg:flex-row flex-col   '>
                                    <div className='  discretion lg:w-full w-full  h-[600px] border-4  dark:border-white    mt-4 flex justify-between lg:flex-row flex-col  lg:order-1 order-2 '>
                                          <div className='lg:w-[240px] w-full border-2 bg-cyan-700 pb-4 text-gray-300  font-body dark:bg-black font-body    ' >
                                                <h2 className='text-[16px]  mt-2 mb-4  text-amber-500'>Property Detail</h2>
                                                <div className='w-full  h-auto flex lg:justify-start items-start px-2  justify-center   '>
                                                      <div className='lg:mr-4 mr-10 lg:text-sm text-lg text-gray-300 overflow-hidden'>
                                                            <p className='text-right'>Type</p>
                                                            <p className='text-right'>Status</p>
                                                            <p className='text-right'>Location</p>
                                                            <p className='text-right'>city</p>
                                                            <p className='text-right'>Price</p>
                                                            <p className='text-right'>Area (sqft)</p>
                                                            <p className='text-right'>Bedrooms</p>
                                                            <p className='text-right'>Bathrooms</p>
                                                            <p className='text-right'>Lot size</p>
                                                            <p className='text-right text-sm'>construction</p>
                                                          
                                                      </div>
                                                      <div className='lg:text-sm text-lg text-gray-300 '>
                                                            <p>{house.prop_type}</p>
                                                            <p>{house.prop_status}</p>
                                                            <p>{house.address_new.city}</p>
                                                            <p>{house.address_new.state}</p>
                                                            <p>{house.price}</p>
                                                            <p>{house.sqft}</p>
                                                            <p>{house.beds}</p>
                                                            <p>{house.baths}</p>
                                                            <p>{house.lot_size}</p>
                                                            <p className=''>{house.is_new_construction ? 'new' : 'old'}</p>
                                                      </div>
                                                </div>

                                          </div>
                                          <div className= 'w-full flex flex-col  h-full  pl-4 font-body' >
                                                <h2 className='text-[16px]  mt-2 mb-4 text-amber-500'>Property Description</h2>
                                                <p className='text-body text-sm text-gray-500 '>
                                                      Classic 60’s ranch living. House has hardwood floors and hard coat plaster walls and ceilings in good condition. Intimate backyard for
                                                      private gatherings. Full basement leaves plenty of room for expanding living space if you so desire. An antique “player piano” and a large
                                                      chest freezer will be included in
                                                      the sale. This location is close to major highways, California University and California Technology and Business Park.
                                                </p>
                                        </div>
                                       
                                    </div>
                                    <div className=' lg:w-full  h-full border-4  dark:border-white border-cyan-800  mt-4 lg:order-2 order-1'>
                                          <img src={house.photo} alt={house.property_id} className='w-full h-2/3 ' />
                                          <div className='w-full h-1/3 flex  '>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer/>
        </div>

  )
}

export default HouseDatailes