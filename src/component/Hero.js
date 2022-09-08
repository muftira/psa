import React from 'react'
import Data from "./data.json";

function Hero() {
  return (
    <div className='w-full lg:h-screen bg-black lg:inline-block sm:hidden relative overflow-hidden'>
        <img className='w-full' src={Data.navbar.hero} alt="" />
        <div className="w-screen h-10 bg-bege rounded-t-[40px] absolute bottom-[-2px]"/>
    </div>
  )
}

export default Hero