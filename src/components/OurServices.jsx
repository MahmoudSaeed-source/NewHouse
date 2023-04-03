import React from 'react'
import { AiFillContainer } from 'react-icons/ai'

const OurServices = () => {
    return (
        <div className=' w-full h-auto border-2 flex p-12  flex-col '>
            <h2 className='w-full h-10 mb-2 font-body '>Our OurServices</h2>
            <div className='w-full lg:h-48 h-auto lg:flex-row flex-col flex p-4 border-2 border-red-700' >
                <div className='w-1/3 h-40 flex border-green-400 border-2 '>
                    <div className='w-[20%] h-1/3 flex bg-blue'>
                            <AiFillContainer size={40} className='text-white' />
                        </div>
                        <div className='w-[80%] h-full flex justify-start ml-2 '>
                            <h5 className='h-8 border-b-2 border-red-300'>Wide Range of Properties</h5>
                        </div>
                    </div>
                <div className='w-1/3 h-40 flex border-green-400 border-2 ml-2 '>
                    <div className='w-1/3 h-1/3 flex bg-green-400'>
                            <AiFillContainer size={40} className='text-white' />
                        </div>
                        <div className='w-2/3 h-full flex justify-start ml-2 '>
                            <h5 className='h-4 border-b-2'>Wide Range of Properties</h5>
                        </div>
                    </div>
                <div className='w-1/3 h-40 flex border-green-400 border-2 ml-2 '>
                    <div className='w-1/3 h-1/3 flex bg-green-400'>
                            <AiFillContainer size={40} className='text-white' />
                        </div>
                        <div className='w-2/3 h-full flex justify-start ml-2 '>
                            <h5 className='h-4 border-b-2'>Wide Range of Properties</h5>
                        </div>
                    </div>
                </div>
             
            </div>
       
  )
}

export default OurServices
