import EducationData from "../data/EducationData.json";

const Education = () => {
  const eduDataTemplate = EducationData.map(
    ({ title, location, degree, department, percentage, img, year }) => {
      return (
        <div className="pb-8">
          <div className=" bg-zinc-300 sm:mt-2 mx-5 rounded-lg flex items-center  shadow-xl hover:bg-gray-400">
            <img
              src={img}
              alt="school"
              className="w-[140px] h-[100px] sm:w-[240px] sm:h-[160px] rounded-lg p-4"
            />
            <div className="items-center flex-1 p-1 sm:px-2 ">
              <h1 className="font-bold text-sm sm:text-xl ">
                {degree}
                <span className=" text-xs sm:text-sm font-light pl-2">
                  {year}
                </span>
              </h1>
              <span className="font-semibold text-sm sm:text-lg">
                {department} -
              </span>
              <span className="font-semibold text-xs sm:text-lg">
                {" "}
                ({percentage})
              </span>
              <h1 className="font-semibold text-sm sm:text-xl ">{title}</h1>
              <span className="text-sm sm:text-lg"> {location}</span>
            </div>
          </div>
        </div>
      );
    }
  );

  return <div className="max-w-3xl mx-auto">{eduDataTemplate}</div>;
};

export default Education;
