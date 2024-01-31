// import React from "react";

const Home = () => {
  return (
    <div className="p-2">
      <div className="px-5 sm:px-10 mx-auto text-center border-black border-2 sm:border-none  ">
        <div className="sm:mt-44 font-bold text-sm sm:text-4xl flex justify-center items-end space-x-3">
          <h1>Hey</h1>
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            width="5%"
            className="drop-shadow-xl"
          ></img>
          <span> I'm </span>
          <span className="font-dance text-xl sm:text-5xl">ESAKKI M</span>
          <span>from Tirunelveli</span>
        </div>
        <div className="sm:pt-3">
          <span className=" sm:pl-5 pt-5 font-bold text-xl underline">
            Objective:
          </span>
          <span className="sm:pl-2  mt-2 font-semibold">
            To get an opportunity that allows me to showcase my skills and
            contribute to the <br /> company's growth and to seek a position in
            a company that can launch my career <br /> and help me to build a
            stronger skill set.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
