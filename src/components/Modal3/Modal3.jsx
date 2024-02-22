import React, { useState } from "react";
import ManageProject from "./ManageProject/ManageProject";
import Everyone from "./Everyone/Everyone";
import Admin from "./Admin/Admin";
import Specific from "./Specific/Specific";

export default function Modal3() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <ManageProject/>
      <div className="p-3">
        <Everyone handleOptionClick={handleOptionClick} selectedOption={selectedOption}/>
        <Admin handleOptionClick={handleOptionClick} selectedOption={selectedOption}/>
        <Specific handleOptionClick={handleOptionClick} selectedOption={selectedOption}/>
      </div>
    </div>
  );
}
