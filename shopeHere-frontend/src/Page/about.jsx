import React from "react";
import Title from "../components/Title";
import aboutImg from "../assets/about.jpg";

function about() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center justify-start flex-col bg-gradient-to-r from-[#141414] to-[#0c2025] gap-[50px] pt-[70px] ">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row ">
        <div className="lg:w-[50%] w-[100%] flex items-center justify-center ">
          <img
            src={aboutImg}
            alt=""
            className="lg:w-[60%] w-[80%] shadow-md shadow-black rounded-sm "
          />
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]  ">
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px] ">
            Welcome to ShopHere, your ultimate destination for trendy and
            affordable fashion! We are passionate about providing you with a
            seamless shopping experience, offering a wide range of clothing,
            accessories, and footwear for men, women, and kids. At ShopHere, we
            believe that fashion should be accessible to everyone, and our
            mission is to help you express your unique style with confidence.
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px] ">
            Our curated collection features the latest trends, timeless
            classics, and must-have essentials to keep your wardrobe fresh and
            stylish. Whether you're looking for casual wear, formal attire, or
            statement pieces, we've got you covered. With a user-friendly
            interface, secure payment options, and prompt delivery services,
            shopping at ShopHere is convenient and hassle-free. Join our fashion
            community today and elevate your style with ShopHere!
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px] ">
            Thank you for choosing ShopHere – Where Style Meets Affordability!
          </p>
        </div>
      </div>

      <div className="w-[100%] flex items-center justify-center flex-col gap-[10px] ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
        <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col gap-[10px] py-[40px] ">
            {/* CARD 1 */}
    <div className="group border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-8 text-white flex flex-col items-center gap-4 hover:bg-white/10 hover:-translate-y-2 duration-300">
      <div className="text-[#bff1f9] text-4xl">⭐</div>
      <h3 className="text-xl font-semibold text-[#bff1f9]">Quality Assurance</h3>
      <p className="text-center text-gray-200">
        We guarantee top-notch quality through strict checks, reliable sourcing,
        and full commitment to customer satisfaction.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="group border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-8 text-white flex flex-col items-center gap-4 hover:bg-white/10 hover:-translate-y-2 duration-300">
      <div className="text-[#bff1f9] text-4xl">🚚</div>
      <h3 className="text-xl font-semibold text-[#bff1f9]">Fast Delivery</h3>
      <p className="text-center text-gray-200">
        Quick & reliable shipping ensures your products reach you in perfect
        condition and on time.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="group border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl p-8 text-white flex flex-col items-center gap-4 hover:bg-white/10 hover:-translate-y-2 duration-300">
      <div className="text-[#bff1f9] text-4xl">💬</div>
      <h3 className="text-xl font-semibold text-[#bff1f9]">24/7 Support</h3>
      <p className="text-center text-gray-200">
        Our support team is available around the clock to assist with any
        questions or issues.
      </p>
    </div>
        </div>
      </div>
    </div>
  );
}

export default about;
