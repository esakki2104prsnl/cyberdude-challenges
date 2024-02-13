import PropTypes from "prop-types";

const FormTextArea = ({
  divClassName,
  label,
  labelExtraClassName,
  id,
  row,
  placeholder,
  extraClassName,
  // value,
  // handleOnChange,
  register,
  error,
  required,
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
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        rows={row}
        className={
          error
            ? `rounded outline-none w-full p-2 border border-red-600 bg-red-200`
            : `rounded outline-none w-full p-2  ${extraClassName}`
        }
        // value={value}
        // required={required}
        // onChange={handleOnChange}
        {...register}
      />
    </div>
  );
};

FormTextArea.propTypes = {
  divClassName: PropTypes.string,
  label: PropTypes.string,
  labelExtraClassName: PropTypes.string,
  id: PropTypes.string,
  // value: PropTypes.string,
  row: PropTypes.number,
  placeholder: PropTypes.string,
  extraClassName: PropTypes.string,
  // handleOnChange: PropTypes.func,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};

export default FormTextArea;
