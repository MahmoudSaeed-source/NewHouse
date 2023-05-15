import React,{useEffect,useState} from 'react'
import { fetchHousesForSale } from "../app/features/forSale/forSale";
import { useDispatch,useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
const SearchHouses = () => {
   const dispatch = useDispatch();
   const Houses = useSelector((state) => state.forSale);
   const HousesForSale = Houses.housesForSale;
  const [FormSearchHouses,setFormSearchHouses] = useState([]);
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
        const filterHouses = HousesForSale.filter((house) => {
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
              // eslint-disable-next-line no-mixed-operators
              selectedValues.bedrooms === " BedRooms") &&
            (selectedValues.bathrooms === "BathRooms" ||
              house.baths
                .toString()
                .toLowerCase()
                .includes(selectedValues.bathrooms.toLowerCase()))
          );
        });
        setFormSearchHouses(filterHouses);
        console.log(FormSearchHouses);
      };
      useEffect(() => {
        dispatch(fetchHousesForSale());
      }, []);
  return (
    <>
      <div className="h-[85px] w-full flex justify-start items-center   ">
        <h2 className="w-full h-full  text-blue-title  uppercase text-body flex  items-center py-7 border-b-2 border-gray-400 text-lg">
          Search Properties
        </h2>
      </div>
      <div className="search w-full h-auto mt-7 lg:px-2 px-0 pb-10">
        <form className="h-auto">
          <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold cursor-pointer">
            <select
              name="state"
              value={selectedValues.state}
              className="w-full h-full  shadow-md bg-gray-200 border-none outline-none cursor-pointer px-3"
              onChange={handleDateForm}
            >
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                State
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                New York
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Staten Island
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Brooklyn
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Bronx
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Jamaica
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Whitestone
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Manhattan
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Flushing
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Forest Hills
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Astoria
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Long Island City
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Richmond Hill
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Elmhurst
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Far Rockaway
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Bellerose
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Ozone Park
              </option>
            </select>
          </div>
          <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold">
            <select
              name="type"
              value={selectedValues.type}
              className="w-full h-auto py-3 shadow-md bg-gray-200 border-none outline-none px-3"
              onChange={handleDateForm}
            >
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                {" "}
                Type
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Condo
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Single_family
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Multi_family
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                Apartment
              </option>
            </select>
          </div>
          <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold ">
            <select
              name="bathrooms"
              value={selectedValues.bathrooms}
              className="w-full h-auto py-3 shadow-md bg-gray-200 border-none outline-none px-3"
              onChange={handleDateForm}
            >
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                BathRooms
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                1
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                2
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                3
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                4
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                5
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                6
              </option>
            </select>
          </div>
          <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold ">
            <select
              name="bedrooms"
              value={selectedValues.bedrooms}
              className="w-full h-auto py-3 shadow-md bg-gray-200 border-none outline-none px-3"
              onChange={handleDateForm}
            >
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                {" "}
                BedRooms
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400 ">
                1
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                2
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                3
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                4
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                5
              </option>
              <option className="w-full h-auto  shadow-md px-3 bg-gray-200 border-none outline-none text-gray-400 cursor-pointer hover:bg-gray-400">
                6
              </option>
            </select>
          </div>
          <div className="form-group w-full h-[40px] mb-5 flex justify-center items-center text-[14px] font-body font-bold ">
            <button
              className="w-full h-10 text-white px-6 bg-blue-title hover:bg-blue-hover"
              onClick={handleSubmitForm}
            >
              Search Now
            </button>
          </div>
        </form>
      </div>
      <div className="Featured-Properties max-w-full h-auto flex flex-col lg:px-4 px-0 overflow-hidden">
        <div className="h-[20px] w-full flex justify-start items-center mb-4   ">
          <h2 className="w-full h-full  text-blue-title  uppercase text-body flex  items-center py-7 border-b-2 border-gray-400 text-lg">
            Featured Properties
          </h2>
        </div>
        <div className="houses w-full h-auto flex flex-col justify-start items-center">
          <ul className=" w-full flex-col  flex  justify-start items-center  ">
            {Houses.housesForSale.slice(133, 137).map(
              (house) =>
                house.photo && (
                  <li className="max-w-full h-auto my-2" key={house.property_id}>
                    <HomeCard house={house} />
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchHouses