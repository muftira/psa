import React from "react";
import Data from "./data.json";

function SectionSatu() {
  return (
    <div className="w-full flex flex-col lg:bg-bege sm:bg-white lg:justify-evenly items-center ">
      <div className="bg-white w-full mt-20 font-fontSatu text-button text-xl lg:hidden sm:inline hidden">Not Displayed in Tablet Mode</div>
      <div className="w-full lg:flex sm:hidden flex lg:justify-start lg:items-start justify-center items-center">
        <div className="w-[1/2] lg:flex hidden">
          <img className="w-[800px] " src={Data.sectionSatu.img} alt="" />
        </div>
        <div className="flex flex-col justify-center items-start  xl:pt-[130px] lg:pt-[10px] lg:p-0 p-5">
          <p className="text-button font-fontSatu font-bold text-left lg:text-[45px] text-2xl lg:w-[50vw]  mb-10 lg:leading-[55px] leading-[30px]">
            Transform abstract ideas into something solid and meaningful
          </p>
          <p className="text-button font-fontDua text-left lg:text-base text-xs lg:w-[45vw]  mb-10">
            Putra Sang Awan is a Creative Digital Agency in Bandung. We love
            everything we do at PSA, but our main expertise lies in Content
            Creation, Strategy and Management, 2D & 3D Graphics, Film & TVC and
            Animation.
          </p>
          <div className="lg:w-[50vw] flex justify-end">
            <button className="lg:w-32 lg:h-10 w-24 h-7 border border-black lg:rounded-lg rounded-md text-button font-bold text-fontSatu lg:text-base text-xs cursor-pointer mr-20 active:bg-button active:text-white">
              Work With Us
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex sm:hidden flex justify-center items-center xl:space-x-40 lg:space-x-24 space-x-5 mt-10 lg:pr-14 lg:pl-14">
        {Data &&
          Data.sectionSatu.logo.map((logo, i) => (
            <div key={i}>
              <img className="lg:w-[90px] w-[30px]" src={logo.img} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SectionSatu;
