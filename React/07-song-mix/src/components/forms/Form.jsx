import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "../forms/FormInput";
import Button from "../buttons/Button";

const songFormSchema = z.object({
  folderName: z.string().min(1).max(80),
  songName: z.string().min(3).max(80),
  songLink: z.string().url(),
});
console.log(songFormSchema);

// console.log();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(songFormSchema),
  });

  const submitInput = (data) => {
    console.log(data);
  };

  return (
    <div className="px-10">
      <form action="" onSubmit={handleSubmit(submitInput)}>
        <div className="grid grid-cols-2">
          <FormInput
            id="folderName"
            name="folderName"
            label="Name of your Song Folder Name"
            placeholder="Ex: U1 Drugs, Old is gold,etc..."
            register={register("folderName")}
            error={errors.folderName}
            required
          />
          <FormInput
            id="songName"
            name="songName"
            label="Enter your favorite song name"
            placeholder="Ex: Thuli Thuli Mazhaiyaai, Edhirthu Nill, etc..."
            register={register("songName")}
            error={errors.songName}
            required
          />
        </div>
        <FormInput
          id="songLink"
          name="songLink"
          label="Enter YT link of the song"
          placeholder="Enter song link here"
          type="url"
          register={register("songLink")}
          error={errors.songLink}
          required
        />
        <div className={"flex items-center space-x-2 font-semibold"}>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor" fillRule="evenodd">
                <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773C16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318C1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593c.143-.863.698-1.723 1.464-2.383"></path>
                <path d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"></path>
              </g>
            </svg>
            Add to your favorite{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
