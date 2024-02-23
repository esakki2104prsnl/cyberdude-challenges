import propTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="text-md flex items-center gap-x-1 bg-teal-300 hover:bg-teal-400 p-2 rounded m-2 font-semibold hover:cursor-pointer">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.array,
};

export default Button;
