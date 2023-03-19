import React from 'react'

const AgentCard = ({agent}) => {
  return (
      <div className='lg:w-80 w-full h-80 rounded-xl bg-white text-white relative flex justify-start items-start'>
          <div className='photo w-full h-24   flex justify-center items-center overflow-hidden  bg-white'>
              <img src={agent.photo.href} alt={agent.first_name} className='w-24 h-24 rounded-full  border-2 border-black shadow-md  ' />
          </div>
    </div>
  )
}

export default AgentCard