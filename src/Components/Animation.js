import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./style.css";

function Animation() {
  return (
    <>
    <div className="flex justify-center align-center mt-4">
        <img
          src="https://moveinsync.com/wp-content/uploads/2023/05/mis-01.png"
          alt="Your Image Alt Text"
          className="w-1/4"
        />
      </div>
      <div className="flex justify-center align-center ">
        <div className="w-1/4 flex justify-center align-center">
          <div className="h-1.5 flex justify-center align-center w-full bg-pink-100 overflow-hidden">
            <div className="animate-progress flex justify-center align-center w-full h-full bg-pink-500 origin-left-right"></div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Animation;
