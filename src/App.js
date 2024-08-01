import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Product from "./components/Product";
import UseState from "./components/UseState";
import UseStateObject from "./components/UseStateObject";
import PlanSelection from "./logical/PlanSelection";
import Train from "./logical/Train";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <h1>Parent Page</h1>
        <Train/>
    </div>
  );
}

export default App;
