import React from "react";
import Title from "./Title";
import { GiCardExchange } from "react-icons/gi";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";

function OurPolicy() {
  return (
    <div className="w-[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col bg-gradient-to-r from-[#141414] to-[#0c2025] gap-[50px]">
      {/* HEADING */}
      <div className="w-[100%] h-[8%] text-center mt-[70px] ">
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          Customer friendly polices - Our Commitment to You - Shop with
          Confidence
        </p>
      </div>

      {/* POLICY CARDS */}
      <div className="w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]">
        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] ">
          <GiCardExchange className="md:w-[40px] w-[30px] md:h-[40px] h-[30px] text-[#90b9ff] " />

          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7] ">
            Easy Exchange Policy
          </p>
          <p className=" md:text-[12px] text-[12px] text-[#a5e8f7] text-center">
            Hassle-Free Exchanges - Shop with Confidence and Flexibility.
          </p>
        </div>
        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] ">
          <TbRosetteDiscountCheck
            className="md:w-[40px] w-[30px] md:h-[40px]
          h-[30px] text-[#90b9ff] "
          />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7] ">
            7 days Exchange
          </p>
          <p className=" md:text-[12px] text-[12px] text-[#a5e8f7] text-center">
            7 Days Easy Exchange on all products - Shop with confidence and
            peace of mind.
          </p>
        </div>
        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] ">
          <FcCustomerSupport className="md:w-[35px] w-[30px] md:h-[35px] h-[30px] text-[#90b9ff] " />

          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7] ">
            Customer Support
          </p>
          <p className=" md:text-[12px] text-[12px] text-[#a5e8f7] text-center">
            Trusted Customer Support - Your Satisfaction is Our Priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
