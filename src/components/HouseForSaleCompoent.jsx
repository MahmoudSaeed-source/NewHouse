import './houseForSale.css'
import React,{ useEffect } from 'react'
import Card from './Card'
import ReactLoading from 'react-loading';
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai'
const HouseForSaleCompoent = ( ) => {
      
      const dispatch = useDispatch()
      const Houses = useSelector((state) => state.forSale)
      useEffect(() => {
            dispatch(fetchHousesForSale())
      },[])

      return (

            <div className=' w-full h-auto flex justify-start items-start lg:mt-4 mt-12 flex-col dark:bg-black lg:mx-12 border-2'>
              
                  <h2 className='text-amber-500 text-2xl w-full h-14 flex items-start font-body capitalize underline' >
                        Our Featured Exclusive For Sale
                        {
                              Houses.isLoding && <ReactLoading type="spin" color="#e08c04" height={20} width={20} />
                        }

                  </h2>
                  <div className='w-full flex justify-center items-center dark:bg-black m-0 p-0 flex-col'>
                        {!Houses.isLoding && Houses.housesForSale.length && (
                              <ul className='card-container dark:bg-black relative '>
                                    {
                                          Houses.housesForSale.slice(0,6).map(house => (
                                                
                                                house.photo &&       
                                                      <li className='Card-content font-body lg:w-1/2 w-full lg:text-xl text-sm' key={house.property_id}><Card house={house} /></li>     
                                          ))
                                    }
                              </ul>
                        )}
                        <h2 className=' text-amber-500 w-full h-11 flex justify-end items-start  font-body text-lg font-bold px-12'><Link to='/HousesForSale'>Show more</Link>
                              <AiOutlineArrowRight size={2} className='flex justify-start items-center h-8 w-6 text-sm mx-1' /></h2>
                  </div>
            </div>
      )
}

export default HouseForSaleCompoent