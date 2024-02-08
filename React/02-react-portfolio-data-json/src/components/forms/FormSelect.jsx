import PropTypes from "prop-types";

const FormSelect = ({
  divClassName,
  label,
  labelExtraClassName,
  id,
  inputExtraClassName,
  value,
  select,
  select1,
  select2,
  select3,
  handleOnChange,
}) => {
  return (
    <div className={`mb-3 ${divClassName}`}>
      <label htmlFor={id} className={`block mb-2 ${labelExtraClassName}`}>
        {label}
      </label>
      <select
        name={id}
        id={id}
        value={value}
        className={`rounded outline-none w-full p-2  text-gray-400 ${inputExtraClassName}`}
        onChange={handleOnChange}
        placeholder="select"
      >
        <option>{select}</option>
        <option>{select1}</option>
        <option>{select2}</option>
        <option>{select3}</option>
      </select>
    </div>
  );
};

FormSelect.propTypes = {
  divClassName: PropTypes.string,
  label: PropTypes.string,
  labelExtraClassName: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  inputExtraClassName: PropTypes.string,
  select: PropTypes.string,
  select1: PropTypes.string,
  select2: PropTypes.string,
  select3: PropTypes.string,
  handleOnChange: PropTypes.func,
};

export default FormSelect;
