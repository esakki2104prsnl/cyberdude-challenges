import { useState } from "react";
import TabPages from "../pages/TabPages";

const HeroData = () => {
  // const input = e.target.value;

  // UserName
  const [name, setName] = useState("UserName");
  const setNameMethod = (e) => {
    setName(e.target.value);
  };

  // Chat
  const [chat, setChat] = useState("Hello!!!");
  const setChatMethod = (e) => {
    setChat(e.target.value);
  };

  // Time
  const [time, setTime] = useState("");
  const setTimeMethod = (e) => {
    setTime(e.target.value);
  };

  // Battery
  const [battery, setBattery] = useState("50");
  const setBatteryMethod = (e) => {
    setBattery(e.target.value);
  };

  return (
    <div className="mx-10 sm:flex">
      <div>
        <div className="pt-5">
          <div className="text-center p-2  bg-white opacity-90 w-fit mx-auto rounded shadow-lg">
            <h1 className="group pb-1 font-bold text-xl sm:text-2xl">
              Fake Whatsapp Chat Generator
            </h1>
            <span className="block  mx-auto duration-700  h-0.5 bg-black max-w-32"></span>
          </div>
          <div className="border-2 m-3 p-3 bg-stone-200 z-10 shadow-2xl shadow-black rounded-md">
            {/* Checkbox & Raadio button */}
            <div className="p-2 sm:p-0 flex gap-x-16 sm:gap-x-28 sm:mx-10 items-center">
              <div>
                <label className="label-design">Parts:</label>
                <div className="space-x-2">
                  <input type="checkbox" name="hide header" id="" />
                  <label>Hide Header</label>
                </div>

                <div className="space-x-2">
                  <input type="checkbox" name="hide footer" id="" />
                  <label>Hide Footer</label>
                </div>
              </div>

              <div>
                <label className="label-design">Layout:</label>
                <div className="space-x-2">
                  <input
                    type="radio"
                    name="layout"
                    id="android"
                    defaultChecked
                  />
                  <label htmlFor="android">Android</label>
                </div>

                <div className="space-x-2">
                  <input type="radio" name="layout" id="iphone" />
                  <label htmlFor="iphone">iphone</label>
                </div>
              </div>
            </div>

            {/* defaultValueInput */}
            <div className="sm:mx-10">
              <div className="pt-3">
                <label htmlFor="message" className="label-design">
                  Direct message with
                </label>
                <input
                  placeholder="Enter your friend name"
                  type="text"
                  name="message"
                  id="message"
                  className="input-design"
                  onChange={setNameMethod}
                />
              </div>

              {/*Temporary */}
              <div className="pt-3">
                <label htmlFor="chat" className="label-design">
                  Chat
                </label>
                <input
                  placeholder="Enter chat"
                  type="text"
                  name="chat"
                  id="chat"
                  className="input-design"
                  onChange={setChatMethod}
                />
              </div>

              <div className="pt-3">
                <label htmlFor="clock" className="label-design">
                  Clock
                </label>
                <input
                  type="time"
                  name="clock"
                  id="clock"
                  className="input-design"
                  onChange={setTimeMethod}
                />
              </div>

              <div className="pt-3">
                <label className="label-design" htmlFor="battery">
                  Battery Percentage
                </label>
                <input
                  // defaultValue={"50"}
                  onChange={setBatteryMethod}
                  type="text"
                  name="battery"
                  id="battery"
                  className="input-design"
                />
              </div>

              <div className="pt-3">
                <label htmlFor="operator" className="label-design">
                  Operator
                </label>
                <input
                  defaultValue={"5G"}
                  type="text"
                  name="operator"
                  id="operator"
                  className="input-design"
                />
              </div>

              <div className="pt-3">
                <label htmlFor="date" className="label-design">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="input-design"
                />
              </div>

              <div className="pt-3">
                <label htmlFor="status" className="label-design">
                  Status
                </label>
                <input
                  defaultValue={"online"}
                  type="text"
                  name="status"
                  id="status"
                  className="input-design"
                />
              </div>
            </div>
            <div className="sm:mx-10 mt-5">
              <TabPages />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="pt-5">
          <div className="text-center p-2  bg-white opacity-90 w-fit mx-auto rounded shadow-lg">
            <h1 className="group pb-1 font-bold text-xl sm:text-2xl">
              Preview Chat
            </h1>
            <span className="block  mx-auto duration-700  h-0.5 bg-black max-w-16"></span>
          </div>
          <div>
            <div className="min-w-xl w-full font-semibold">
              <div className="border-2 m-3 p-3 bg-stone-200 z-10 shadow-2xl shadow-black rounded-md">
                {/* Header of Mobile */}
                <div className="bg-white flex items-baseline justify-between p-1 sm:mx-14 px-4">
                  <p> {time != "" ? time : "10:30"}</p>
                  <div className="flex items-center space-x-1">
                    <p>5G+</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 21v-1m9 1v-9m4.5 9V8m-9 13v-5"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 14 14"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3"
                      ></path>
                    </svg>
                    <p>{battery}%</p>
                  </div>
                </div>

                {/* Contact Name of Mobile */}
                <div className="bg-white sm:mx-14 px-2 pt-2">
                  <div className="flex justify-between p-1">
                    <div className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
                        ></path>
                      </svg>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                        className="w-10 h-10 rounded-full border-black bg-white mx-auto sm:mx-0"
                        alt="your dp preview"
                      />
                      <h1 className="font-bold text-lg">{name}</h1>
                    </div>

                    <div className="flex items-center space-x-1 sm:space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20z"
                        ></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Main Chat */}
                <div className="bg-white sm:mx-14 px-2 py-2 h-screen">
                  <div className="bg-gray-200 w-fit px-4 p-2">Hello</div>
                  <div className="bg-green-200 w-fit px-4 p-2 float-right">
                    {chat}
                  </div>
                </div>

                {/* Msg Input */}
                <div className="bg-white sm:mx-14 px-1 sm:px-4 py-2 flex">
                  <div className="flex p-1 sm:p-2 space-x-2 sm:space-x-3 items-center bg-stone-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m2.492 7.36a.75.75 0 1 1-1.484-.22c.162-1.09 1.123-1.89 2.242-1.89s2.08.8 2.242 1.89a.75.75 0 1 1-1.484.22c-.048-.323-.35-.61-.758-.61c-.408 0-.71.287-.758.61M12 18c-3.142 0-5.237-2.363-5.5-5.25h11C17.237 15.637 15.142 18 12 18M8.75 8.75c-.408 0-.71.287-.758.61a.75.75 0 1 1-1.484-.22C6.67 8.05 7.631 7.25 8.75 7.25s2.08.8 2.242 1.89a.75.75 0 1 1-1.484.22c-.048-.323-.35-.61-.758-.61"
                      ></path>
                    </svg>
                    <input
                      type="text"
                      name="msg"
                      id="msg"
                      className="outline-none bg-slate-100 w-20 sm:w-fit"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="currentColor"
                          d="M18.71 17.565a4.25 4.25 0 0 0 0-6.01l-6.54-6.54A1 1 0 0 1 13.584 3.6l6.54 6.54a6.25 6.25 0 1 1-8.838 8.84l-7.954-7.955A4.501 4.501 0 0 1 9.698 4.66l7.953 7.953a2.752 2.752 0 0 1-3.892 3.891L6.513 9.257a1 1 0 0 1 1.414-1.415l7.247 7.247a.751.751 0 0 0 1.063-1.062L8.284 6.074A2.501 2.501 0 0 0 4.746 9.61l7.954 7.954a4.25 4.25 0 0 0 6.01 0Z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M15 7H9c-1.287 0-1.332 1.864-.133 1.993L9 9h1a2 2 0 0 1 1.732 1H9a1 1 0 0 0 0 2l2.732.001A2 2 0 0 1 10 13H9c-.89 0-1.337 1.077-.707 1.707l3 3a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32l-1.484-1.485l.113-.037a4.009 4.009 0 0 0 2.538-2.77L15 12a1 1 0 0 0 0-2h-1.126a3.973 3.973 0 0 0-.33-.855L13.465 9H15a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 15 7"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="13"
                        r="2.5"
                        fill="currentColor"
                      ></circle>
                      <path
                        fill="currentColor"
                        d="M16.6 2.37c2.1.27 3.77 1.93 4.03 4.03c.04.34.32.6.66.6c.39 0 .71-.34.66-.73a6.008 6.008 0 0 0-5.22-5.22c-.39-.05-.73.27-.73.66c0 .34.26.62.6.66m2.63 3.82a3.338 3.338 0 0 0-2.42-2.42c-.41-.1-.81.22-.81.65c0 .29.19.57.48.64c.72.18 1.29.74 1.46 1.46c.07.29.34.48.64.48c.43 0 .75-.4.65-.81"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M17 8c0-1.1-.9-2-2-2V4c0-.55-.45-1-1-1H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-5 9.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 8.5 12 8.5s4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1  p-1 sm:p-2 bg-green-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                      className="text-white text-center "
                    >
                      <path
                        fill="currentColor"
                        d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16q2.075 0 3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroData;
