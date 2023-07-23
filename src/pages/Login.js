import React,{ useState } from 'react'
import {Link}from 'react-router-dom'
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { userLoginRequest,userLoginSuccess,userLoginFailure } from '../app/features/users/UserSlice'
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch()
  const [userName,setUserName]=useState('')
  const [Password,setPassword] = useState('')
  
  const handle_Data_Log_IN = async (e) => {
    e.preventDefault();

    const usersData = await axios.get('http://localhost:5000/users');
    const users = usersData.data;
    const getUserInData = users.filter(user => user.username === userName);
    
    if(getUserInData.length > 0 ){
      if(getUserInData[0].password === Password ){
        dispatch(userLoginRequest())
        await new Promise(resolve => setTimeout(resolve,1000));
        dispatch(userLoginSuccess(getUserInData[0].username));
        console.log('is login')
      }else{
        console.log('password dont match')
        dispatch(userLoginFailure('password dont match'));
      }
    } else {
      console.log('المستخدم غير موجود ')
      dispatch(userLoginFailure('المستخدم غير موجود'));
    }
  }

  return (
    <main className='w-full h-screen flex items-center justify-center bg-hero-pattern'>
      <div className=' w-full h-full flex items-center justify-center flex-row' style={{ backgroundColor: '#333333ba' }} >
        <div className='w-96 h-auto flex  flex-col   bg-white p-6 rounded-md'>
          <h2 className='w-full h-10 flex justify-center items-center text-black font-body text-[30px] font-bold mb-2'>
          LogIN
          </h2>
          <form className='  full h-auto flex-col flex font-links relative' onSubmit={handle_Data_Log_IN}>
            <div className='w-full h-auto  '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	'
                type='text'
                placeholder='username'
                name='username'
                autoComplete='none'
                required
                onChange ={(e)=>setUserName(e.target.value)}
              />
            </div>
            <div className='w-full h-auto mt-2 '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	'
                autoComplete='none'
                type='password'
                placeholder='Password'
                required
                name='password '
                onChange ={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className='w-full h-[50px] flex justify-center items-center mt-4'>
              <button type='submit' className='w-[90%] h-[35px] rounded-md bg-blue-title font-body text-white text-center hover:bg-blue-hover'>LogIn
                {userLoginRequest && <span><ClipLoader color="#36d7b7" /></span>}
              </button>
            </div>
            <p className='w-full h-4 flex justify-center items-center text-[10px] font-body capitalize'>if you Dont have any  account : <Link to ='/register' className = 'text-blue-title'>SignUp</Link></p>
          </form>
        </div>

      </div>

    </main>
  )
}
export default Login;