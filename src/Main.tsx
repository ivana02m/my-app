//import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function App() {
  //const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">   
      { Header () }
      <Navbar/>   
    </div>      
  );
};
