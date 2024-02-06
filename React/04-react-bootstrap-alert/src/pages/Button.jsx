import React from "react";
import ButtonExample from "./ButtonExample";

function Button() {
  return (
    <div className="border-l-red-400  border-l px-3 pt-4 pb-8 max-w-fit">
        <h2 className="text-xl font-semibold mb-5 text-white">Button </h2>
        <small className="text-white">
          Use Bootstrap's custom button styles for actions in forms, dialogs,
          and more with support for multiple sizes, states, and more.
        </small>
      <ButtonExample />
    </div>
  );
}

export default Button;
