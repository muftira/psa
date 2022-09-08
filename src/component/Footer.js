import React from 'react'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate()
  return (
    <div className='w-full bg-bege lg:flex sm:hidden items-end justify-center lg:mt-20 mt-10 p-5'>
        <p onClick={() => navigate('/work')} className='font-fontSatu text-button lg:text-9xl text-5xl lg:translate-y-16  lg:duration-500 lg:hover:translate-y-0 lg:hover:ease-in-out hover:text-menu cursor-pointer'>More Works</p>
    </div>
  )
}

export default Footer