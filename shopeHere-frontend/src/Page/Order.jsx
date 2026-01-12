import React, { useContext, useState } from "react";
import { shopDataContext } from "../context/ShopContext";

function Order() {
  const { cartItems, products, currency } = useContext(shopDataContext);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    email: "",
    house: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleInput = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // FILTER CART PRODUCTS
  const cartProducts = products.filter((item) => cartItems[item._id]);

  // CALCULATE SUBTOTAL CORRECTLY (BASED ON SIZES)
 const subtotal = cartProducts.reduce((total, item) => {
   const sizes = Object.keys(cartItems[item._id] || {});
   let itemTotal = 0;

   sizes.forEach((size) => {
     const qty = Number(cartItems[item._id][size]) || 0;
     itemTotal += item.price * qty;
   });

   return total + itemTotal;
 }, 0);

  const shipping = subtotal > 999 ? 0 : 40;
  const total = subtotal + shipping;

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#141414] to-[#0c2025] text-white px-4 md:px-10 py-20 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold mb-10 text-cyan-300">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT — ADDRESS FORM */}
        <div className="lg:w-1/2 w-full bg-[#1a2b30] p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-5 text-cyan-200">
            Shipping Details
          </h2>

          <div className="flex flex-col gap-4">
            {[
              "name",
              "phone",
              "email",
              "house",
              "city",
              "state",
              "pincode",
            ].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.toUpperCase()}
                value={address[field]}
                onChange={handleInput}
                required
                className="p-3 bg-[#ffffff15] rounded-lg outline-none"
              />
            ))}
          </div>
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="lg:w-1/2 w-full bg-[#1a2b30] p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-5 text-cyan-200">
            Order Summary
          </h2>

          {cartProducts.map((item) => {
            const sizes = Object.keys(cartItems[item._id]);

            return sizes.map((size) => (
              <div
                key={item._id + size}
                className="flex justify-between mb-3 border-b border-gray-600 pb-2"
              >
                <img src={item.image1} alt="" className="w-[100px]" />
                <p>
                  {item.name}{" "}
                  <span className="text-sm text-gray-300">(Size: {size})</span>
                </p>
                <p>
                  {currency} {item.price} × {cartItems[item._id][size]}
                </p>
              </div>
            ));
          })}

          <div className="mt-5 space-y-2 text-lg">
            <p>
              Subtotal:
              <span className="float-right">
                {currency} {subtotal}
              </span>
            </p>
            <p>
              Shipping:
              <span className="float-right">
                {currency} {shipping}
              </span>
            </p>
            <p className="font-bold text-xl">
              Total:
              <span className="float-right text-cyan-300">
                {currency} {total}
              </span>
            </p>
          </div>

          <button className="mt-7 w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold hover:bg-cyan-300"
        
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
