const Education = () => {
  // Education Datas
  const educationData = [
    {
      id: 1,
      title: "Francis Xavier Engineering College",
      location: "📍 Vannerpettai, Tirunelveli",
      degree: "Bachelor of Engineering",
      department: "Mechainical Engineering",
      percentage: "8.24 CGPA",
      img: "https://i.ytimg.com/vi/HDrhm3ys_oo/maxresdefault.jpg",
      year: "2020 - 2023",
    },
    {
      id: 2,
      title: "FX Polytechinic College",
      location: "📍 Tharuvai",
      degree: "Diploma",
      department: "Mechainical Engineering",
      percentage: "84%",
      img: "https://images.jdmagicbox.com/comp/tirunelveli/54/0462p462std1300154/catalogue/f-x-polytechnic-college-munnirpallam-tirunelveli-dhmgi.jpg",
      year: "2017 - 2020",
    },
    {
      id: 3,
      title: "Angelo Matriculation Hr. Sec. School",
      location: "📍 Palayamkottai, Tirunelveli",
      degree: "SSLC",
      department: "Not-Applicable",
      percentage: "76%",
      img: "https://scontent.fixm4-1.fna.fbcdn.net/v/t39.30808-6/312095683_158739270126637_4681020504430113299_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=m1cxFJ6wbI0AX9aXvDs&_nc_ht=scontent.fixm4-1.fna&oh=00_AfAmFZO6ogAWmZRbtaqWLoAZNir6FhopdRTplCQKBCXUqw&oe=65BB0611",
      year: "2016 - 2017",
    },
  ];

  console.log(educationData);
  const eduDataTemplate = educationData.map(
    ({ title, location, degree, department, percentage, img, year }) => {
      return (
        <div className="bg-zinc-300 mt-3 rounded-lg flex items-center  shadow-xl hover:bg-gray-400">
          <img
            src={img}
            alt="school"
            className="w-[280px] h-[200px] rounded-lg p-4"
          />
          <div className="items-center flex-1 px-2 my-auto">
            <h1 className="font-bold text-xl ">
              {degree}
              <span className="text-sm font-thin pl-2">{year}</span>
            </h1>
            <span className="font-semibold text-lg">{department} -</span>
            <span className="font-semibold text-lg"> ({percentage})</span>
            <h1 className="font-semibold text-xl ">{title}</h1>
            <span className="text-lg "> {location}</span>
          </div>
        </div>
      );
    }
  );

  return <div className="max-w-3xl mx-auto">{eduDataTemplate}</div>;
};

export default Education;
