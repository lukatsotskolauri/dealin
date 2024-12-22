import "./App.css";
import Buttons from "./componens/Buttons";
import InformationCards from "./componens/InformationCards";

function App() {
  return (
    <div className="App">
      <Buttons name1 = "Markets" name2 = "Markets" name3 = "Markets"/>
      <InformationCards />
    </div>
  );
}

export default App;
