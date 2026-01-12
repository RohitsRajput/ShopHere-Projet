import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Cart({ name, image, id, price }) {
  const { currency } = useContext(shopDataContext);
  const navigate = useNavigate();

  return (
    <div
      className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg   rounded-bl-3xl rounded-tr-3xl border-3 border-[#ffffff1a]  hover:scale-[102%] hover:border-[#a5faf7] flex items-start justify-start flex-col p-[10px] cursor-pointer"
      onClick={() => navigate(`/productDetails/${id}`)}
   
    >
      <img
        src={image}
        alt=""
        className="w-[100%] h-[80%] rounded-sm object-cover "
      />
      <div className="text-[#c3f6fa] text-[18px] py-[10px]">{name}</div>
      <div className="text-[#c3f6fa] text-[14px] ">
        {currency} {price}
      </div>
    </div>
  );
}

export default Cart;
