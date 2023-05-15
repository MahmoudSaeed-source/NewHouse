import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
const MoveUp = () => {
  const MoveUpBtn = useRef('')
  const handleMoveUp = () => {
    window.scrollTo(0,0)
  }
  useEffect(() => {
    window.addEventListener('scroll',() => {
      if(window.scrollY >= 40) {
        MoveUpBtn.current.style.display = 'flex'
      } else {
        MoveUpBtn.current.style.display = "none";
      }
    })
  },[])
  return (
    <>
      {
        <div
          className="moveUp w-12 h-12 flex justify-center items-center rounded-full text-blue-title bg-gray-500 dark:bg-gray-900 bottom-4 right-6 fixed z-50 cursor-pointer shadow-lg"
          onClick={handleMoveUp}
             ref={MoveUpBtn}
        >
          <AiOutlineArrowUp size={30} />
        </div>
      }
    </>
  );
}

export default MoveUp