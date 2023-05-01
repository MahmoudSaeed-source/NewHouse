import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialPinterest } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const AgentCard = ({agent}) => {
  return (
<<<<<<< Updated upstream
    <div className="card-content w-80 h-[410px] bg-white flex shadow-lg shadow-blue-100 flex-col ">
      <div className="header-card w-full flex h-[30%] px-4">
        <div className="phot-content w-[40%] h-full  ">
          <img
            src={agent.photo.href}
            alt={agent.first_name}
            className="w-full h-full "
          />
        </div>
        <div className="agent-name-title w-[60%] h-full py-8 px-2 flex justify-start items-center flex-col">
          <h4 className="w-full h-[60%] text-gray-600 font-body capitalize text-[16px] text-start">
            {agent.full_name}
          </h4>
          <h6 className="w-full h-[40%] text-blue-200 font-body capitalize text-[12px] text-start">
            {agent.title}
          </h6>
        </div>
      </div>
      <div className="description w-full h-auto py-2 text-gray-400 font-title justify-start items-start overflow-hidden ">
        <p className="w-full h-full overflew-hidden px-4 font-title text-[13px] text-start">
          {agent.description.slice(0, 205)}.
        </p>
      </div>
      <div className="agent-inf w-full h-14 text-[14] flex flex-col justify-start items-center px-4 py-2">
        <h6 className="w-full h-4 text-gray-500 font-title text-[13px] text-start mb-2">
          <span className=" text-blue-title text-[13px] mr-4">type : </span>
          {agent.types}
        </h6>
        <h6 className="w-full h-4 text-gray-500 font-title text-[13px] text-start">
          <span className=" text-blue-title">agent-languages</span> :
          {agent.user_languages.join("-")}
        </h6>
      </div>
      <div className="agent-rating w-full h-6 px-4 justify-start ">
        {agent.agent_rating <= 0 && (
          <span className=" text-blue-title  flex text-[13px] justify-start items-center">
            agent_rating :
            <AiFillStar className="text-orange-500 ml-2" />
          </span>
        )}
        {agent.agent_rating === 1 && (
          <span className=" text-blue-title  flex text-[13px] justify-start items-center">
            agent_rating :
            <AiFillStar className="text-orange-500 ml-2" />
          </span>
        )}
        {agent.agent_rating === 2 && (
          <span className=" text-blue-title  flex text-[13px] justify-start items-center">
            agent_rating :
            <AiFillStar className="text-orange-500 ml-2" />
            <AiFillStar className="text-orange-500" />
          </span>
        )}
        {agent.agent_rating === 3 && (
          <span className=" text-blue-title  flex text-[13px] justify-start items-center">
            agent_rating :
            <AiFillStar className="text-orange-500 ml-2" />
            <AiFillStar className="text-orange-500" />
            <AiFillStar className="text-orange-500" />
          </span>
        )}
        {agent.agent_rating === 4 && (
          <span className=" text-blue-title  flex text-[13px] justify-start items-center">
            agent_rating :
            <AiFillStar className="text-orange-500 ml-2" />
            <AiFillStar className="text-orange-500" />
            <AiFillStar className="text-orange-500" />
            <AiFillStar className="text-orange-500" />
          </span>
        )}
        {agent.agent_rating === 5 && (
          <span className=" text-blue-title  flex text-[13px] justify-start items-center">
            agent_rating :
            <AiFillStar className="text-orange-500 ml-2" />
            <AiFillStar className="text-orange-500" />
            <AiFillStar className="text-orange-500" />
            <AiFillStar className="text-orange-500" />
            <AiFillStar className="text-orange-500" />
          </span>
        )}
      </div>
      <div className="agent-contacted w-full h-12 flex px-4 mt-4  justify-start items-center">
        <span className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2 pointer">
          <FiFacebook className="text-gray-500" />
        </span>
        <span className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2 pointer">
          <SlSocialTwitter className="text-gray-500" />
        </span>
        <span className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2 pointer">
          <AiOutlineInstagram className="text-gray-500" />
        </span>
        <span className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2 pointer">
          <TiSocialPinterest className="text-gray-500" />
        </span>
        <span className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2 pointer">
          <SlSocialLinkedin size={15} className="text-gray-500" />
        </span>
        <span className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center ml-12 pointer">
          <BsTelephone size={15} className="text-gray-500" />
        </span>
        <span className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center ml-2 pointer">
          <AiOutlineMail size={15} className="text-gray-500" />
        </span>
=======
    <div className="CardAgent w-[350px] h-[450px] bg-white border-2 shadow-md shadow-gray-200 ">
      <div className="photo-container  w-full h-[50%]    ">
        <img src={agent.photo.href} alt={agent.name}  className='w-full h-full '/>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default AgentCard