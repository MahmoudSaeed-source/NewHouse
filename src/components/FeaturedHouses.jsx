import React ,{useRef} from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FeaturedHouses = () => {
    let imageOne = useRef()
    let imageTwo = useRef()
  return (
    <div className="w-full h-[550px] px-12 flex flex-col ">
      <h2 className="w-full text-start font-body text-[16px] text-blue underline ">
        Featured Houses
      </h2>
      <div className="w-full h-full  overflow-hidden  mt-4 relative ">
        <span className="w-8 h-8 bg-white text-blue hover:bg-blue hover:text-white cursor-pointer flex justify-center items-center absolute top-[50%] left-0">
          <AiOutlineArrowLeft size={25} />
        </span>
        <span className="w-8 h-8 bg-white text-blue hover:bg-blue hover:text-white cursor-pointer flex justify-center items-center absolute top-[50%] right-0">
          <AiOutlineArrowRight size={25} />
        </span>
        <div className="w-full h-full bg-features-One bg-cover flex justify-between items-center"></div>
        <div className="w-full h-full bg-features-two bg-cover"></div>
      </div>
    </div>
  );
}

export default FeaturedHouses