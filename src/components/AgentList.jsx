import React,{ useEffect } from 'react'
import ReactLoading from 'react-loading';
import { fetchAgentList } from '../app/features/agent/Agent'
import { useDispatch,useSelector } from 'react-redux';
import AgentCard from '../components/AgentCard';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const AgentList = () => {
    const dispatch = useDispatch()
    const agentListSelector = useSelector((state) => state.agentList)
    useEffect(() => {
    dispatch(fetchAgentList())
},[])
  return (
    <div className="w-full h-auto bg-bull-300 lg:mr-12 mr-0 lg:ml-12 ml-0 ">
      <div className="w-full h-14 flex justify-between items-center">
        <h2 className="text-blue-title text-lg w-full h-14 flex items-start font-body capitalize underline">
          our Best Agent
        </h2>
        <h2 className=" text-blue-title w-full h-11 flex justify-end items-start  font-body text-[14px] font-bold lg:px-12 px-2">
          <Link to="/HousesForRent">All Properties</Link>
          <MdOutlineKeyboardDoubleArrowRight
            size={25}
            className="text-blue-title mr-2"
          />
        </h2>
      </div>

      <div className="w-full h-auto flex lg:justify-center justify-center lg-mx-12 lg:items-center  items-center m-0 p-0 flex-col">
        {agentListSelector.loading && (
          <ReactLoading type="spin" color="#e08c04" height={20} width={20} />
        )}
        {!agentListSelector.loading && agentListSelector.agentList.length && (
          <ul className=" w-full h-full   flex lg:justify-center justify-center lg:items-center items-center lg:flex-row flex-col ">
            {agentListSelector.agentList.slice(0, 3).map((agent) => (
              <li
                className=" font-body lg:w-1/3 w-full lg:text-xl flex  mb-4 mx-o justify-center items-center"
                key={agent.advertiser_id}
              >
                <AgentCard agent={agent} />
              </li>
            ))}
          </ul>
        )}
      </div>

     
    </div>
  );
}

export default AgentList