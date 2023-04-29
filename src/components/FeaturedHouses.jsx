import React ,{useRef} from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FeaturedHouses = () => {
    let imageOne = useRef()
  let imageTwo = useRef()
  const HandelImagesrightArrow = () => {
    imageOne.current.style.width = '0'
    imageTwo.current.style.display = "flex";
    imageTwo.current.style.width = "100%";
  }
  const HandelImagesleftArrow = () => {
    imageTwo.current.style.width = "0";
    imageOne.current.style.width = "100%";
  }
  return (
    <div className="w-full h-[550px]  lg:px-12 px-0 flex flex-col my-4 ">
      <div className="w-full h-32 flex justify-center items-center flex-col">
        <h2 className="text-blue-title   text-[20px] w-full h-14 flex items-center justify-center font-body capitalize ">
          Featured properties
        </h2>
        <h4 className="text-blue-300 text-[14px]   lg:w-[600px] w-full h-auto flex items-center justify-center font-body capitalize">
          Here are two listings displayed with the featured property shortcode,
          which you can use when you have some special properties to present.
        </h4>
      </div>
      <div className="w-full h-full  overflow-hidden  mt-4 relative flex ">
        <span
          className="w-8 h-8 bg-white text-blue-title hover:bg-blue hover:text-white cursor-pointer flex justify-center items-center absolute top-[50%] left-0"
          onClick={HandelImagesrightArrow}
        >
          <AiOutlineArrowLeft size={25} />
        </span>
        <span
          className="w-8 h-8 bg-white text-blue-title hover:bg-blue hover:text-white cursor-pointer flex justify-center items-center absolute top-[50%] right-0"
          onClick={HandelImagesleftArrow}
        >
          <AiOutlineArrowRight size={25} />
        </span>
        <div
          className="w-full h-full bg-features-One bg-cover bg-center flex justify-between items-center transition-all linear duration-300"
          ref={imageOne}
        ></div>
        <div
          className="w-full h-full bg-features-two hidden  bg-cover bg-center  justify-between items-center transition-all linear duration-300 "
          ref={imageTwo}
        ></div>
      </div>
    </div>
  );
}

export default FeaturedHouses