import React from "react";

function ButtonExample() {
  const variants = [
    {
      key: "primary",
      bg: "bg-blue-500",
      bgHover: "hover:bg-blue-600",
      text: "text-blue-700",
    },
    {
      key: "secondary",
      bg: "bg-stone-400",
      bgHover: "hover:bg-stone-500",
      text: "text-stone-200",
    },
    {
      key: "success",
      bg: "bg-green-500",
      bgHover: "hover:bg-green-600",
      text: "text-green-200",
    },
    {
      key: "danger",
      bg: "bg-red-500",
      bgHover: "hover:bg-red-600",
      text: "text-red-200",
    },
    {
      key: "warning",
      bg: "bg-yellow-500",
      bgHover: "hover:bg-yellow-600",
      text: "text-yellow-200",
    },
    {
      key: "info",
      bg: "bg-sky-500",
      bgHover: "hover:bg-sky-600",
      text: "text-sky-200",
    },
    {
      key: "info",
      bg: "bg-gray-300",
      bgHover: "hover:bg-gray-400",
      text: "text-white",
    },
    {
      key: "dark",
      bg: "bg-black",
      bgHover: "hover:bg-stone-800",
      text: "text-white",
    },
  ];

  const result = variants.map(({ key, bg, bgHover }) => {
    // console.log(variant);
    return (
      <>
        <div className="pb-2 mx-14 my-2 px-32 sm:px-0">
          <button
            className={`flex flex-row w-28  ${bg} p-2  rounded-lg text-white ${bgHover} `}
            key={key}
          >
            <div className="mx-auto font-semibold">{key}</div>
          </button>
        </div>
      </>
    );
  });
  return <>{result}</>;
}

export default ButtonExample;
