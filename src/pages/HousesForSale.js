import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { PropagateLoader } from "react-spinners";
import { fetchHousesForSale } from "../app/features/forSale/forSale";
import { useDispatch, useSelector } from "react-redux";
import NAV_BAR from "../components/NAV_BAR";
import Footer from "../components/Footer";
const HousesForSale = () => {
  const dispatch = useDispatch();
  const Houses = useSelector((state) => state.forSale);
  const HousesForSale = Houses.housesForSale;
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = HousesForSale.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(HousesForSale.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  function handlePageChange(event) {
    setCurrentPage(Number(event.target.dataset.pageNumber));
    window.scrollTo(0, 0);
  }

  const [selectedValues, setSelectedValues] = useState({
    state: " State",
    type: " Type",
    bedrooms: " BedRooms",
    bathrooms: " BathRooms",
  });
  const handleDateForm = (e) => {
    const fieldName = e.target.getAttribute("name");
    const { value: fieldValue } = e.target;
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(selectedValues);
  };
  useEffect(() => {
    dispatch(fetchHousesForSale());
  }, []);
  const filterHouses = Houses.housesForSale.filter((house) => {
    return (
      (house.prop_type
        .toLowerCase()
        .includes(selectedValues.type.toLowerCase()) ||
        selectedValues.type === " Type") &&
      (house.address_new.city
        .toLowerCase()
        .includes(selectedValues.state.toLowerCase()) ||
        selectedValues.state === "State") &&
      (house.beds
        .toString()
        .toLowerCase()
        .includes(selectedValues.bedrooms.toLowerCase()) ||
        selectedValues.bedrooms === " BedRooms") &&
      (selectedValues.bathrooms === "BathRooms" ||
        house.baths
          .toString()
          .toLowerCase()
          .includes(selectedValues.bathrooms.toLowerCase()))
    );
  });
    
  return (
    <div className=" w-full h-auto flex justify-center items-center  flex-col  bg-gray-100 dark:bg-gray-800  ">
      <NAV_BAR color='#38bdf8' />
      <div className="content w-full h-auto flex md:flex-row flex-col justify-start items-start lg:px-12 px-6 ">
        <div className="leftSide md:w-[80%] w-full h-auto mt-4 justify-center items-center">
          <div className="h-[85px] w-full flex justify-start items-center  ">
            <h2 className="w-full h-full lg:px-12 px-4  text-blue-title  uppercase text-body flex  items-center py-6 border-b-2 border-gray-400  text-2xl">
              Properties Listing
            </h2>
          </div>
           {Houses.isLoding && (
            <div className="w-full h-auto flex justify-center items-center py-24"><PropagateLoader color="#38bdf8" /></div>
          )}
          <div className="w-full h-auto overflow-auto lg:m-5 m-0 p-0 flex justify-center items-center flex-col ">
            {!Houses.isLoding && filterHouses.length > 0 && (
              <ul className="card-container bg-gray-100 dark:bg-gray-800 m-0 h-auto ">
                {filterHouses.map(
                  (house) =>
                    house.photo && (
                      <li
                        className="Card-content font-body lg:w-[30%] w-full h-auto lg:text-xl text-sm"
                        key={house.property_id}
                      >
                        <Card house={house} />
                      </li>
                    )
                )}
              </ul>
            )}
            {!Houses.isLoding && filterHouses.length === 0 && (
              <p className="text-center text-xl mt-4">
                No matching houses found.
              </p>
            )}
            <div className="w-full h-10 text-[14px] font-body flex  justify-center items-center">
              {pageNumbers.map((pageNumber) => (
                <button
                  className={`6 md:w-4 w-3 md:h-4 h-2 p-3 lg:mr-2 mr-1  md:text-[12px] text-[10px] rounded-full flex justify-center items-center bg-gray-500 cursor-pointer hover:bg-gray-400  hover:text-blue-title active:text-blue-hover ${
                    currentPage === pageNumber && "bg-blue-title text-blue-title"
                  }`}
                  key={pageNumber}
                  data-page-number={pageNumber}
                  onClick={handlePageChange}
                  disabled={currentPage === pageNumber}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div> 
        </div>
        <div className="rightSide md:w-[20%] flex w-full h-auto lg:ml-2 ml-0 mt-4 flex-col">
          <div className="h-[85px] w-full flex justify-start items-center   ">
            <h2 className="w-full h-full  text-blue-title  uppercase text-body flex  items-center py-7 border-b-2 border-gray-400 text-lg">
              Search Properties
            </h2>
            </div>
            <div className="search w-full h-auto mt-7 lg:px-4 px-0 pb-10">
              <form className="h-auto">
                <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold px-2 cursor-pointer">
                  <select  name='state' value={selectedValues.state} className="w-full h-full  shadow-md bg-gray-200 border-none outline-none cursor-pointer px-3" onChange={handleDateForm}>
                    <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">State</option>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >New York</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Staten Island</option>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Brooklyn</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Bronx</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Jamaica</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Whitestone</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Manhattan</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Flushing</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Forest Hills</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Astoria</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Long Island City</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Richmond Hill</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Elmhurst</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Far Rockaway</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Bellerose</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Ozone Park</option >
                  </select>
                </div> 
                <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold px-2">
                  <select name="type" value={selectedValues.type} className="w-full h-auto py-3 shadow-md bg-gray-200 border-none outline-none px-3" onChange={handleDateForm}>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' > Type</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Condo</option>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Single_family</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Multi_family</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >Apartment</option >
                  </select>
                </div> 
                <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold px-2">
                  <select   name='bathrooms' value={selectedValues.bathrooms} className="w-full h-auto py-3 shadow-md bg-gray-200 border-none outline-none px-3" onChange={handleDateForm}>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >All BathRooms</option>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >1</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >2</option>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >3</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >4</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >5</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >6</option >
                  </select>
                </div> 
                <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold px-2">
                  <select    name='bedrooms' value={selectedValues.bedrooms} className="w-full h-auto py-3 shadow-md bg-gray-200 border-none outline-none px-3" onChange={handleDateForm}>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' > BedRooms</option>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400 ' >1</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >2</option>
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >3</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >4</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400' >5</option >
                    <option className='w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400'  >6</option >
                  </select>
                </div> 
 <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold px-2">
  <button className="w-full h-10 text-white px-6 bg-blue-title hover:bg-blue-hover" onClick={handleSubmitForm}>
    Search Now
  </button>
 </div>

              </form>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HousesForSale;
