import React from 'react'
const Registration = () => {
  return (
    <main className = 'w-full h-screen flex items-center justify-center bg-gray-500'>
      <form className = 'w-96 h-auto border-2 border-red-300 p-4'>
        <div className = 'w-full h-auto  '>
          <label className='w-full h-6 flex justify-start items-center'>userName</label>
          <input  className = 'w-full h-10 mt-2 rounded-md p-2'type='text' placeholder='userName' name='username'/>
        </div>
        <div className = 'w-full h-auto mt-2 '>
          <label className = 'w-full h-6 flex justify-start items-center'>Password</label>
          <input  className = 'w-full h-10 mt-2 rounded-md p-2'type='password' placeholder='password' name='password'/>
        </div>
      </form>
    </main>
  )
}
export default Registration;