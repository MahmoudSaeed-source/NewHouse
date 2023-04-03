import React from 'react'

const AgentCard = ({agent}) => {
  return (
      <div className='lg:w-80 w-full lg:h-80 h-auto rounded-xl bg-cyan-700 text-white relative flex justify-start items-start shadow-md flex-col hover:shadow-amber-800 cursor-pointer'>
      <div className='photo w-full h-24   rounded-lg flex justify-center items-center     bg-cyan-800'>
        <img src={agent.photo.href} alt={agent.first_name} className='w-24 h-24 rounded-full mt-4 border-2 border-amber-500 shadow-md  ' />
      </div>
      <div className='w-full h-full font-body mt-4 flex flex-col justify-start items-start border-top-2 capitalize'>
        <p className='font-body text-white mb-4 lg:text-sm w-full text-lg '>agent Title :{agent.title}</p>
        <p className='font-body text-white mb-4 lg:text-sm w-full text-lg '>agent email : {agent.email}</p>
        <p className='font-body text-white mb-4 lg:text-sm w-full text-lg '>agent Name : {agent.full_name}</p>
        <p className='font-body text-white mb-4 lg:text-sm w-full text-lg '>agent phone : {agent.phones[0].number}</p>
        <p className='font-body text-white mb-4 lg:text-sm w-full text-lg '>languages :{agent.user_languages}</p>
      </div>
    </div>
  )
}

export default AgentCard