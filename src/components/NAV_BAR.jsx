import React,{ useRef} from 'react'
import darkLogo from '../assets/images/darklogo.png';
import lightLogo from '../assets/images/lightlogo.png';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { toggleMode } from '../app/features/darkMode/darkModeSlice'
import  './Nav_bar.css'
const NAV_BAR = () => {
  const CurrentMode = useSelector(state => state.mode.currentMode) 
  const dispatch = useDispatch();
  const navRef = useRef()
  const responsive_Nav = () => {
    if(CurrentMode) {
      navRef.current.classList.toggle('menu-open-dark') 
      console.log('yes')
    }else{
      navRef.current.classList.toggle('menu-open') 
      console.log('no')
    }
  }
 
  const hendleMode = () => {
    if(!CurrentMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark')
    }
    dispatch(toggleMode())
  }
  return (
    <div className=' nav-content items-center flex  justify-center w-full h-20 px-2 md:px-12 sm:px-0 m-0 shadow-lg overflow-hidden  dark:shadow-white dark:shadow-sm  relative' >
     
      <div className='logo_content  w-full lg:w-48 overflow-hidden items-center justify-center m-0  '>
        <div className='flex items-center  justify-start overflow-hidden '>
          {CurrentMode ? <img className='w-16 h-16 flex items-center justify-center rounded-full' src={lightLogo} alt='darkLogo' /> : <img className='w-16 h-16 rounded-full flex items-center justify-center' src={darkLogo} alt='lightLogo' />}
          <span className= 'font-title  ml-2  text-blue text-xl'>New House</span>   
        </div>
      </div>
      <ul ref={navRef} className='links font-Links tracking-widest  uppercase hidden lg:flex  lg:text-sm text-md justify-center items-center text-blue ' >
        <li className='link'><Link to='/'>Home</Link></li>
        <li className='link'><Link to='/HousesForRent'>For_Rent</Link></li>
        <li className='link'><Link to='/HousesForSale'>For_Sale</Link></li>
        <li className='link'><Link to='/'>About</Link></li>
        <li className='link'><Link to='/'>Contact us</Link></li>
          </ul>
      <div className='setting h-full  flex items-center justify-center w-12 '>
        {
          CurrentMode ? <button onClick={hendleMode}><CiLight size={30} className=' text-blue' /></button> : <button onClick={hendleMode}><MdDarkMode size={30} className=' text-black' /></button>
        }
      </div>
      <div className='toggle h-full w-14  justify-center items-center flex lg:hidden'>
        <button onClick={responsive_Nav}>
          <AiOutlineMenuFold size={40} className=' Btn ml-3 dark: text-amber-500' />
        </button>
          </div>
        </div>
  )
}

export default NAV_BAR