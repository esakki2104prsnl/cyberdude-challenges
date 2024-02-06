import React from "react";
import AlertExample from "./AlertExample";

function AlertResults() {
  return (
    <div>
      <div className="bg-gray-300 rounded-t-lg p-3">
        <h1 className="font-bold text-black text-lg tracking-widest">RESULT</h1>
      </div>
      <div className="bg-[#2a2a2a] rounded-b-lg p-5 min-h-fit space-y-4">
        <AlertExample title={"This is a primary alert—check it out!"} />
      </div>
    </div>
  );
}

export default AlertResults;
