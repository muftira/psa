import React from "react";
import Data from "./data.json";

function SectionDua() {
  
  return (
    <div
      className={`lg:mt-32 mt-14 w-full lg:flex sm:hidden flex-col justify-start  bg-bege  lg:space-y-20 space-y-10 `}
    >
      {Data &&
        Data.sectionDua.map((item, i) => (
          <div className={`w-full flex ${
            (i + 1) % 2 === 0 ? "lg:justify-end justify-center lg:pr-16" : "lg:justify-start justify-center lg:pl-16"
          }`}>
            <div
              key={i}
              className={`lg:w-[60%] w-[90%] lg:h-[450px] h-[200px] bg-button rounded-xl`}
            ></div>
          </div>
        ))}
    </div>
  );
}

export default SectionDua;
