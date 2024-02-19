import PropTypes from "prop-types";

const InternsCard = ({ name, gender, github, tasks, linkedIn, instgram }) => {
  return (
    <>
      <div className="bg-white h-fit m-2 rounded-lg shadow-xl">
        <div className="p-3 text-center ">
          <div className="inline-block">
            <img
              className="rounded-full w-24 "
              src={`${github}.png`}
              alt={name}
            />
          </div>
          <div className=" font-semibold pb-2">
            <h1>{name}</h1>
            <span>({gender})</span>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <a
              href={tasks}
              target="_blank"
              rel="noreferrer"
              className="font-medium  bg-lime-400 hover:bg-lime-600 p-1.5 rounded hover:text-white hover:cursor-pointer"
            >
              Tasks
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="font-medium  bg-lime-400 hover:bg-lime-600 p-1.5 rounded hover:text-white hover:cursor-pointer"
            >
              GitHub
            </a>
            <a
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              className="font-medium  bg-lime-400 hover:bg-lime-600 p-1.5 rounded hover:text-white hover:cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href={instgram}
              target="_blank"
              rel="noreferrer"
              className="font-medium  bg-lime-400 hover:bg-lime-600 p-1.5 rounded hover:text-white hover:cursor-pointer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

InternsCard.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  github: PropTypes.string,
  tasks: PropTypes.string,
  linkedIn: PropTypes.string,
  instgram: PropTypes.string,
  png: PropTypes.string,
};

export default InternsCard;
