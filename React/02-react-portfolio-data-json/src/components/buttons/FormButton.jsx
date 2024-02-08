import PropTypes from "prop-types";

const FormButton = ({ text, colorExtraClassName }) => {
  return (
    <button className={`px-4 py-2 rounded ${colorExtraClassName}`}>
      {text}
    </button>
  );
};

FormButton.propTypes = {
  text: PropTypes.string,
  colorExtraClassName: PropTypes.string
};

export default FormButton;
