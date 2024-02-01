import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabPages = () => (
  <Tabs>
    <TabList>
      <Tab>Person 1</Tab>
      <Tab>Person 2</Tab>
    </TabList>

    <TabPanel>
      <div className="border border-black p-2">
        <div className=" sm:flex sm:justify-between items-center mx-5 sm:mx-20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            className="w-20 h-20 border-2 border-black bg-white mx-auto sm:mx-0"
            alt="your dp preview"
          />
          <div className="text-center flex flex-col ">
            <label
              htmlFor="profile"
              className="pt-1 font-bold text-sm sm:text-lg"
            >
              Profile photo (Square)
            </label>
            <input
              type="file"
              className=" mt-2 p-1 bg-black text-white  rounded"
            />
          </div>
        </div>

        <div className="p-2">
          <div className="pt-3">
            <label htmlFor="time" className="label-design">
              Time
            </label>
            <input
              type="text"
              name="time"
              id="time"
              className="block w-full p-1 mt-2 rounded"
            />
          </div>
          <div className="pt-3">
            <label htmlFor="chat" className="label-design">
              Message
            </label>
            <textarea
              type="text"
              name="chat"
              id="chat"
              className="block w-full p-1 mt-2 rounded h-24"
            />
          </div>

          <div className="flex items-center space-x-2 bg-black mt-3 p-2 w-fit rounded">
            <button type="submit" className="text-white font-semibold">
              Add Message
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M18 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM12 3c5.5 0 10 3.58 10 8c0 .58-.08 1.14-.22 1.68A6.005 6.005 0 0 0 13 18l.08.95L12 19c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.14 2 11c0-4.42 4.5-8 10-8"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </TabPanel>

    <TabPanel>
      <div className="border border-black p-2">
        <div className="pt-3">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            className="block w-full p-1 mt-2 rounded"
          />
        </div>
        <div className="pt-3">
          <label htmlFor="chat">Message</label>
          <textarea
            type="text"
            name="chat"
            id="chat"
            className="block w-full p-1 mt-2 rounded h-24"
          />
        </div>
      </div>
    </TabPanel>
  </Tabs>
);

export default TabPages;
