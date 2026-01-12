import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";

function contect() {
  return (
     <div className="w-full py-16 flex flex-col items-center bg-gradient-to-r from-[#141414] to-[#0c2025] text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#bff1f9]">Contact Us</h2>
      <p className="text-gray-300 mt-2">We’d love to hear from you!</p>

      {/* Main Content */}
      <div className="w-[90%] lg:w-[80%] mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT - Contact Details */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-[#bff1f9] mb-4">
            Get In Touch
          </h3>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#bff1f9] text-2xl" />
            <p className="text-gray-200">+91 9608266458</p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#bff1f9] text-2xl" />
            <p className="text-gray-200">support@shophere.com</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <FaLocationArrow className="text-[#bff1f9] text-2xl" />
            <p className="text-gray-200">New Delhi, India</p>
          </div>
        </div>

        {/* MIDDLE - Contact Form */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold text-[#bff1f9] mb-6">
            Send Us a Message
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-md bg-white/5 border border-white/20 text-gray-100 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-md bg-white/5 border border-white/20 text-gray-100 outline-none"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="col-span-2 p-3 rounded-md bg-white/5 border border-white/20 text-gray-100 outline-none"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message..."
              className="col-span-2 p-3 rounded-md bg-white/5 border border-white/20 text-gray-100 outline-none"
            ></textarea>

            {/* Button */}
            <button className="col-span-2 bg-[#bff1f9] text-black py-3 rounded-md font-semibold hover:bg-[#aef1ff] duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-[90%] lg:w-[80%] mt-12">
        <iframe
          title="Google Map"
          className="w-full h-[300px] lg:h-[400px] rounded-xl border border-white/20"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.652020530237!2d80.94703477508492!3d26.78835287669751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2ebd65abf63%3A0xc5b4aa1bea1261d!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default contect;
