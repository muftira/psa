import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./data";
import DropdownMenu from "./DropdownMenu";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="w-full lg:h-20 h-10 lg:flex sm:hidden flex justify-between items-center absolute z-20">
      <div className="lg:w-16 w-8 lg:ml-10 ml-5 cursor-pointer">
        <img onClick={() => navigate('/')} src={Data.navbar.logo} alt="" />
      </div>
      <div onClick={() => setDropdown(!dropdown)} className="lg:mr-10 mr-5 lg:text-[40px] text-[20px] text-menu cursor-pointer">
        
        {dropdown ?<IoMdClose/> : <HiMenu /> }
      </div>
      
        {dropdown ? <DropdownMenu dropdown={dropdown} setDropdown={setDropdown} /> : null}
      
    </div>
  );
}

export default Navbar;
