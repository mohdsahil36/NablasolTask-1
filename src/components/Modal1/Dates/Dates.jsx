import React from "react";
import classes from './Dates.module.css';

export default function Dates({startDate,endDate,handleFormData}) {
  return (
    <>
      <div>
        <label htmlFor="startDate" className={classes["dates-title"]}>
          Dates
        </label>
        <div className="">
          <div className={`${classes["select-dates"]}`}>
            <div className={classes['dates']}>
              <div className="">
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => handleFormData("startDate")(e)}
                  className={classes["start-date"]}
                  required
                />
              </div>
              <div className="text-secondary separator">-</div>
              <div className="">
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => handleFormData("endDate")(e)}
                  className={classes["end-date"]}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
