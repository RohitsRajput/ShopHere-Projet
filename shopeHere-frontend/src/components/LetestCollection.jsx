import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { shopDataContext } from "../context/ShopContext";
import Cart from "./Cart";

function LetestCollection() {
  const { products } = useContext(shopDataContext);
  const [letestProducts, setLetestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLetestProducts(products.slice(0, 8));
    }
  }, [products]);

  return (
    <div>
      <div className="h-[8%] w-[100%] text-center md:mt-[50px]">
        <Title text1={"LETEST"} text2={"COLLECTION"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          step into style - New Collection Here
        </p>
      </div>

      <div className="w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]">
        {letestProducts.map((item, index) => (
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

export default LetestCollection;
