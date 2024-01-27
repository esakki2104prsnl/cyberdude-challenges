import React from "react";
import img from "../assets/img/esakki.png";

const Image = () => {
  return (
    <div className="mx-10 flex items-center justify-between pt-16 ">
      <img
        src={img}
        alt="esakki image"
        className="object-fill w-60 scale-150"
      />
      <div className="bg-gray-400 w-48  p-3 float-right z-20 relative rounded-md shadow-black shadow-xl">
        <h1 className="font-bold text-2xl font-serif">Esakki M</h1>
        <p className="font-semibold text-xs">Junior Fullstack Engineer</p>
      </div>
      <span className="bg-red-900 h-2 w-14 fixed right-[100px]  bottom-[254px] "></span>
      {/* <span className="bg-red-900 h-2 w-13 fixed right-[260px]  bottom-[228px] "></span> */}
    </div>
  );
};

export default Image;
