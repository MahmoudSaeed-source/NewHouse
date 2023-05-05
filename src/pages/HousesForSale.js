import React,{ useEffect ,useState} from 'react'
import Card from '../components/Card'
import { BsHouseHeartFill } from 'react-icons/bs'
import ReactLoading from 'react-loading';
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'
import NAV_BAR from '../components/NAV_BAR';
import Footer from '../components/Footer'
const HousesForSale = () => {
    
    const dispatch = useDispatch()
    const Houses = useSelector((state) => state.forSale)
    const [selectedValues,setSelectedValues] = useState({
        state: 'All State',
        type: 'All Type',
        bedrooms:'All BedRooms',
        bathrooms:'All BathRooms',
      
    })
    const handleDateForm = (e) => {
        const fieldName = e.target.getAttribute('name');  
        const { value: fieldValue } = e.target;
        setSelectedValues((prevValues)=> ({
            ...prevValues,
            [fieldName]: fieldValue,
        }))
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(selectedValues)
    }
    useEffect(() => {
        dispatch(fetchHousesForSale()) 
    },[])
    const filterHouses = Houses.housesForSale.filter((house) => {
        return (house.prop_type.toLowerCase().includes(selectedValues.type.toLowerCase()) || selectedValues.type === 'All Type')
            && (house.address_new.city.toLowerCase().includes(selectedValues.state.toLowerCase()) || selectedValues.state === 'All State')
            && (house.beds.toString().toLowerCase().includes(selectedValues.bedrooms.toLowerCase()) || selectedValues.bedrooms ==='All BedRooms')
            && (selectedValues.bathrooms === 'All BathRooms' || house.baths.toString().toLowerCase().includes(selectedValues.bathrooms.toLowerCase()))
   
    } )
    return (
      
        <div className=' w-s h-auto flex justify-center items-center  flex-col  bg-gray-200 dark:bg-black'>
            <NAV_BAR />              
        
            <div className="content w-full h-auto flex md:flex-row flex-col justify-start items-start ">
                <div className="leftSide w-[70%] h-auto mt-4">
                    <div className="h-100 w-full flex justify-start items-center  ">
                        <h2 className='w-full h-full px-12  text-blue-title  uppercase text-body flex  items-center py-6 border-b-2 border-gray-400  text-2xl'> Properties Listing</h2>
                    </div>
                    {
                        Houses.isLoding && <ReactLoading type="spin" color="#e08c04" height={40} width={20} />
                    }
                    <div className='w-full h-auto overflow-auto m-5 p-0 flex justify-center items-center'>
                        {!Houses.isLoding && filterHouses.length > 0 && (
                            <ul className='card-container dark:bg-black m-0 '>
                                {
                                    filterHouses.map(house => (
                                        house.photo && <li className='Card-content font-body lg:w-[30%] w-full h-auto lg:text-xl text-sm' key={house.property_id}><Card house={house} /></li>
                                    ))
                                }
                            </ul>
                        )}
                        {!Houses.isLoding && filterHouses.length === 0 && (
                            <p className="text-center text-xl mt-4">No matching houses found.</p>
                        )}
                    </div>
                </div>
                <div className="rightSide w-[30%] h-auto border-2 border-red-300 mt-4">
                    <h2>right side</h2>
                </div>
            </div>
       
      
            <Footer/>
    </div>
  )
}

export default HousesForSale
