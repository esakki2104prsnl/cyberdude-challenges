// import React from "react";

const Home = () => {
  return (
    <div className="px-10 mx-auto text-center h-screen">
      <div className="mt-44 font-bold text-4xl flex justify-center items-end space-x-3">
        <h1>Hey</h1>
        <img
          src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
          width="5%"
          className="drop-shadow-xl"
        ></img>
        <span> I'm </span>
        <span className="font-dance text-5xl">ESAKKI M</span>
        <span>from Tirunelveli</span>
      </div>
      <div className="pt-3">
        <span className=" pl-5 pt-5 font-bold text-xl underline">
          Objective:
        </span>
        <span className="pl-2  mt-2 font-semibold">
          To get an opportunity that allows me to showcase my skills and
          contribute to the <br /> company's growth and to seek a position in a
          company that can launch my career <br /> and help me to build a
          stronger skill set.
        </span>
      </div>
    </div>
  );
};

export default Home;
