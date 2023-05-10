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
      <div className="contentArea w-full h-auto flex-warp flex flex-col lg:px-12 px-4 mt-4 ">
        <div className="w-full h-32 flex justify-start items-center flex-col">
          <h2 className="text-blue-title   text-[20px] w-full h-14 flex items-center justify-center font-body capitalize ">
            Properties by Area
          </h2>
          <h4 className="text-blue-300 text-[14px]   lg:w-[600px] w-full h-auto flex items-center justify-center font-body capitalize">
            Properties by Area Highlight the best of your properties by using
            the List Category shortcode. You can list categories, types, cities,
            areas and states of your choice.
          </h4>
        </div>
        <div className="Areas w-full h-full overflow-hidden shadow-lg p-2">
          <ul className="w-full h-full text-white flex justify-center items-center gap-2 flex-wrap ">
            {uniqueAreaHouses.map((area) => {
              // تصفية العناصر التي تحمل اسم "area"
              const filteredHouses = HousesForSale.filter(
                (house) => house.address_new.city === area
              );
              // حساب العدد باستخدام معيار length
              const count = filteredHouses.length;
              const areaPhoto = filteredHouses.map(
                (areaimage) => areaimage.photo
              );
              return (
                <li className="w-[350px] h-32 p-4  text-gray-400  flex justify-center items-center cursor-pointer ">
                  <>
                    <div className="w-[60%] h-full flex text-blue-title font-links justify-start items-center">
                      <img
                        className="w-full h-full"
                        src={areaPhoto[0]}
                        alt={area}
                        onLoad={() => console.log("Image loaded successfully")}
                        onError={() => (this.style.display = "none")}
                      />
                    </div>
                    <div className="w-[40%] h-full flex flex-col text-blue-title font-links justify-center items-center ml-2">
                      <h6 className="text-[13] font-bold">{area}</h6>
                      <h6>({count}) listings</h6>
                    </div>
                  </>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Properties_Area