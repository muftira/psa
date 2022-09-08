import React  from 'react'
import { useNavigate } from "react-router-dom";
import Data from "./data.json";

function DropdownMenu({dropdown, setDropdown}) {
    const navigate = useNavigate()
    
    const dropdownLogo = () => {
        navigate('/')
        setDropdown(!dropdown)
    }

    const dropdownWork = () => {
        navigate('/work')
        setDropdown(!dropdown)
    }
    
  return (
    <div className='absolute right-0 top-16 w-[300px] lg:h-[600px] h-[480px] bg-menu rounded-l-3xl flex flex-col justify-between items-end'>
        <div className='mt-10 mr-10 text-right  text-[30px] font-bold text-button'>
            <p onClick={() => dropdownWork()} className='cursor-pointer'>Work</p>
            <p className='cursor-pointer'>Contact</p>
        </div>
        <div onClick={() => dropdownLogo()} className='mb-10 mr-10'>
            <img className='w-[70px]' src={Data.navbar.logo} alt="" />
        </div>
    </div>
  )
}

export default DropdownMenu