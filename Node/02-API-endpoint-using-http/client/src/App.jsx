import { useEffect, useState } from "react";
import TheNavBar from "./components/TheNavBar";
import InternsCard from "./components/card/InternsCard";
import "./index.css";

function App() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    async function fetchInternsData() {
      const fetchResult = await fetch("/api");
      const profileData = await fetchResult.json();

      setProfile(profileData);
    }
    fetchInternsData();
  }, []);
  return (
    <>
      <TheNavBar />
      {profile.length === 0 ? (
        <div className="pt-10">
          {" "}
          <h1 className="-10 bg-white rounded p-3 text-center font-semibold text-xl">
            No User data available:(
          </h1>
        </div>
      ) : (
        ""
      )}
      <div className="bg-lime-200 min-h-screen pt-5 px-5 grid sm:grid-cols-3 gap-y-3 gap-x-2">
        {profile.map(
          ({ id, name, gender, tasks, linkedIn, instagram, github }) => (
            <InternsCard
              key={id}
              name={name}
              gender={gender}
              github={github}
              tasks={tasks}
              linkedIn={linkedIn}
              instgram={instagram}
            />
          )
        )}
      </div>
    </>
  );
}

export default App;
