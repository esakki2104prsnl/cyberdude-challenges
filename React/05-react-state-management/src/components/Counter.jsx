import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // const decrement = () => {
  //   if (count === 0) {
  //     setCount = 0;
  //   } else {
  //     setCount((count) => count - 1);
  //   }
  // };

  return (
    <div>
      <div className="flex items-center justify-self-center w-fit rounded bg-green-500">
        <div
          className={count ? "w-fit cursor-pointer " : "disable text-gray-700"}
          onClick={() => {
            if (count === 0) {
              setCount(count);
            } else {
              setCount((count) => count - 1);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm12 10H7v-2h10z"
            ></path>
          </svg>
        </div>

        <div className=" text-center font-bold text-lg w-10 p-0.5 m-1">
          {count}
        </div>

        <div
          className="w-fit cursor-pointer "
          onClick={() => setCount((count) => count + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8v3H8q-.425 0-.712.288T7 12q0 .425.288.713T8 13zm-6 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Counter;
