import TheNavBar from "./components/TheNavBar";
import Form from "./components/forms/Form";

const App = () => {
  return (
    <div className="bg-teal-200 min-h-screen">
      <TheNavBar />
      <div>
        <Form />
      </div>
    </div>
  );
};

export default App;
