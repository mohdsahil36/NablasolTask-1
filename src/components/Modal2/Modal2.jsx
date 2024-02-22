import React from "react";
import SelectViewSec from "./SelectView/SelectView";
import List from "./List/List";
import Board from "./Board/Board";

export default function SelectView({ handleButtonClick, activeButton }) {
  const handleButtonClickInternal = (buttonName) => {
    handleButtonClick(buttonName);
  };

  return (
    <div>
      <SelectViewSec/>
      <div className="d-flex justify-content-evenly">
        <List activeButton={activeButton} handleButtonClickInternal={handleButtonClickInternal}/>
        <Board activeButton={activeButton} handleButtonClickInternal={handleButtonClickInternal}/>
      </div>
    </div>
  );
}
