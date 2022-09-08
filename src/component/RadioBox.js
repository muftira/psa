import React from "react";

function RadioBox() {
  return (
    <div className="w-[120px] h-[170px] flex flex-col justify-center items-center space-y-1 bg-menu rounded-l-lg mt-5">
      <div className="text-left font-fontSatu text-button font-bold">
        <div className="space-x-2">
          <input type="checkbox" value="Content" />
          <label>Content</label>
        </div>
        <div className="space-x-2">
          <input type="checkbox" value="Campaign" />
          <label>Campaign</label>
        </div>
        <div className="space-x-2">
          <input type="checkbox" value="2D & 3D" />
          <label>2D & 3D</label>
        </div>
        <div className="space-x-2">
          <input type="checkbox"value="Event" />
          <label>Event</label>
        </div>
      </div>
      <div className="w-full flex justify-center pt-3">
        <button className="w-20 h10 bg-button border border-button rounded-md flex justify-center p-[2px] text-white font-fontSatu">
          Submit
        </button>
      </div>
    </div>
  );
}

export default RadioBox;
