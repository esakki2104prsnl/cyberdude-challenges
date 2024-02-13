import PropTypes from "prop-types";

const Cards = ({ type, children }) => {
  const setWidth = {
    normal:
      "bg-gray-200  max-w-sm max-h-xl rounded-md border border-gray-900  transition hover:translate-y hover:scale-105 hover:bg-gray-100",
  };
  return (
    <>
      <div className={setWidth[type]}>
        <div>{children}</div>
      </div>
    </>
  );
};

Cards.propTypes = {
  type: PropTypes.string,
  children: PropTypes.array,
};

export default Cards;
