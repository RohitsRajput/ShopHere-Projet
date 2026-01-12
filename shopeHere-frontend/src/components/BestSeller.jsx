import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { shopDataContext } from "../context/ShopContext";
import Cart from "./Cart";

function BestSeller() {
  const { products } = useContext(shopDataContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const filterProducts = products.filter((item) => item.bestseller);
    setBestSeller(filterProducts.slice(0, 8));
  }, [products]);
  return (
    <div>
      <div className="h-[5%] w-[100%] text-center mt-5 md:mt-[50px]">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          discover the top picks - Best Sellers Here
        </p>
      </div>
      <div className="w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]">
        {bestSeller.map((item, index) => (
          <Cart
            key={index}
            name={item.name}
            image={item.image1}
            id={item._id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
