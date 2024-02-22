import PropTypes from "prop-types";
// import CardButton from "./CardButton";

const CardBody = ({ title, desc }) => {
  return (
    <div className="px-3 pt-2">
      <div className="pb-1 font-bold text-lg tracking-wide flex items-center">
        <span className="text-green-500 text-2xl pr-1">#</span>
        {title}
      </div>
      <div className="text-sm pl-2 pb-1">{desc}</div>
    </div>
  );
};
CardBody.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default CardBody;
