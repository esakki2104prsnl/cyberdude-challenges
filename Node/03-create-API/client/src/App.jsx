import "./index.css";
import FormInput from "./components/forms/FormInput";

function App() {
  return (
    <>
      <div className="bg-teal-200 min-h-screen">
        <header className="bg-teal-800 text-white p-2 font-medium text-xl text-center">
          Song Lisiting & Shuffle
        </header>
        <main className="container mx-auto my-10 p-10 bg-white shadow-md shadow-teal-400 rounded">
          <form>
            <FormInput
              name={"youtubeURL"}
              placeholder="Enter your fav song link"
              type="url"
              register={register("youtubeURL")}
            />
            <button className="bg-teal-300 p-2 rounded font-semibold ">
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default App;
