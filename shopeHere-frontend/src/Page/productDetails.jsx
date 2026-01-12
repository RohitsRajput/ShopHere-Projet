import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import RelatedsProducts from "../components/RelatedsProducts";
import { useNavigate } from "react-router-dom";



function productDetails() {
  const navigate = useNavigate();
const { productId } = useParams();

  const { products, currency, addToCart } = useContext(shopDataContext);

  const [productData, setProductData] = useState(null);

  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [size, setSize] = useState("");

  // Fetch Product Details
  useEffect(() => {
    const findProduct = products.find((item) => item._id === productId);

    if (findProduct) {
      setProductData(findProduct);
      setImage(findProduct.image1);
      setImage1(findProduct.image1);
      setImage2(findProduct.image2);
      setImage3(findProduct.image3);
      setImage4(findProduct.image4);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="w-full h-screen flex items-center mt-20px justify-center text-black text-2xl">
        Loading Product...
      </div>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-[#141414] to-[#0c2025] text-white px-4 md:px-10 py-20 flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - Images */}
        <div className="lg:w-1/2 w-full flex flex-col-reverse lg:flex-row gap-6">
          {/* Thumbnails (MOBILE BELOW / DESKTOP LEFT) */}
          <div
            className="
      flex 
      lg:flex-col 
      gap-4 
      overflow-x-auto 
      lg:overflow-visible 
      pb-2 
      order-1 lg:order-2
    "
          >
            {[image1, image2, image3, image4].map((img, i) => (
              <div
                key={i}
                className="min-w-[70px] min-h-[70px] md:w-[110px] md:h-[110px] bg-[#ffffff10] border rounded-md cursor-pointer"
                onClick={() => setImage(img)}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Main Image (MOBILE TOP / DESKTOP RIGHT) */}
          <div
            className="
      w-full 
      h-[350px] 
      sm:h-[420px] 
      lg:h-[500px] 
      bg-[#ffffff10] 
      border 
      rounded-xl 
      order-1 lg:order-2
    "
          >
            <img
              src={image}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Product Info */}
        <div className="lg:w-1/2 w-full mt-4">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-cyan-200">
            {productData.name}
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-cyan-300 mb-4">
            {currency} {productData.price}
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-lg mb-2">Select Size</h3>

            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-xl border text-sm sm:text-base
              ${
                item === size
                  ? "bg-cyan-400 text-black"
                  : "bg-[#ffffff10] border-gray-600"
              }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}

          <div className="flex w-[100hv] gap-5 ">
            <button
              className="mt-4 px-6 py-3 font-semibold bg-cyan-400 text-black text-lg rounded-sm rounded-tl-3xl rounded-br-3xl hover:bg-cyan-300 transition-all w-[50%] sm:w-auto"
              onClick={() => {
                addToCart(productData._id, size);
                navigate("/order");
              }}
            >
              Buy Now
            </button>

            <button
              className="mt-4 px-6 py-3 font-semibold bg-cyan-400 text-black text-lg rounded-sm rounded-tl-3xl rounded-br-3xl hover:bg-cyan-300 transition-all w-[50%] sm:w-auto"
              onClick={() => addToCart(productData._id, size)}
            >
              Add To Cart
            </button>
          </div>

          <div className="w-[80%] h-[0.5%] bg-slate-700 mt-7 "></div>
          <div className="w-[80%] text-[16px] text-white mt-2 ">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product </p>
            <p>Easy return and exchange policy within 7 days </p>
          </div>
        </div>
      </div>

      <div className=" w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex gap-5 items-start justify-start flex-col overflow-x-hidden ">
        <div className="flex gap-5 mx-[20px] mt-[30px] lg:ml-[80px] ml-[10px] lg:mt-[10px]">
          <p className="border-2 px-5 py-3 text-sm border-sky-800 text-white rounded-tr-2xl rounded-bl-2xl ">
            Description
          </p>
          <p className="border-2 px-5 py-3 text-sm border-sky-800 text-white rounded-tl-2xl rounded-br-2xl ">
            Reviews (124)
          </p>
        </div>

        <div className="w-[80%] md:h-[150px] h-[220px] bg-[#3336397c]  border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:pl-[100px] ml-[20px] rounded-2xl  ">
          <p className="w-[95%] h-[90%] flex items-center justify-center ">
            "Experience unmatched comfort with our premium cotton T-shirt,
            designed with a modern slim fit and ultra-soft fabric. The
            lightweight material keeps you cool throughout the day, making it
            ideal for work, travel, or casual outings. Durable stitching and
            vibrant colors ensure long-lasting quality wash after wash."
          </p>
        </div>

        <RelatedsProducts
          category={productData.category}
          subCategory={productData.subCategory}
          currentProductId={productData._id}
        />
      </div>
    </>
  );
}

export default productDetails;
