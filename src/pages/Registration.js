import React,{useRef,useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';

const Registration = () => {
  const ErrorMassage_UserName_Ref = useRef(null)
  const ErrorMassage_Email_Ref = useRef(null)
  const ErrorMassage_Password_Ref = useRef(null)
  const ErrorMassage_Confirm_Password_Ref = useRef(null)
  const [userName,setUserName]=useState ('')
  const [emil,setEmail] = useState('')
  const [Password,setPassWord] = useState('')
  const [ConfirmPassword,setConfirmPassWord] = useState('')
  const [userNameValid,setUserNameValid]=useState (false)
  const [passwordValid,setPasswordValid]=useState (false)
  const [Confirm_passwordValid,setConfirm_passwordValid]=useState (false)
  const [emailvalid,setEmailValid] = useState(false)
  const nameRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
 const NavToLOgIN = useNavigate()
  const check_User_Name_validation = (e) => {
    if(e.target.value === '') {
      ErrorMassage_UserName_Ref.current.textContent = 'userName is required'
    }else if(nameRegex.test(userName)) {
    setUserNameValid(true)
  } else {
      ErrorMassage_UserName_Ref.current.textContent = 'userName is not valid  at least one letter, one number and one special character Minimum 8 characters: '
    }
}
  const handleFocus_UserName = () => {
    ErrorMassage_UserName_Ref.current.textContent = ''
  }
  const handleFocus_Email = () => {
    ErrorMassage_Email_Ref.current.textContent = ''
  }
  const handleFocus_PassWord = () => {
    ErrorMassage_Password_Ref.current.textContent = ' ' 
  }
  const handleFocus_ConfirmPassWord = () => {
    ErrorMassage_Confirm_Password_Ref.current.textContent = ' ' 
  }
  const check_Email_validation = (e) => {
    if(e.target.value === '') {
      ErrorMassage_Email_Ref.current.textContent = ' Email is required'
    }
    else if(emailRegex.test(emil)) {
      setEmailValid(true)
    } else {
      ErrorMassage_Email_Ref.current.textContent = ' should be like test@gmail.com'
    }
  }
  const check_PassWord_Validation = (e) => {
    if(e.target.value === '') {
      ErrorMassage_Password_Ref.current.textContent = ' password is require'
    } else if(passwordRegex.test(Password)) {
      setPasswordValid(true)
    } else {
      ErrorMassage_Password_Ref.current.textContent = ' Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:'
    }
  }
  const check_Confirm_PassWord_Validation = (e) => {
    if(e.target.value === '') {
      ErrorMassage_Confirm_Password_Ref.current.textContent = 'password Dont match'
    } else if(ConfirmPassword === Password ) {
      setConfirm_passwordValid(true)
    } else {
      ErrorMassage_Confirm_Password_Ref.current.textContent = 'password Dont match'
    }
  }

  const handle_Data_Form =  async (e)   => {
    e.preventDefault()
    const getData = new FormData(e.currentTarget)
    const dataFormObject = Object.fromEntries(getData)
    if(userNameValid && passwordValid && emailvalid && Confirm_passwordValid) {
      const res = await axios.post('http://localhost:5000/users',dataFormObject);
      NavToLOgIN('/login')
    } else {
      console.error('error');
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
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	'
                type='text'
                placeholder='userName'
                name='username'
                autoComplete='none'
                required
                onChange={(e) => setUserName(e.target.value)}
                onBlur={check_User_Name_validation}
                onFocus={handleFocus_UserName}
                
              />
              <p ref={ErrorMassage_UserName_Ref} className =' w-full text-[10px] text-red-600 font-body text-start'></p>
            </div>
            <div className='w-full h-auto  '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	'
                autoComplete='none'
                type='email'
                placeholder='Email'
                name='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
                onBlur={check_Email_validation}
              onFocus={handleFocus_Email}
              />
              <p ref={ErrorMassage_Email_Ref} className=' w-full text-[10px] text-red-600 font-body text-start'></p>
            </div>
            <div className='w-full h-auto mt-2 '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	'
                autoComplete='none'
                type='password'
                placeholder='Password'
                required
                name='password'
                onChange={(e) => setPassWord(e.target.value)}
                onBlur={check_PassWord_Validation}
                onFocus={handleFocus_PassWord}
              />
              <p ref={ErrorMassage_Password_Ref} className=' w-full text-[10px] text-red-600 font-body text-start'></p>
            </div>
            <div className='w-full h-auto mt-2 '>
              <input className='w-full h-10 mt-2 rounded-md p-2 border-2 border-gray-100 outline-none	'
                autoComplete='none'
                type='password'
                placeholder='ConfirmPassword'
                required
                name='ConfirmPassword'
                onChange={(e) => setConfirmPassWord(e.target.value)}
                onBlur={check_Confirm_PassWord_Validation}
                onFocus={handleFocus_ConfirmPassWord} />
              <p ref={ErrorMassage_Confirm_Password_Ref} className=' w-full text-[10px] text-red-600 font-body text-start'></p>
            </div>
            
            <div className='w-full h-[50px] flex justify-center items-center mt-4'>
              <button type='submit' className='w-[90%] h-[35px] rounded-md bg-blue-title font-body text-white text-center '>SingUp</button>
            </div>
            <p className='w-full h-4 flex justify-center items-center text-[10px] font-body capitalize'>Already you  have an account : <Link to='/login' className='text-blue-title'>LogIN</Link></p>
          </form>
        </div>
    
      </div>
    
    </main>
  )
}
export default Registration;