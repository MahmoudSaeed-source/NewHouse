import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
const Registration = () => {
  return (
    <main className='w-full h-screen flex items-center justify-center bg-hero-pattern'>
      <div className=' w-full h-full flex items-center justify-center flex-row' style={{ backgroundColor: '#333333ba' }} >
     
        <div className='w-96 h-auto flex  flex-col   bg-white p-6 rounded-md'>
          <h2 className='w-full h-10 flex justify-center items-center text-black font-body text-[30px] font-bold mb-2'>
            Sing Up
          </h2>
          <form className='  full h-auto flex-col flex font-links relative'>
            <div className='w-full h-auto  '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' type='text' placeholder='userName' name='username' />
            </div>
            <div className='w-full h-auto  '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' type='email' placeholder='Email' name='Email' />
            </div>
            <div className='w-full h-auto mt-2 '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' type='password' placeholder='Password' name='password ' />
            </div>
            <div className='w-full h-auto mt-2 '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' type='password' placeholder='ConfirmPassword' name='ConfirmPassword ' />
            </div>
            <div className='w-full h-[50px] flex justify-center items-center mt-4'>
              <button type='submit' className='w-[90%] h-[35px] rounded-md bg-blue-title font-body text-white text-center '>SingUp</button>
            </div>
            <p className='w-full h-10 text-center mt-2 mb-4'>Already have an account ?  <span className='text-blue-title'><Link to='/' > Login</Link></span></p>
            <div className='w-full h-10 relative'>
              <hr className='mt-2' />
              <p className='w-4 h-6 absolute top-[-5px] left-[50%] text-black  bg-white font-body font-bold'>or</p>
            </div>
         
            <div className='w-full h-10 border-2 border-gray-500 mt-6'>

            </div>
          </form>
        </div>
    
      </div>
    
    </main>
  )
}
export default Registration;