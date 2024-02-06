import React from "react";

function AlertExample({ title }) {
  const variants = [
    {
      key: "primary",
      border: "border-blue-700",
      bg: "bg-blue-950",
      text: "text-blue-700",
    },
    {
      key: "secondary",
      border: "border-gray-700",
      bg: "bg-stone-950",
      text: "text-stone-200",
    },
    {
      key: "success",
      border: "border-green-700",
      bg: "bg-green-950",
      text: "text-green-200",
    },
    {
      key: "danger",
      border: "border-red-700",
      bg: "bg-red-950",
      text: "text-red-200",
    },
    {
      key: "warning",
      border: "border-yellow-700",
      bg: "bg-yellow-950",
      text: "text-yellow-200",
    },
    {
      key: "info",
      border: "border-sky-700",
      bg: "bg-sky-950",
      text: "text-sky-200",
    },
    {
      key: "info",
      border: "border-gray-800",
      bg: "bg-gray-200",
      text: "text-white",
    },
    {
      key: "dark",
      border: "border-black",
      bg: "bg-black",
      text: "text-white",
    },
    // "dark",
  ];

  const result = variants.map(({ key, border, bg, text }) => {
    // console.log(variant);
    return (
      <div
        className={`border ${bg} bg-opacity-30 p-4 ${border} rounded-lg`}
        key={key}
      >
        <p className={`${text} text-lg font-medium`}>{title}</p>
      </div>
    );
  });
  return <>{result}</>;
}

export default AlertExample;
