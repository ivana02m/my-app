//import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  NavLink,
  
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./navbar.css";
 
export default function Navbar(){
    return (
      <div>
          <Router>
            <div className="wrapper" style={{ display: 'flex' }}>
              <div className="sidebar">
                <ul>
                  <li><NavLink to="/" >Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
              <div className="content">    
                <Routes>
                  <Route path="/" element={<Home/>}/> 
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                </Routes>
              </div>
            </div>
          </Router>
      </div>
    );
};






























/*import React, { Component, } from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  NavLink,
  
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./navbar.css";
 
class Navbar extends Component {
  render() {
    return (
      <div>
          <Router>
            <div className="wrapper" style={{ display: 'flex' }}>
              <div className="sidebar">
                <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
              <div className="content">    
                <Routes><Route path="/" element={<Home/>}/> </Routes>
                <Routes><Route path="/about" element={<About/>}/></Routes>
                <Routes><Route path="/contact" element={<Contact/>}/></Routes>
              </div>
            </div>
          </Router>
      </div>
    );
  }
}
 
export default Navbar;*/