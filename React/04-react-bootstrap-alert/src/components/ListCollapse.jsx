import React, { useState } from "react";
// import list from "../data/list.json";

function ListCollapse({
  title,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
}) {
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = () => {
    setCollapse(!collapse);
    () => setOpen(!open);
  };

  const [open, setOpen] = useState(false);
  // const [svg, setSvg] = useState(true);

  return (
    <>
      {" "}
      <li
        className={
          "px-4 py-1 mb-2 text-lg text-white" +
          (collapse ? "hidden" : "block" + "collapse")
        }
        onClick={toggleCollapse}
      >
        <div className="flex items-center justify-between w-64 p-1.5  hover:bg-gray-300  hover:bg-opacity-20 hover:rounded-md cursor-pointer">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className={collapse ? " " : "rotate-90"}
          >
            <path
              fill="currentColor"
              d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
            ></path>
          </svg>
        </div>
        <div className={collapse ? "hidden" : "block" + "collapse"}>
          {/* {children} */}
          <li className="collapse-li">{list1}</li>
          <li className="collapse-li">{list2}</li>
          <li className="collapse-li">{list3}</li>
          <li className="collapse-li">{list4}</li>
          <li className="collapse-li">{list5}</li>
          <li className="collapse-li">{list6}</li>
          <li className="collapse-li">{list7}</li>
        </div>
      </li>
    </>
  );
}
// return <div>{result}</div>;

export default ListCollapse;
