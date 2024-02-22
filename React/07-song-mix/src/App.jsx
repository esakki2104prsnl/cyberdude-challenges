import TheNavBar from "./components/TheNavBar";
import FormHeader from "./components/forms/FormHeader";
import Form from "./components/forms/Form";

const App = () => {
  return (
    <div className="bg-teal-200 min-h-screen">
      <TheNavBar />
      <div className=" mx-20 mt-5 bg-teal-800 rounded-lg p-5 shadow-2xl shadow-teal-900">
        <FormHeader />
        <Form />
      </div>
    </div>
  );
};

export default App;
