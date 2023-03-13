import React,{ useEffect ,useState} from 'react'
import Card from '../components/Card'
import ReactLoading from 'react-loading';
import { fetchHousesForSale } from '../app/features/forSale/forSale'
import { useDispatch,useSelector } from 'react-redux'
import NAV_BAR from '../components/NAV_BAR';
const HousesForSale = () => {
    
    const dispatch = useDispatch()
    const Houses = useSelector((state) => state.forSale)
    const [SearchTram ,setSearchTram] = useState('')
    useEffect(() => {
        dispatch(fetchHousesForSale()) 
    },[])
    const filterHouses = Houses.housesForSale.filter((house) => house.prop_type.toLowerCase().includes(SearchTram.toLowerCase()) )
    return (
      
        <div className=' w-s h-auto flex justify-center items-center  flex-col dark:bg-black'>
            <NAV_BAR />              
            <div className='HeroSectionWithSearch w-full h-[100vh] bg-white flex justify-center items-center px-14 bg-hero-pattern bg-no-repeat bg-cover bg-fixed'>
                <div className='serchSectin w-full lg:h-60 h-auto bg-white flex justify-center items-center px-4 relative opacity-70 py-6'>
                        <h2 className=' HeaderSerch lg:w-1/2 w-full h-12 flex justify-center items-center rounded-full bg-green-200 absolute lg:top-[-12%] top-[-8%] left-50 lg:text-lg text-[14px] text-bold '>THE BEST WAY TO FIND YOUR HOME</h2>
                    <div className='searchContent w-full h-full flex lg:flex-row flex-col gap-5 flex-wrap bg-white'>
                        <from className='w-full h-full flex items-center justify-center p-4 flex-wrap bg-white'>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5 '>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center ' >All Locations</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' >New York</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option >
                            </select>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5 '>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center ' >All Locations</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' >New York</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option >
                            </select>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5 ' placeholder='All Locations'>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' >New York</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option >
                            </select>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5  '>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center ' >All Locations</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' >New York</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option >
                            </select>
                            <select className='w-60 h-12  mr-2 font-body text-lg border-2 outline-1 outline-slate-300 bg-white lg:mb-0 mb-5 '>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center ' >All Locations</option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' >New York</option >
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option>
                                <option className='w-full h-full font-body text-lg upperCAse border-2 flex justify-center items-center' ></option >
                            </select>
                         
                        </from>
                    </div>
                </div>
            </div>
            
                {
                    Houses.isLoding && <ReactLoading type="spin" color="#e08c04" height={40} width={20} />
                }
            <div className='w-full h-auto m-5 p-0 flex justify-center items-center'>
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
    </div>
  )
}

export default HousesForSale
// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';
// import ReactLoading from 'react-loading';
// import { fetchHousesForSale } from '../app/features/forSale/forSale';
// import { useDispatch, useSelector } from 'react-redux';
// import NAV_BAR from '../components/NAV_BAR';

// const HousesForSale = () => {
//   const dispatch = useDispatch();
//   const houses = useSelector((state) => state.forSale);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     dispatch(fetchHousesForSale());
//   }, []);

//   const filteredHouses = houses.housesForSale.filter((house) =>
//     house.property_id.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="w-s h-auto flex justify-center items-center  flex-col dark:bg-black">
//       <NAV_BAR />
//       <div className="w-full h-44 flex justify-center items-center">
//         <input
//           type="text"
//           className="w-1/2 h-10 border-2 rounded-xl bg-black dark:bg-white text-white dark:text-black px-4"
//           placeholder="Search For House"
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       {houses.isLoding && <ReactLoading type="spin" color="#e08c04" height={40} width={20} />}
//       <div>
//         {!houses.isLoding && filteredHouses.length > 0 && (
//           <ul className="card-container dark:bg-black ">
//             {filteredHouses.map((house) => house.photo && <Card house={house} key={house.property_id} />)}
//           </ul>
//         )}
//         {!houses.isLoding && filteredHouses.length === 0 && (
//           <p className="text-center text-xl mt-4">No matching houses found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HousesForSale;
