import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GitCrud from "./GitCrud";
import Create from "./Create"
import Card from "./Card";
import ToDo from "./ToDo";
import Search from "./Search";
import Update from "./Update"
import Login from "./Login"

function Navbar(props) {
    const {isUserLogin,userAuthentication} = props
  return (
    <div>
         <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Card">Card</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/ToDo">ToDo</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Search">Search</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/GitCrud">GitCrud</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Create">Create</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Update">Update</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <Routes>
          <Route path="/"></Route>
          <Route path="/ToDo" element={<ToDo />}></Route>
          <Route path="/Card" element={<Card card={props.cardInfo} />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/GitCrud" element={<GitCrud />}></Route>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/Update" element={<Update />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Navbar