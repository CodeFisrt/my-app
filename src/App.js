import Admin from "./components/Admin";
import ConditionRendering from "./components/ConditionRendering";
import Contact from "./components/Contact";
import DynamicClass from "./components/DynamicClass";
import Event from "./components/Event";
import MapOperator from "./components/MapOperator";
import Product from "./components/Product";
import Style from "./components/Style";
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
      
      <MapOperator/>
    </div>
  );
}

export default App;
