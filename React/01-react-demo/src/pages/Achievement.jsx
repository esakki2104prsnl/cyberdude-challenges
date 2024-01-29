import { useParams } from "react-router-dom";

const Achievement = () => {
  const { dynamic } = useParams();
  // console.log(parms);
  return (
    <div className="h-screen w-fit text-center mx-auto mt-20 sm:mt-40">
      <h1 className=" text-red-600 bg-black w-fit p-3 rounded font-semibold text-xl">
        This {dynamic}🌐URL under building
      </h1>
    </div>
  );
};

export default Achievement;
