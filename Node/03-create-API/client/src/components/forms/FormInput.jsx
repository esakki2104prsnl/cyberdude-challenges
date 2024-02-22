import PropsTypes from "prop-types";

const FormInput = ({ type = "text", name, placeholder, register }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="outline-none rounded p-2 bg-gray-100 w-full mb-4"
      {...register}
    />
  );
};

FormInput.propTypes = {
  type: PropsTypes.string,
  name: PropsTypes.string,
  placeholder: PropsTypes.string.isRequired,
  register: PropsTypes.object.isRequired,
};

export default FormInput;
