import "./App.css";
import Articles from "./components/Articles";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="polygon" bg={true} />
      <Articles />
    </div>
  );
}

export default App;
