import Admin from "./components/Admin";
import ConditionRendering from "./components/ConditionRendering";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Product from "./components/Product";
import UseState from "./components/UseState";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";
import PlanSelection from "./logical/PlanSelection";
import Train from "./logical/Train";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <h1>Parent Page</h1>
      <ConditionRendering/>
    </div>
  );
}

export default App;
