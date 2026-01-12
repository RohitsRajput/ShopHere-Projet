import React, { useContext, useEffect, useState } from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { TbArrowBadgeDownFilled } from "react-icons/tb";
import Title from "../components/Title";
import { shopDataContext } from "../context/ShopContext";
import Cart from "../components/Cart";

function collection() {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopDataContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const apllyFilters = () => {
    let updatedProducts = products.slice();

    if (showSearch && search) {
      updatedProducts = updatedProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (sortType === "low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    apllyFilters();
  }, [category, subCategory, sortType, search, showSearch]);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-r from-[#141414] to-[#0c2025]  flex  flex-col md:flex-row justify-start pt-[20px] md:pt-[60px] overflow-x-hidden z-[2] pb-[50px  ] ">
      {/* FILTER SECTION */}

      <div
        className={`md:w-[25vw] lg:w-[15vw] w-[100vw] lg:min-h-[100vh]  p-[20px] border-r-[2px] border-gray-400 text-[#aaf5fa] lg:fixed`}
      >
        {/* HEDDING */}
        <p
          className="text-[25px] font-semibold flex  gap-[2px] items-center justify-start mt-3 cursor-pointer "
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
          {!showFilter && (
            <TbArrowBadgeRightFilled className="mt-2  md:hidden " />
          )}
          {showFilter && <TbArrowBadgeDownFilled className="mt-2 md:hidden " />}
        </p>

        {/* CATEGORY */}

        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-2 mt-6 rounded-lg bg-slate-600 cursor-pointer ${
            showFilter ? "" : "hidden md:block"
          }`}
        >
          <p className="text-[18px] text-[#f8fafa]">Category</p>
          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[6px] flex-col   ">
            <p className="flex items-center justify-center gap-[10px] text-[16px]  font-semibold ">
              <input
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
                className="w-3 cursor-pointer "
              />
              Men
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px]  font-semibold ">
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
                className="w-3 cursor-pointer "
              />
              Women
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px]  font-semibold ">
              <input
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
                className="w-3 cursor-pointer "
              />
              Kids
            </p>
          </div>
        </div>

        {/* SUB - CATEGORY */}

        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-2 mt-6 rounded-lg bg-slate-600 cursor-pointer ${
            showFilter ? "" : "hidden md:block"
          }`}
        >
          <p className="text-[18px] text-[#f8fafa]  ">Sub-Category</p>
          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[6px] flex-col   ">
            <p className="flex items-center justify-center gap-[10px] text-[16px]  font-semibold ">
              <input
                type="checkbox"
                value={"TopWear"}
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer "
              />
              TopWear
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px]  font-semibold ">
              <input
                type="checkbox"
                value={"BottomWear"}
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer "
              />
              BottomWear
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px]  font-semibold ">
              <input
                type="checkbox"
                value={"WinterWear"}
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer "
              />
              WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}

      <div className="lg:pl-[20%] md:py-[10px] ">
        <div className="md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px] ">
          <Title text1={"OUR"} text2={"COLLECTION"} />

          <select
            name=""
            id=""
            className=" bg-slate-500 w-[50%] md:w-[200px] h-[50px] font-semibold rounded-3xl px-[10px] text-white border-2 
          hover:border-[#46d1f7] "
            onChange={handleSortChange}
          >
            <option
              value="relavent"
              className="w-[100%] h-[100%] font-semibold "
            >
              Sort By: Relavent
            </option>
            <option
              value="low-high"
              className="w-[100%] h-[100%] font-semibold"
            >
              Sort By: Low To High
            </option>
            <option
              value="high-low"
              className="w-[100%] h-[100%] font-semibold"
            >
              Sort By: High To Low
            </option>
          </select>
        </div>

        {/* PRODUCTS LIST  */}

        <div
          className="lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap 
        gap-[30px]"
        >
          {filteredProducts.map((item, index) => (
            <Cart
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default collection;
