import React from "react";
import { FaCircle } from "react-icons/fa6";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div
      className="
      w-full md:w-[40%] 
      h-full 
      flex flex-col 
      gap-10 
      relative 
      z-10
    "
    >
      {/* TEXT */}
      <div
        className="
          text-[#88d9ee] 
          text-[28px] 
          md:text-[40px] 
          font-bold
          mt-[600px] md:mt-[150px]
          ml-0 md:ml-[50px]
          text-center 
          px-4
          flex flex-col gap-2
        "
      >
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      {/* DOT INDICATORS */}
      <div className="flex items-center justify-center gap-4 mt-10">
        {[0, 1, 2, 3].map((index) => (
          <FaCircle
            key={index}
            className={`w-3 md:w-[14px] ${
              heroCount === index ? "fill-orange-400" : "fill-white"
            } cursor-pointer`}
            onClick={() => setHeroCount(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
