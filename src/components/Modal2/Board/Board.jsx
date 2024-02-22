import React from "react";
import {LayoutDashboard} from 'lucide-react'
import classes from './Board.module.css';

export default function Board({ handleButtonClickInternal, activeButton }) {
  return (
    <>
      <div className="">
        <button
          className={`${classes["list-option"]} ${
            activeButton === "board" ? classes["highlight"] : ""
          }`}
          onClick={() => handleButtonClickInternal("board")}
        >
          <LayoutDashboard className={classes.icon} />
        </button>
        <div className="text-center">
          <p className={classes["type"]}>Board</p>
        </div>
      </div>
    </>
  );
}
