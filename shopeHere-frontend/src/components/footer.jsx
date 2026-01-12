// Footer.jsx
import React, { useState } from "react";
import {
  FaShopify,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: replace with real API call
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <footer className="w-full bg-gradient-to-r from-[#0b1112] via-[#071214] to-[#071f23] text-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-3 rounded-lg">
              <FaShopify className="text-2xl text-cyan-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">ShopHere</h3>
              <p className="text-sm text-gray-300">
                Modern styles, everyday prices.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Curated collections, fast shipping, and friendly support. Join
            thousands of happy customers who shop with us every month.
          </p>

          <div className="flex items-center gap-3">
            <a
              aria-label="Facebook"
              className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              aria-label="Instagram"
              className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="Twitter"
              className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              aria-label="YouTube"
              className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition"
              href="#"
            >
              <FaYoutube />
            </a>
            <a
              aria-label="LinkedIn"
              className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition"
              href="#"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm text-gray-300 font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a className="hover:text-white transition" href="/collection">
                Collections
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/about">
                About us
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/contact">
                Contact
              </a>
            </li>
          </ul> 
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm text-gray-300 font-semibold mb-4">
            Categories
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                className="hover:text-white transition"
                href="/collection"
              >
                Men
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition"
                href="/collection"
              >
                Women
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition"
                href="/collection"
              >
                Kids
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition"
                href="/collection"
              >
                TopWear
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition"
                href="/collection"
              >
                WinterWear
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm text-gray-300 font-semibold mb-4">
            Join our newsletter
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Get exclusive offers, early access to new drops and style tips.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" />
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/5 placeholder-gray-400 text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                aria-label="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition"
            >
              Subscribe
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400">
                Thanks — you’re subscribed!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-400">
                Please enter a valid email.
              </p>
            )}
          </form>

          <div className="mt-6">
            <h5 className="text-xs text-gray-400 mb-2">We accept</h5>
            <div className="flex items-center gap-3">
              <FaCcVisa size={28} />
              <FaCcMastercard size={28} />
              <FaCcPaypal size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ShopHere — All rights reserved.
        </p>

        <div className="text-sm text-gray-400">
          <a className="hover:text-white transition px-2" href="/terms">
            Terms
          </a>
          <span className="opacity-50">|</span>
          <a className="hover:text-white transition px-2" href="/privacy">
            Privacy
          </a>
          <span className="opacity-50">|</span>
          <a className="hover:text-white transition px-2" href="/returns">
            Returns
          </a>
        </div>
      </div>
    </footer>
  );
}
