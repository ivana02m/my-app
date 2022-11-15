//import React from "react";
import { useState } from "react";
import "./dropdown.css";

function Dropdown({ selected, setSelected }:any) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Employee", "Programmer","Wizard"];

  return (
    <div className="main_content">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
        <span className="ddown"></span>
      </div>
       {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
       </div>
      )}
    </div>
  );
}
export default Dropdown;