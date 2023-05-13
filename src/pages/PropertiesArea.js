import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams ,Link} from 'react-router-dom'
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import NAV_BAR from '../components/NAV_BAR'
import { BiChevronRight } from 'react-icons/bi'
import Map, { Marker,NavigationControl } from 'react-map-gl';
const PropertiesArea = () => {
  const { area } = useParams()
  const dispatch = useDispatch()
  const getHouses = useSelector((state) => state.forSale)
  const Houses = getHouses.housesForSale; 
  const getHousesFromParams = Houses.filter((house) => house.address_new.city === area)
  const lonArea = getHousesFromParams[0].address_new.lon;
  const latArea = getHousesFromParams[1].address_new.lat
 console.log(getHousesFromParams)
  useEffect(() => {
    dispatch(fetchHousesForSale())
 },[])
  return (
      <div className=" w-full h-auto flex justify-center items-center  flex-col  bg-gray-100 dark:bg-gray-800  ">
      <NAV_BAR color="#38bdf8" />
      <div className='map w-full h-[400px] lg:px-2 px-0 mt-4 '>
        <Map
          mapboxAccessToken='pk.eyJ1IjoiYWhtZWR0YWtlc2h5IiwiYSI6ImNsaG01YmRyZTE4ajUzcHAxcjNnZmltbnQifQ.E2JIABJLN4HJmHGi8A6Qqg'
          initialViewState={{
            longitude:  lonArea ,
            latitude:  latArea ,
            zoom: 10
          }}
          style={{ height: 400 }}
         className='w-full  shadow-md'
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker 
            longitude={lonArea}
            latitude=  {latArea}
          />
          <NavigationControl position = 'top-right'/>
        </Map>
      </div>
      <div className="content w-full h-auto flex md:flex-row flex-col  justify-start items-start lg:px-12 px-4">
        <div className="leftSide md:w-[80%] w-full h-auto mt-4 justify-start items-start ">
          <div className='w-full h-12 flex justify-start items-center text-[12px] font-links dark:text-gray-300 '>
            <Link className='ml-2' to='/'>Home</Link>
            <BiChevronRight className='mr-2 ' size={16} />
            <span>{area}</span>
          </div>
          <div className="h-[50px] w-full flex justify-start items-center  ">
            <h2 className="w-full h-full   text-blue-title  uppercase text-body flex  items-center py-2 border-b-2 border-gray-400 text-2xl">
              Properties Listing {area}
            </h2>
          </div>
           </div>
        <div className="rightSide md:w-[20%] flex w-full h-auto lg:ml-2 ml-0 mt-4 flex-col">
          <div className="h-[42px] w-full flex justify-start items-center mt-12   ">
            <h2 className="w-full h-full  text-blue-title  uppercase text-body flex  items-center py-7 border-b-2 border-gray-400 text-lg">
              List by Areas
            </h2>
            <div className=''></div>
          </div>
          </div>

        </div>
      </div>
   
  )
}

export default PropertiesArea