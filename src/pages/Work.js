import React, { useState } from "react";
import Data from "../component/data.json";
import { FaFilter } from "react-icons/fa";
import { AiOutlineRotateRight } from "react-icons/ai";
import RadioBox from "../component/RadioBox";

function Work() {
  const [categoryName, setCategoryName] = useState();
  const [radioBox, setRadioBox] = useState(false)

  return (
    <div className="w-full h-screen lg:bg-bege sm:bg-white bg-bege overflow-hidden flex justify-center">
      <div className="bg-white w-full mt-20 font-fontSatu text-button text-xl lg:hidden sm:flex sm:flex-col sm:items-center space-y-6 hidden">
      <p>Not Displayed in Tablet Mode</p>
        <div className="text-[40px]">
        <AiOutlineRotateRight/>
        </div>
        
        <p>Please Rotate to Landscape</p>
      </div>
      <div className="lg:flex hidden space-x-10 mt-28">
        {Data.category.map((item) => (
          <button
            onClick={() => setCategoryName(item.text)}
            className={`w-28 h-10 border border-black rounded-lg text-button font-bold ${
              categoryName === item.text
                ? "bg-button text-bege"
                : "bg-bege text-button"
            }`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="sm:hidden flex justify-between mt-14 w-full ml-5 mr-5">
        <div>
          <p className="text-button text-2xl font-fontSatu font-bold">
            Content
          </p>
        </div>
        <div>
          <button onClick={() => setRadioBox(!radioBox)} className={`flex justify-center items-center bg-bege text-button border border-black rounded-md px-3 active:bg-button active:text-bege relative ${radioBox ? 'bg-button text-bege' : "bg-bege text-button"}`}>
            Filter
            <div className="ml-1 text-[12px] ">
              <FaFilter />
            </div>
          </button>
          {radioBox ? <div className="absolute right-0">
            <RadioBox />
          </div> : null}
          
        </div>
      </div>
    </div>
  );
}

export default Work;
