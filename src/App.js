import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
import GetAPI from "./components/GetAPI";
import User from "./components/User";
import Department from "./components/Department";
import ChildDepartment from "./components/ChildDepartment";
import UseEffect from "./components/UseEffect";
import { createContext } from "react"; 
import AddUser from "./components/AddUser";

const myAppContextData = createContext();

function App() {
  const myData = {
    appName: 'ReactJs Practice',
    loggedUsername: 'chetan',
    roleList: ['user','guest','admin']
  }
  return (
    <div>
       <myAppContextData.Provider value={myData}>
        <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item"> 
                <Link className="nav-link active" to="/map" >Map</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/Event" >Event</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/Condition-rendering" >Hide Show</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/get-api" >get-api</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/User" >User</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/Department" >Department</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/ChildDepartment" >ChildDepartment</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/Use-Effect" >Use-Effect</Link>
              </li>
            </ul>
          </div>
        </nav>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Event></Event>}></Route>
        <Route path="/map" element={<MapOperator></MapOperator>}></Route>
        <Route path="/adduser/:userid" element={<AddUser></AddUser>}></Route>
        <Route path="/User" element={<User></User>}></Route>
        <Route path="/Department" element={<Department></Department>}></Route>
        <Route path="/ChildDepartment" element={<ChildDepartment></ChildDepartment>}></Route>
        <Route path="/Event" element={<Event value=""></Event>}></Route>
        <Route path="/Use-Effect" element={<UseEffect></UseEffect>}></Route>
        <Route path="/get-api" element={<GetAPI></GetAPI>}></Route>
        <Route path="/Condition-rendering" element={<ConditionRendering></ConditionRendering>}></Route>
      </Routes>
        </BrowserRouter> 
       </myAppContextData.Provider>
      
    </div>
  );
}

export default App;
export {myAppContextData}
 
