import React from 'react'
import Data from "./data.json";

function Hero() {
  return (
    <div className='w-full bg-bege lg:inline-block sm:hidden relative '>
      <div className='lg:h-full overflow-hidden'>
        <img className='w-full' src={Data.navbar.hero} alt="" />
      </div>
        
        <div className="w-screen h-10 bg-bege rounded-t-[40px] absolute bottom-[-2px]"/>
    </div>
  )
}

export default Hero