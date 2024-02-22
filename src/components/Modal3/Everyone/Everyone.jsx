import React from "react";
import { ListFilter } from "lucide-react";
import classes from "./Everyone.module.css";

export default function Everyone({handleOptionClick,selectedOption}) {
  return (
    <>
      <div className="everyone">
        <button
          className={`${classes.everyone} ${
            selectedOption === "everyone" ? classes.selected : ""
          }`}
          onClick={() => handleOptionClick("everyone")}
        >
          <div className="d-flex">
            <div className="option-icon">
              <ListFilter className={classes["list-filter"]} strokeWidth={1} />
            </div>
            <div className={classes["option-desc"]}>
              <p className={classes.everyoneTitle}>Everyone</p>
              <p className={classes.everyoneDesc}>
                All users can see it, but guests cannot access the projects
              </p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
