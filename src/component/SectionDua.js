import React from "react";
import Data from "./data.json";
import Footer from "./Footer";

function SectionDua() {
  
  return (
    <div
      className={`lg:mt-32 mt-14 w-full lg:flex sm:hidden flex-col justify-start  bg-[url('https://res.cloudinary.com/dblm329in/image/upload/v1663154487/PSA/Web_BG_Trim_mvgafo.svg')] bg-right bg-no-repeat lg:space-y-20 space-y-10 `}
    >
      {Data &&
        Data.sectionDua.map((item, i) => (
          <div className={`w-full flex ${
            (i + 1) % 2 === 0 ? "lg:justify-end justify-center lg:pr-16" : "lg:justify-start justify-center lg:pl-16"
          }`}>
            <div
              key={i}
              className={`lg:w-[60%] w-[90%] lg:h-[50%] h-[200px] bg-button rounded-xl overflow-hidden relative shadow-black/40 shadow-lg`}
            >
              <img className="w-[900px]" key={i} src={item.img} alt="" />
              <div className="lg:w-[400px] w-[250px] h-full flex flex-col justify-end absolute top-0 text-white text-left p-5">
                <p className="font-fontDua lg:text-[25px] text-[10px]">{item.textSatu}</p>
                <p className="font-fontSatu font-bold lg:text-[40px] text-[20px]">{item.textDua}</p>
                <div className="w-full flex justify-end pr-1">
                 <p className={`font-fontDua lg:text-[25px] text-[10px]  ${i+1===4 ? 'lg:pr-0 pr-8' : 'lg:pr-10 pr-12'}`}>{item.textTiga}</p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
        <Footer/>
    </div>
  );
}

export default SectionDua;
