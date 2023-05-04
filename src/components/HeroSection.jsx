import React,{ useEffect ,useState} from 'react'
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'
import './Hero.css'
const HeroSection = () => {
  const dispatch = useDispatch()
  const Houses = useSelector((state) => state.forSale)
  const [selectedValues,setSelectedValues] = useState({
    state: 'All State',
    type: 'All Type',
    bedrooms: 'All BedRooms',
    bathrooms: 'All BathRooms',

  })
  const handleDateForm = (e) => {
    const fieldName = e.target.getAttribute('name');
    const { value: fieldValue } = e.target;
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }))
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(selectedValues)
  }
  const filterHouses = Houses.housesForSale.filter((house) => {
    return (house.prop_type.toLowerCase().includes(selectedValues.type.toLowerCase()) || selectedValues.type === 'All Type')
      && (house.address_new.city.toLowerCase().includes(selectedValues.state.toLowerCase()) || selectedValues.state === 'All State')
      && (house.beds.toString().toLowerCase().includes(selectedValues.bedrooms.toLowerCase()) || selectedValues.bedrooms === 'All BedRooms')
      && (selectedValues.bathrooms === 'All BathRooms' || house.baths.toString().toLowerCase().includes(selectedValues.bathrooms.toLowerCase()))

  })
  useEffect(() => {
    dispatch(fetchHousesForSale())
  },[])
  return (
    <div className="HeroSectionWithSearch w-full h-[100vh] bg-white flex justify-center items-center mt-[-100px]  bg-hero-pattern bg-no-repeat bg-cover bg-fixed ">
      <div
        className="w-full h-full flex justify-center items-center flex-col "
        style={{ backgroundColor: "#21b4f14d" }}
      >
        <h2 className="w-[full] h-24 text-white font-bold font-body md:text-[40px] text-[30px] capitalize md:mb-0 mb-4 ">
          Find Your Dream Home
        </h2>
        <p className="md:w-[50%] h-auto  w-full text-white font-bold font-body text-[18px] capitalize ">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.e
        </p>
      </div>
    </div>
  );
}

export default HeroSection