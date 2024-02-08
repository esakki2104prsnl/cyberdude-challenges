import { useState } from "react";
import FormButton from "../components/buttons/FormButton";
import FormInput from "../components/forms/FormInput";
import FormSelect from "../components/forms/FormSelect";
import FormTextArea from "../components/forms/FormTextArea";

const ContactPage = () => {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    subject: "",
    socialMedia: "",
    message: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    console.log(e);

    setInputValue((inputValue) => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const submitFormToServer = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="max-w-3xl mx-auto min-h-screen mt-10">
      <div className="bg-stone-600 p-5 shadow-lg rounded-xl  border-2 border-black bg-opacity-40">
        {JSON.stringify(inputValue)}

        <form action="" onSubmit={submitFormToServer}>
          <div className="grid grid-cols-2 ">
            <FormInput
              divClassName={"p-2"}
              label={"Name"}
              labelExtraClassName={"font-bold"}
              id={"fullName"}
              name="fullname"
              type={"text"}
              value={inputValue.fullName}
              placeholder={"Enter your First name"}
              handleOnChange={handleInputs}
              autofocus
              required
            />

            <FormInput
              divClassName={"p-2"}
              label={"Mail Address"}
              labelExtraClassName={"font-bold"}
              id={"email"}
              name="emailaddress"
              type={"mail"}
              value={inputValue.email}
              placeholder={"you@awesome.com"}
              handleOnChange={handleInputs}
              required
            />
            <FormInput
              divClassName={"p-2"}
              label={"Subject"}
              labelExtraClassName={"font-bold"}
              id={"subject"}
              name="subject"
              type={"text"}
              placeholder={"Short Notes"}
              handleOnChange={handleInputs}
            />
            <FormSelect
              divClassName={"p-2"}
              name="socialMedia"
              id={"socialMedia"}
              labelExtraClassName={"font-bold"}
              label={"How do you know us?"}
              select={"--Select--"}
              select1={"Instagram"}
              select2={"LinkedIn"}
              select3={"Whatsapp"}
              handleOnChange={handleInputs}
            />
          </div>
          <div>
            <FormTextArea
              divClassName={"p-2"}
              labelExtraClassName={"font-bold"}
              id={"message"}
              name="message"
              row={4}
              label={"Message"}
              placeholder={"Your Message"}
              handleOnChange={handleInputs}
              required
            />
          </div>

          <div className="p-2">
            <FormButton
              text={"Send Message"}
              colorExtraClassName={
                "bg-pink-500 w-full font-bold text-lg shadow-black shadow-sm hover:shadow-md  hover:shadow-black hover:bg-purple-600 "
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
