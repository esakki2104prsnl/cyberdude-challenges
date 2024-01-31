import React from "react";
import img from "../assets/img/esakki.png";

const Image = () => {
  return (
    <div className="mx-4 flex items-center justify-between  ">
      <img
        src={img}
        alt="esakki image"
        className="object-fill sm:w-60 scale-125 sm:scale-150"
      />
      <div className="bg-gray-400 w-[180px] p-1 text-center  float-right z-20 relative rounded-md shadow-black shadow-xl">
        <a
          href="https://www.linkedin.com/in/esakki-m/"
          target="_blank"
          className="hover:underline "
        >
          <h1 className="font-bold text-2xl font-serif">Esakki M</h1>
        </a>
        <p className="font-semibold text-xs">Jr. Fullstack Engineer</p>
      </div>
    </div>
  );
};

export default Image;
