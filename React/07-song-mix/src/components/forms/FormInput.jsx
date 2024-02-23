import PropTypes from "prop-types";

const FormInput = ({
  label,
  type = "text",
  placeholder,
  id,
  register,
  error,
}) => {
  return (
    <div className="space-y-2 p-2">
      <div className="flex justify-between items-center">
        <label
          className={
            error ? "font-semibold text-red-400" : "font-semibold text-white"
          }
        >
          {label}
        </label>
        {error && <small className="text-red-300">{error.message}</small>}
      </div>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className={
          error
            ? "p-2 rounded bg-red-300 w-full outline-none placeholder:text-stone-800"
            : "p-2 rounded bg-teal-100 w-full outline-none placeholder:text-gray-500"
        }
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};

export default FormInput;
