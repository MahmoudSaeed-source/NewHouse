import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
const Registration = () => {
  const ErrorMassageRef = useRef(null)
  const passWordRef = useRef('')
  const EmailREf = useRef('')
  const ConfirmPasswordRed = useRef('')
  const [userName,setUserName]=useState ('')
  console.log(userName)
  const [userNameValid,setUserNameValid]=useState (false)
  const [passwordValid,setPasswordValid]=useState (false)
  const [emailvalid,setEmailValid] = useState(false)
  const nameRegex = /^[a-zA-Z_]+$/
 
const checkData = (e)=>{
  if(e.target.value === ""){
    ErrorMassageRef.current.textContent   = 'userName is reqiure'
  } else if(nameRegex.test(userName)) {
  } else {
    ErrorMassageRef.current.textContent = 'userName is not valid'
  }
}
  const handleFocus = () => {
    ErrorMassageRef.current.textContent = ''
  }

  const handle_Data_Form =  async (e)   => {
    e.preventDefault()
    const GetData = new FormData(e.currentTarget)
    const dataFormObject = Object.fromEntries(GetData)
    try {
      const res = await axios.post('http://localhost:5000/users',dataFormObject);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <main className='w-full h-screen flex items-center justify-center bg-hero-pattern'>
      <div className=' w-full h-full flex items-center justify-center flex-row' style={{ backgroundColor: '#333333ba' }} >
     
        <div className='w-96 h-auto flex  flex-col   bg-white p-6 rounded-md'>
          <h2 className='w-full h-10 flex justify-center items-center text-black font-body text-[30px] font-bold mb-2'>
            Sing Up
          </h2>
          <form className='  full h-auto flex-col flex font-links relative' onSubmit={handle_Data_Form}>
            <div className='w-full h-auto  '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' autoComplete = 'none'  type='text' placeholder='userName'
               name='username' onChange ={(e)=> setUserName(e.target.value)} onBlur = {checkData} onFocus = {handleFocus}/>
               <p ref={ErrorMassageRef} className =' w-full text-[10px] text-red-600 font-body text-start'></p>
            </div>
            <div className='w-full h-auto  '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' autoComplete='none' ref={EmailREf} type='email' placeholder='Email' name='Email' onFocus={handleFocus} />
            </div>
            <div className='w-full h-auto mt-2 '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' autoComplete='none' ref={passWordRef} type='password' placeholder='Password' name='password ' />
            </div>
            <div className='w-full h-auto mt-2 '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	' autoComplete='none' ref={ConfirmPasswordRed}  type='password' placeholder='ConfirmPassword' name='ConfirmPassword ' />
            </div>
            <div className='w-full h-[50px] flex justify-center items-center mt-4'>
              <button type='submit' className='w-[90%] h-[35px] rounded-md bg-blue-title font-body text-white text-center '>SingUp</button>
            </div>
         
          </form>
        </div>
    
      </div>
    
    </main>
  )
}
export default Registration;