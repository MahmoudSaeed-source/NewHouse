import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NAV_BAR from '../components/NAV_BAR'
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'

const HouseDatailes = () => {
      const { HouseId } = useParams()
      const dispatch = useDispatch()
      const Houses = useSelector((state)=> state.forSale)
      const house = Houses.housesForSale.filter((house) => house.property_id === HouseId)[0];
      useEffect(() => {
            dispatch(fetchHousesForSale())
      },[])
      return (
            <div className='w-screen h-full bg-gray-200 dark:bg-black  flex flex-col '>
                  <NAV_BAR/>
                  {console.log(house)}
                  <div className='max-w-full h-full  flex justify-start  flex-col overflow-hidden'>
                        <div className='max-w-full h-[100Vh]  bg-hero-pattern  bg-center  bg-fixed'>
                        </div>
                        <div className='w-1/1  h-[1000px] mr-12 ml-12 mt-8 dark:bg-black  flex flex-col justify-start items-start overflow-hidden '>
                              <h4 className='font-body text-lg text-amber-500 underline capitalize'> {house.address_new.city}</h4>
                              <p className='font-body text-sm text-cyan-700 dark:text-gray-300 underline capitalize opacity-70 dark:opacity-100'> {house.address}</p>
                              <div className='w-full h-auto flex justify-between items -start '>
                                    <div>
                                          <div className=' w-[600px] h-[600px] border-4  dark:border-white border-cyan-800  mt-4'>
                                                      <img src= {house.photo} alt = {house.property_id} className = 'w-full h-2/3 '/>
                                          </div>
                                    </div>
                                    <div></div>
                              </div>
                            
                        </div>
              </div>
        </div>

  )
}

export default HouseDatailes