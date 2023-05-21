import React,{ useEffect } from 'react'
import {PropagateLoader} from "react-spinners";
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
    <div className="w-full h-auto bg-bull-300 lg:mr-12 mr-0 lg:ml-12 ml-0 py-10 ">
      <div className="w-full h-32 flex justify-start items-center flex-col">
        <h2 className="text-blue-title   text-[20px] w-full h-14 flex items-center justify-center font-body capitalize ">
          Real Estate Agents
        </h2>
        <h4 className="text-blue-300 text-[14px]   lg:w-[600px] w-full h-auto flex items-center justify-center font-body capitalize">
          With the “list agents shortcode” you can show your agents in any page,
          alognside with their contact details and link to their agent profile.
        </h4>
      </div>

      <div className="w-full h-auto flex lg:justify-start justify-center lg-mx-12 lg:items-center  items-center m-0 p-0 flex-col">
        {agentListSelector.loading && (
          <div className="w-full h-auto flex justify-center items-center py-24">
            <PropagateLoader color="#38bdf8" />
          </div>
        )}
        {!agentListSelector.loading && agentListSelector.agentList.length && (
          <ul className=" w-full h-full   flex lg:justify-start justify-center lg:items-center items-center lg:flex-row flex-col ">
            {
              agentListSelector.agentList.slice(0,3).map(
              (agent) =>
               (
                  <li
                    className=" font-body lg:w-1/3 w-full lg:text-xl flex  mb-4 mx-o justify-center  items-center"
                    key={agent.advertiser_id}
                  >
                    <AgentCard agent={agent} />
                  </li>
                )
            )}
          </ul>
        )}
      </div>
      <h2 className="group text-blue-title w-full h-11 flex justify-center items-start  font-body text-[14px] font-bold lg:px-12 px-2">
        <Link to="/HousesForRent" className="font-body capitalize">
          see All Agents
        </Link>
        <MdOutlineKeyboardDoubleArrowRight
          size={20}
          className="text-blue-title-title mr-2 group-hover:scale-125"
        />
      </h2>
    </div>
  );
}

export default AgentList