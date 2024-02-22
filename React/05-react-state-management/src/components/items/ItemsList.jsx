import PropTypes from "prop-types";

const ItemsList = ({ task, editProduct, deleteProduct }) => {
  return (
    <div className="flex items-center hover:text-white justify-between max-w-xl rounded mx-auto bg-rose-500 hover:bg-rose-600 p-2 mb-2">
      <p className="p-1 text-lg  font-medium">{task.task}</p>
      <div className="flex space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className="text-white hover:text-black hover:cursor-pointer"
          onClick={() => {
            editProduct(task.id);
          }}
        >
          <path
            fill="currentColor"
            d="M9 15v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662L13.25 15zm10.6-9.2l1.425-1.4l-1.4-1.4L18.2 4.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925L7 9.925V17h7.05L21 10.05V19q0 .825-.587 1.413T19 21z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          className="text-white hover:text-black hover:cursor-pointer"
          onClick={() => {
            deleteProduct(task.id);
          }}
        >
          <path
            fill="currentColor"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

ItemsList.propTypes = {
  task: PropTypes.object,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default ItemsList;
