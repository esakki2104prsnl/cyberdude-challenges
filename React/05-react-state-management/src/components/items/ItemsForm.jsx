import PropTypes from "prop-types";
import { useState } from "react";

const ItemsForm = ({
  type = "string",
  placeholder,
  extraClassName,
  addProduct,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // add items
      addProduct(value);
      // clear after submission
      setValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-x-2 ">
        <input
          type={type}
          placeholder={placeholder}
          className={extraClassName}
          value={value}
          autoFocus
          // onKeyDown={handleEnter}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-emerald-500 shadow-lg hover:bg-emerald-600 font-semibold hover:text-white rounded p-1"
        >
          Add item
        </button>
      </form>
    </>
  );
};

ItemsForm.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  extraClassName: PropTypes.string,
  addProduct: PropTypes.func,
};

export default ItemsForm;
