import PropTypes from "prop-types";
import { useState } from "react";

const EditProductForm = ({ editProduct, task }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // add items
      editProduct(value, task.id);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="bg-stone-100 rounded w-60 p-1 pl-2 outline-none"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="bg-emerald-500 shadow-lg hover:bg-emerald-600 font-semibold hover:text-white rounded p-1"
      >
        Update Task
      </button>
    </form>
  );
};

EditProductForm.propTypes = {
  editProduct: PropTypes.func,
  task: PropTypes.object,
};
export default EditProductForm;
