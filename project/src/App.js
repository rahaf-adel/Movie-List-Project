import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import GitCrud from "./Component/GitCrud";
import Create from "./Component/Create"
import Card from "./Component/Card";
import ToDo from "./Component/ToDo";
import Search from "./Component/Search";
import Update from "./Component/Update"
import Login from "./Component/Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import NavBar from './Component/Navbar'

function App(props) {
  const [isUserLogin , stIsUserLogin] = useState(false)
  const userAuthentication = ()=>{
    stIsUserLogin(!isUserLogin)
  }
  return (
    <div className="container">
      <NavBar isUserLogin={isUserLogin} userAuthentication = {userAuthentication} />
    </div>
  );
}

export default App;
