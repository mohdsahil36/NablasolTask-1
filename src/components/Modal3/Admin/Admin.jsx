import React from "react";
import { CircleUserRound } from "lucide-react";
import classes from "./Admin.module.css";

export default function Admin({selectedOption,handleOptionClick}) {
  return (
    <>
      <div className="admin">
        <button
          className={`${classes.admin} ${
            selectedOption === "admin" ? classes.selected : ""
          }`}
          onClick={() => handleOptionClick("admin")}
        >
          <div className="d-flex">
            <div className="option-icon">
              <CircleUserRound
                className={classes["list-filter"]}
                strokeWidth={1}
              />
            </div>
            <div className={classes["option-desc"]}>
              <p className={classes.adminTitle}>Only Admin's</p>
              <p className={classes.adminDesc}>
                Only admins can manage everything
              </p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
