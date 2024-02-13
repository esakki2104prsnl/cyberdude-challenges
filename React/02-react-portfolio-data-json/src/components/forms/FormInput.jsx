import PropTypes from "prop-types";

const FormInput = ({
  divClassName,
  label,
  labelExtraClassName,
  id,
  type,
  // value,
  placeholder,
  inputExtraClassName,
  // handleOnChange,
  register,
  error,
  required,
  focus,
  // childern,
}) => {
  return (
    <div className={`mb-3 ${divClassName}`}>
      <div className="flex justify-between items-center">
        <label
          htmlFor={id}
          className={
            error
              ? `block pb-1 text-red-500  ${labelExtraClassName}`
              : `block pb-1  ${labelExtraClassName}`
          }
        >
          {label}
          {required ? (
            <span className="text-red-500 pl-1 align-middle">*</span>
          ) : (
            ""
          )}
        </label>
        {error && <small className="text-red-700">{error.message}</small>}
      </div>
      <div></div>
      <input
        type={type}
        name={id}
        id={id}
        // value={value}
        placeholder={placeholder}
        className={
          error
            ? `rounded outline-none w-full p-2 border border-red-600 bg-red-200`
            : `rounded outline-none w-full p-2  ${inputExtraClassName}`
        }
        // onChange={handleOnChange}
        // required={required}
        autoFocus={focus}
        {...register}
      />
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
  // value: PropTypes.string,
  inputExtraClassName: PropTypes.string,
  // handleOnChange: PropTypes.func,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
  focus: PropTypes.any,
  // childern: PropTypes.childern,
};

export default FormInput;
