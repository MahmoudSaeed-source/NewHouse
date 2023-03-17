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
            <div className='HeroSectionWithSearch w-full h-[100vh] bg-white flex justify-center items-center px-14 bg-hero-pattern bg-no-repeat bg-cover bg-fixed'>
                <div className='serchSectin w-full lg:h-60 h-auto bg-white flex justify-center items-center px-4 relative opacity-70 py-6'>
                        <h2 className=' HeaderSerch lg:w-1/2 w-full h-12 flex justify-center items-center rounded-full bg-green-200 absolute lg:top-[-12%] top-[-8%] left-50 lg:text-lg text-[14px] text-bold '>THE BEST WAY TO FIND YOUR HOME</h2>
                    <div className='searchContent w-full h-full flex lg:flex-row flex-col gap-5 flex-wrap bg-white'>
                        <from className='w-full h-full flex items-center justify-center p-4 flex-wrap bg-white' onSubmit={handleSubmitForm}>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5 '
                                name='state' value={selectedValues.state}
                                onChange={handleDateForm}
                            >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100 ' >All State</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >New York</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Staten Island</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Brooklyn</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Bronx</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Jamaica</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Whitestone</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Manhattan</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Flushing</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Forest Hills</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Astoria</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Long Island City</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Richmond Hill</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Elmhurst</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Far Rockaway</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Bellerose</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >Ozone Park</option >
                            </select>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5 '
                                name="type" value={selectedValues.type}
                                onChange={handleDateForm}
                            >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >All Type</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >Condo</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >Single_family</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >Multi_family</option >
                            </select>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5  '
                                name='bedrooms' value={selectedValues.bedrooms}
                                onChange={handleDateForm}
                            >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >All BedRooms</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100 border-1' >1</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >2</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >3</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >4</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >5</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >6</option >
                            </select>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5 '
                                name='bathrooms' value={selectedValues.bathrooms}
                                onChange={handleDateForm}
                            >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center  bg-green-100' >All BathRooms</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >1</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >2</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >3</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >4</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >5</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center bg-green-100' >6</option >
                            </select>                      
                            <button type='submit' onClick={handleSubmitForm} className=' submit   lg:w-1/3 w-1/2 h-12 flex justify-center items-center rounded-full bg-green-200 absolute lg:bottom-[-11%]  bottom-[-8%] left-50 lg:text-lg text-[14px] text-bold '>Search Property</button>
                        </from>
                    </div>
                </div>
            </div>
            <div className="h-100 w-full flex justify-start items-center mt-8 ">
                <h2 className='w-full h-full px-12  text-amber-500  uppercase text-body flex  items-center  font-bold text-2xl'>  <BsHouseHeartFill size={40} className='mr-2' />houses for sale</h2>
            </div>
                {
                    Houses.isLoding && <ReactLoading type="spin" color="#e08c04" height={40} width={20} />
                }
            <div className='w-full h-[800px] overflow-auto m-5 p-0 flex justify-center items-center'>
                {!Houses.isLoding && filterHouses.length > 0  && (                 
                    <ul className='card-container dark:bg-black m-0 '>
                        {
                            filterHouses.map(house => (
                                house.photo && <li className='Card-content font-body lg:w-[30%] w-full lg:text-xl text-sm' key={house.property_id}><Card house={house}/></li>
                            ))
                        }
                    </ul>
                )}
                {!Houses.isLoding && filterHouses.length === 0 && (
          <p className="text-center text-xl mt-4">No matching houses found.</p>
        )}
            </div>
            <Footer/>
    </div>
  )
}

export default HousesForSale
