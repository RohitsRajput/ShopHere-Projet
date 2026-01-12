import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import uploadImage from "../Assets/upload.jpg";
import { useState } from "react";
import { authDataContext } from "../Context/AuthContext";
import axios from "axios";

function Add() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categary, setCategary] = useState("Men");
  const [subCategary, setSubCategary] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [size, setSize] = useState([]);

  const { serverUrl } = useContext(authDataContext);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", categary);
      formData.append("subCategory", subCategary);
      formData.append("price", price);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(size));

      const result = await axios.post(`${serverUrl}/addProduct`, formData, {
        withCredentials: true,
      });

      console.log("Product added successfully:", result.data);

      // Reset
      setImage1(false);
      setImage2(false);
      setImage3(false);
      setImage4(false);
      setName("");
      setDescription("");
      setPrice("");
      setCategary("Men");
      setSubCategary("TopWear");
      setBestSeller();
      setSize([]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-linear-to-br from-slate-900 to-slate-800 text-white">
      <Navbar />
      <Sidebar />

      <div className="ml-0 sm:ml-[18%] pt-20 pb-20 px-4 sm:px-8">
        <form
          action=""
          onSubmit={handleAddProduct}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-[40px] font-bold mb-6">
            Add product page
          </h1>

          {/* Product Image Section */}

          <div className="w-[80%] h-[130px] flex item-start justify-center flex-col mt-5 gap-2.5  ">
            <p className="text-[20px] md:text-[25px] font-semibold  ">
              Upload Imaage
            </p>
            <div className="w-full h-full flex items-center justify-start  ">
              {/* FIRST IMAGE  */}

              <label
                htmlFor="image1"
                className="w-[70px] h-[70px] md:w-[100px] md-h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image1 ? uploadImage : URL.createObjectURL(image1)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-2xl shadow-2xl hover:border-[#1d1d1d] border-2px  "
                />
                <input
                  type="file"
                  id="image1"
                  hidden
                  onChange={(e) => setImage1(e.target.files[0])}
                  required
                />
              </label>

              {/* SECOND IMAGE  */}

              <label
                htmlFor="image2"
                className="w-[70px] h-[70px] md:w-[100px] md-h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image2 ? uploadImage : URL.createObjectURL(image2)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-2xl shadow-2xl hover:border-[#1d1d1d] border-2px  "
                />
                <input
                  type="file"
                  id="image2"
                  hidden
                  onChange={(e) => setImage2(e.target.files[0])}
                  required
                />
              </label>

              {/* THIRD IMAGE  */}

              <label
                htmlFor="image3"
                className="w-[70px] h-[70px] md:w-[100px] md-h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image3 ? uploadImage : URL.createObjectURL(image3)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-2xl shadow-2xl hover:border-[#1d1d1d] border-2px  "
                />
                <input
                  type="file"
                  id="image3"
                  hidden
                  onChange={(e) => setImage3(e.target.files[0])}
                  required
                />
              </label>

              {/* FOURTH IMAGE  */}

              <label
                htmlFor="image4"
                className="w-[70px] h-[70px] md:w-[100px] md-h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image4 ? uploadImage : URL.createObjectURL(image4)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-2xl shadow-2xl hover:border-[#1d1d1d] border-2px  "
                />
                <input
                  type="file"
                  id="image4"
                  hidden
                  onChange={(e) => setImage4(e.target.files[0])}
                  required
                />
              </label>
            </div>
          </div>

          {/* Product Name Section */}

          <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold  ">
              Product Name
            </p>
            <input
              type="text"
              placeholder="Product Name"
              className="w-[600px]  max-w-[98%] h-10 rounded-lg hover:border-[#46d1f7] border-2  cursor-pointer bg-slate-600 px-5 test-[18px] placeholse:text-[#ffffffc2] "
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          {/* Product Description Section */}

          <div className="w-[80%] flex items-start justify-center flex-col gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold  ">
              Product Description
            </p>
            <textarea
              type="text"
              placeholder="Product Description"
              className="w-[600px]  max-w-[98%] h-[100px] py-2.5 rounded-lg hover:border-[#46d1f7] border-2  cursor-pointer bg-slate-600 px-5 test-[18px] placeholse:text-[#ffffffc2] "
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          {/* Product Categary Section */}

          <div className="w-[80%]  flex items-center flex-wrap gap-4  ">
            {/* Product  Categary Section */}
            <div className="md:w-[30%] w-full flex items-start sm:justify-center flex-col gap-2.5 ">
              <p className="text-[18px] md:text-[18px] w-full font-semibold  ">
                Product Categary
              </p>
              <select
                className="w-[400px] max-w-[98%] h-10  rounded-3xl hover:border-[#46d1f7] border-2  cursor-pointer bg-slate-600 px-5 test-[18px] placeholse:text-[#ffffffc2] "
                onChange={(e) => setCategary(e.target.value)}
              >
                <option value="">Select Categary</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/* Product sub  Categary Section */}

            <div className="md:w-[60%] w-full flex items-start sm:justify-center flex-col gap-2.5 ">
              <p className="text-[18px] md:text-[18px] font-semibold   w-full">
                Product sub-Categary
              </p>
              <select
                className="w-[400px]  max-w-[98%] h-10 rounded-3xl hover:border-[#46d1f7] border-2  cursor-pointer bg-slate-600 px-5 test-[18px] placeholse:text-[#ffffffc2] "
                onChange={(e) => setSubCategary(e.target.value)}
              >
                <option value="">Select Sub-Categary</option>
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWere</option>
              </select>
            </div>
          </div>

          {/* Product Price Section */}

          <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-2.5">
            <p className="text-[20px] md:text-[25px] font-semibold  ">
              Product Price
            </p>
            <input
              type="number"
              placeholder="₹ Price"
              className="w-[200px]  max-w-[98%] h-10 rounded-lg hover:border-[#46d1f7] border-2  cursor-pointer bg-slate-600 px-5 test-[18px] placeholse:text-[#ffffffc2] "
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          {/* Product Size Section */}

          <div
            className=" w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-2.5 
          py-2.5 md:py-0   "
          >
            <p className="text-[20px] md:text-[25px] font-semibold  ">
              Product Size
            </p>
            <div className="flex items-center justify-start gap-[15px] flex-wrap">
              <div
                className={`px-5 py-[7px] rounded-lg  bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  size.includes("S")
                    ? " bg-green-600 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSize((prev) =>
                    prev.includes("S")
                      ? prev.filter((item) => item !== "S")
                      : [...prev, "S"]
                  )
                }
              >
                S
              </div>
              <div
                className={`px-5 py-[7px] rounded-lg  bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  size.includes("M")
                    ? " bg-green-600 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSize((prev) =>
                    prev.includes("M")
                      ? prev.filter((item) => item !== "M")
                      : [...prev, "M"]
                  )
                }
              >
                M
              </div>
              <div
                className={`px-5 py-[7px] rounded-lg  bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  size.includes("L")
                    ? " bg-green-600 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSize((prev) =>
                    prev.includes("L")
                      ? prev.filter((item) => item !== "L")
                      : [...prev, "L"]
                  )
                }
              >
                L
              </div>
              <div
                className={`px-5 py-[7px] rounded-lg  bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  size.includes("XL")
                    ? " bg-green-600 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSize((prev) =>
                    prev.includes("XL")
                      ? prev.filter((item) => item !== "")
                      : [...prev, "XL"]
                  )
                }
              >
                XL
              </div>
              <div
                className={`px-5 py-[7px] rounded-lg  bg-slate-600 text-[18px] hover:border-[#46d1f7] border-2 cursor-pointer ${
                  size.includes("XXL")
                    ? " bg-green-600 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSize((prev) =>
                    prev.includes("XXL")
                      ? prev.filter((item) => item !== "")
                      : [...prev, "XXL"]
                  )
                }
              >
                XXL
              </div>
            </div>
          </div>

          {/* BestSeller Section */}

          <div className="w-[80%] flex items-center justify-start gap-2.5 mt-5 ">
            <input
              type="checkbox"
              id="bestseller"
              className="w-5 h-5 cursor-pointer"
              onChange={(e) => setBestSeller((prev) => !prev)}
            />
            <label htmlFor="bestseller" className="text-[20px] md:text-[25px] ">
              Best Seller
            </label>
          </div>

          <button className="w-[140px] px-5 py-2 rounded-tl-2xl rounded-br-2xl flex items-center justify-center gap-2.5 bg-[#65d8f7] text-black active:bg-slate-700 active-text-white active:boder-2 border-white ">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
