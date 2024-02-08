import PropTypes from "prop-types";

const FormInput = ({
  divClassName,
  label,
  labelExtraClassName,
  id,
  type,
  value,
  placeholder,
  inputExtraClassName,
  handleOnChange,
  required,
  // childern,
}) => {
  return (
    <div className={`mb-3 ${divClassName}`}>
      <label htmlFor={id} className={`block mb-2 ${labelExtraClassName}`}>
        {label}
        {required ? (
          <span className="text-red-500 pl-0.5 align-middle">*</span>
        ) : (
          ""
        )}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`rounded outline-none w-full p-2  ${inputExtraClassName}`}
        onChange={handleOnChange}
        required={required}
      />
      {/* {childern} */}
    </div>
  );
};

FormInput.propTypes = {
  divClassName: PropTypes.string,
  label: PropTypes.string,
  labelExtraClassName: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  inputExtraClassName: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
  // childern: PropTypes.childern,
};

export default FormInput;
