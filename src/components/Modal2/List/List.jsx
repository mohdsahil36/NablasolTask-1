import React from "react";
import { ClipboardList } from "lucide-react";
import classes from "./List.module.css";

export default function List({handleButtonClickInternal,activeButton}) {
  return (
    <>
      <div className="">
        <button
          className={`${classes["list-option"]} ${
            activeButton === "list" ? classes["highlight"] : ""
          }`}
          onClick={() => handleButtonClickInternal("list")}
        >
          <ClipboardList className={classes.icon} />
        </button>
        <div className="text-center">
          <p className={classes["type"]}>List</p>
        </div>
      </div>
    </>
  );
}
