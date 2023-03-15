import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NAV_BAR from '../components/NAV_BAR'
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'

const HouseDatailes = () => {
      const { HouseId } = useParams()
      const dispatch = useDispatch()
      const Houses = useSelector((state)=> state.forSale)
      const houseFromId = Houses.housesForSale.filter((house) => house.property_id === HouseId)
      useEffect(() => {
            dispatch(fetchHousesForSale())
      },[])
      return (
            <div className='w-screen h-screen dark:bg-black  flex flex-col '>
            <NAV_BAR/>
                  {console.log(houseFromId)}
                  <img src={houseFromId[0].photo} alt='image'/>
        </div>

  )
}

export default HouseDatailes