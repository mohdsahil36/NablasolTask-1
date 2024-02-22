import React from "react";
import classes from './Dates.module.css';

export default function Dates({values,handleFormData,savedFormData}) {
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
                  onChange={(e) => handleFormData("startDate")(e)}
                  className={classes["start-date"]}
                  value={savedFormData.startDate ? savedFormData.startDate:""}
                  required
                />
              </div>
              <div className="text-secondary separator">-</div>
              <div className="">
                <input
                  type="date"
                  id="endDate"
                  value={savedFormData.endDate ? savedFormData.endDate:""}
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
