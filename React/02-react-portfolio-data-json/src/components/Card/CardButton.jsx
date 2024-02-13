import PropTypes from "prop-types";
const CardButton = ({ label, type, children }) => {
  return (
    <div className=" flex  items-center space-x-1 w-fit text-sm bg-purple-400 px-2 py-1 rounded-md text-purple-950 hover:bg-purple-600 hover:text-white hover:shadow-sm hover:shadow-black">
      {children}
      <button data-tooltip-target="tooltip-default" type={type}>
        {label}
      </button>
    </div>
  );
};
CardButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.object,
};

export default CardButton;
