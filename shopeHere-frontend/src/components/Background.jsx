import React from "react";
import back1 from "../assets/back1.jpg";
import back2 from "../assets/back2.jpg";
import back3 from "../assets/back3.jpg";
import back4 from "../assets/back4.jpg";

function Background({ heroCount }) {
  const images = [back1, back2, back3, back4];

  return (
    <img
      src={images[heroCount]}
      alt="background"
      className="
        w-full              /* full width on mobile */
        h-[60vh]            /* mobile height */
        md:h-full           /* full height for big screens */
        md:w-1/2            /* desktop: 50% width */
        md:float-right
        object-cover
        absolute            /* place behind hero text */
        right-0
        top-0
        z-0
      "
    />
  );
}

export default Background;
