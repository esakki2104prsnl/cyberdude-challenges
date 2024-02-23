import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// FireBase
import { useEffect, useState } from "react";
import { db } from "../../firebase/index";

// import propTypes from "prop-types";
import FormInput from "../forms/FormInput";
import Button from "../buttons/Button";
import { addDoc, collection, getDocs } from "firebase/firestore";
import FormHeader from "./FormHeader";

const songFormSchema = z.object({
  folderName: z.string().min(1).max(80),
  movieName: z.string().min(3).max(80),
  songName: z.string().min(3).max(80),
  songLink: z.string().url(),
});

// console.log();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(songFormSchema),
  });

  const [folder, setFolder] = useState([]);
  const COLLECTION_NAME = "songify";

  const sendThisToServer = async (data) => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset();
  };

  useEffect(() => {
    async function getDataFromFireBase() {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));

      setFolder(querySnapshot.docs.map((doc) => doc.data()));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
    getDataFromFireBase();
  }, []);

  return (
    <>
      <div className="px-10  mx-20 mt-5 bg-teal-800 rounded-lg p-5 shadow-2xl shadow-teal-900">
        <FormHeader />
        <form action="" onSubmit={handleSubmit(sendThisToServer)}>
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
              id="movieName"
              name="movieName"
              label="Enter movie name from your fav Song"
              placeholder="Enter Movie Name"
              type="text"
              register={register("movieName")}
              error={errors.movieName}
              required
            />
          </div>
          <FormInput
            id="songName"
            name="songName"
            label="Enter your favorite song name"
            placeholder="Ex: Thuli Thuli Mazhaiyaai, Edhirthu Nill, etc..."
            register={register("songName")}
            error={errors.songName}
            required
          />
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

      <section className="mt-10 mx-20 pb-5">
        <h1 className="font-bold text-2xl underline pb-5">Your Songify List</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-white ">
            <thead className="text-xs text-teal-900 uppercase bg-teal-50 dark:bg-teal-400 dark:text-teal-900">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Folder Name
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Movie Name</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">YouTube Link</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {folder.map((list, index) => (
                <tr
                  key={index + 1}
                  className=" border-black bg-teal-600 hover:bg-teal-700 text-lg"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-teal-900 whitespace-nowrap dark:text-white"
                  >
                    {list.folderName}
                  </th>
                  <td className="px-6 py-4">{list.movieName}</td>
                  <td className="px-6 py-4">
                    <a
                      href={list.songLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      #{list.songName}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="flex items-center  mx-auto w-fit  font-semibold bg-black p-1 rounded text-red-400 dark:text-red-400 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"
                        ></path>
                      </svg>
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

// Form.propTypes = {
//   Button: propTypes.element,
// };
export default Form;
