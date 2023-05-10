import React, { useEffect } from "react";
import { fetchHousesForSale } from "../app/features/forSale/forSale";
import { useDispatch, useSelector } from "react-redux";
const Properties_Area = () => {
   const Houses = useSelector((state) => state.forSale);
  const HousesForSale = Houses.housesForSale;
  const dispatch = useDispatch();
  const housesCity = HousesForSale.map((house) => house.address_new.city);
  const uniqueAreaHouses = Array.from(new Set(housesCity));
  useEffect(() => {
    dispatch(fetchHousesForSale());
  }, []);
  return (
    <>
      <div className="contentArea w-full h-96 flex flex-col lg:px-12 px-4">
        <h2 className="title w-full h-10 overflow-hidden flex justify-center items-center">
          Properties_Area
        </h2>
        <div className="Areas w-full h-full overflow-hidden">
          <ul className="w-full h-full text-white flex justify-start items-center gap-2 flex-wrap ">

            {uniqueAreaHouses.map(area => (
              <li className="w-auto h-auto p-4 bg-blue-hover text-white ">{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Properties_Area