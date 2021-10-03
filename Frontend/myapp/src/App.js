import logo from "./logo.svg";
import "./App.css";
import Router from "./Router/Router";
import Register from "./Compoents/Register";
import { useState } from "react";

function App() {
  var register = JSON.parse(localStorage.getItem("isregister"));
  console.log(register);
  const [reg, setReg] = useState(register);

  return reg ? <Router /> : <Register />;
}

export default App;
