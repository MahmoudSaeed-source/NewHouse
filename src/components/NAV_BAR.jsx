import React, { useRef, useEffect } from "react";
import darkLogo from '../assets/images/darklogo.png';
import lightLogo from '../assets/images/lightlogo.png';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { toggleMode } from '../app/features/darkMode/darkModeSlice'
import  './Nav_bar.css'
const NAV_BAR = ({ color }) => {
  const CurrentMode = useSelector((state) => state.mode.currentMode);
  const dispatch = useDispatch();
  const navRef = useRef();
  const nav_ONScroll = useRef();
  const responsive_Nav = () => {
    if (CurrentMode) {
      navRef.current.classList.toggle("menu-open-dark");
    } else {
      navRef.current.classList.toggle("menu-open");
    }
  };

  const hendleMode = () => {
    if (!CurrentMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    dispatch(toggleMode());
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        console.log("Scrolled past 100 pixels");
        nav_ONScroll.current.classList.add("nav-On-scroll");
      } else {
        nav_ONScroll.current.classList.remove("nav-On-scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className=" nav-content items-center flex   justify-center w-full h-20 px-2 md:px-12 sm:px-0 m-0 shadow-lg static z-[10000] dark:shadow-sm "
      ref={nav_ONScroll}
    >
      <div className="logo_content  w-full lg:w-48 overflow-hidden items-center justify-center m-0  ">
        <div className="flex items-center  justify-start overflow-hidden ">
          {CurrentMode ? (
            <img
              className="w-16 h-16 flex items-center justify-center rounded-full"
              src={lightLogo}
              alt="darkLogo"
            />
          ) : (
            <img
              className="w-16 h-16 rounded-full flex items-center justify-center"
              src={darkLogo}
              alt="lightLogo"
            />
          )}
          <span
            className="tag font-title  ml-2  text-white text-xl"
            style={{ color: color }}
          >
            New House
          </span>
        </div>
      </div>
      <ul
        ref={navRef}
        className=" links font-Links tracking-widest hidden uppercase lg:flex  lg:text-sm text-md justify-center items-center text-white "
        style={{ color: color }}
      >
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/houses-for-rent">For_Rent</Link>
        </li>
        <li className="link">
          <Link to="/houses-for-sale">For_Sale</Link>
        </li>
        <li className="link">
          <Link to="/">About</Link>
        </li>
        <li className="link">
          <Link to="/">Contact us</Link>
        </li>
      </ul>
      <div className="setting h-full  flex items-center justify-center w-12 ">
        {CurrentMode ? (
          <button onClick={hendleMode}>
            <CiLight size={30} className=" text-blue-title font-bold" />
          </button>
        ) : (
          <button onClick={hendleMode}>
            <MdDarkMode size={30} className=" text-black" />
          </button>
        )}
      </div>
      <div className="toggle h-full w-14  justify-center items-center flex lg:hidden ">
        <button onClick={responsive_Nav}>
          <AiOutlineMenuFold
            size={40}
            className=" Btn ml-3 dark: text-blue-title"
          />
        </button>
      </div>
    </div>
  );
};

export default NAV_BAR