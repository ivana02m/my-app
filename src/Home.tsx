import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Search from "./Search";

export default function Home() {
  const [selected, setSelected] = useState("UserType");
  return (
    <div className="App">
     {/* custom dropdown menu */}
     <p>User Type:</p> 
     <Dropdown selected={selected} setSelected={setSelected} />
     <Search/> 
   </div>
 );
}