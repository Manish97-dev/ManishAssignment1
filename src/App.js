import React from "react";
import ClassCounter from "./Component/ClassCounter";
import FunctionCounter from "./Component/FunctionCounter";
import "./App.css";
import ControlledFunction from "./Component/ControlledFunction";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="row">
       <ClassCounter /> 
        <FunctionCounter />
       {/* <ControlledFunction/> */}
      </div>
    </div>
  );
}

export default App;
