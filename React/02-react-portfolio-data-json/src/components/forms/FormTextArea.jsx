import PropTypes from "prop-types";

const FormTextArea = ({
  divClassName,
  label,
  labelExtraClassName,
  id,
  row,
  value,
  placeholder,
  extraClassName,
  handleOnChange,
  required,
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
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        rows={row}
        required={required}
        className={`rounded outline-none w-full p-2  ${extraClassName}`}
        onChange={handleOnChange}
      />
    </div>
  );
};

FormTextArea.propTypes = {
  divClassName: PropTypes.string,
  label: PropTypes.string,
  labelExtraClassName: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  row: PropTypes.number,
  placeholder: PropTypes.string,
  extraClassName: PropTypes.string,
  handleOnChange: PropTypes.func,
  required: PropTypes.bool,
};

export default FormTextArea;
