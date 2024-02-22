import React from 'react';
import { Users } from "lucide-react";
import classes from './Specific.module.css';

export default function Specific({selectedOption,handleOptionClick}){
    return(
    <>
        <div className='specific'>
          <button
            className={`${classes.guest} ${
              selectedOption === "specific" ? classes.selected : ""
            }`}
            onClick={() => handleOptionClick("specific")}
          >
            <div className="d-flex">
              <div className="option-icon">
                <Users className={classes["list-filter"]} strokeWidth={1} />
              </div>
              <div className={classes["option-desc"]}>
                <p className={classes.guestTitle}>Only to specific people</p>
                <p className={classes.guestDesc}>
                  Only some specific people can see it
                </p>
              </div>
            </div>
          </button>
        </div>
    </>
    )
}