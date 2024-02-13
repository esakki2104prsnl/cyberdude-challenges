// import { useState } from "react";
import { useForm } from "react-hook-form";

import FormButton from "../components/buttons/FormButton";
import FormInput from "../components/forms/FormInput";
import FormSelect from "../components/forms/FormSelect";
import FormTextArea from "../components/forms/FormTextArea";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const formSchema = z.object({
  fullName: z.string().min(3).max(20),
  email: z.string().email(),
  subject: z.string().min(5).max(25),
  socialMedia: z.any(),
  message: z.string().min(10).max(200),
});

const ContactPage = () => {
  // React Hook Zod method
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const getInfo = (data) => {
    console.log("Send Data to server", data);
  };

  // console.log(form);
  // Traditional Method
  // const [inputValue, setInputValue] = useState({
  //   fullName: "",
  //   email: "",
  //   subject: "",
  //   socialMedia: "",
  //   message: "",
  // });

  // const handleInputs = (e) => {
  //   const { name, value } = e.target;
  //   console.log(e);

  //   setInputValue((inputValue) => ({
  //     ...inputValue,
  //     [name]: value,
  //   }));
  // };

  // const submitFormToServer = (e) => {
  //   e.preventDefault();
  //   alert("Form submitted");
  // };

  return (
    <div className="max-w-3xl mx-auto min-h-96 mt-4 pb-8">
      {/* {JSON.stringify(inputValue)} */}
      <div className="bg-sky-300 p-3 shadow-lg rounded-xl  border-2 border-black bg-opacity-50">
        <div className="bg-black bg-opacity-80 p-2 rounded mx-auto w-fit">
          <h1 className="text-white font-bold text-xl text-center">
            We Connect Here
          </h1>
        </div>

        <form onSubmit={handleSubmit(getInfo)}>
          <div className="p-1 grid grid-cols-2 ">
            <FormInput
              divClassName={"p-2"}
              label={"Name"}
              labelExtraClassName={"font-bold"}
              id={"fullName"}
              name="fullName"
              type={"text"}
              // value={inputValue.fullName}
              // handleOnChange={handleInputs}
              placeholder={"Enter your First name"}
              required
              focus
              register={register("fullName")}
              error={errors.fullName}
            />

            <FormInput
              divClassName={"p-2"}
              label={"Mail Address"}
              labelExtraClassName={"font-bold"}
              id={"email"}
              name="email"
              type={"mail"}
              // value={inputValue.email}
              placeholder={"you@awesome.com"}
              // handleOnChange={handleInputs}
              register={register("email")}
              error={errors.email}
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
              // handleOnChange={handleInputs}
              register={register("subject")}
              error={errors.subject}
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
              // handleOnChange={handleInputs}
              register={register("socialMedia")}
              error={errors.socialMedia}
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
              // handleOnChange={handleInputs}
              required
              register={register("message")}
              error={errors.message}
            />
          </div>

          <div className="p-2">
            <FormButton
              text={"Send Message"}
              colorExtraClassName={
                "bg-pink-500 w-full font-bold text-lg shadow-black shadow-sm hover:shadow-md  hover:shadow-black hover:bg-sky-500 "
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
