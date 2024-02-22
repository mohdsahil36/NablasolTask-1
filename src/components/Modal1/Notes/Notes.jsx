import React from "react";
import classes from "./Notes.module.css";

export default function Notes({notes}) {
  return (
    <>
      <div className={classes["notes-title"]}>
        <label htmlFor="notes" className={classes['notes-label']}>Notes</label>
        <div className="p-0 mt-2">
          <textarea
            id="notes"
            rows="5"
            className={`${classes["opt-textArea"]} w-100`}
            placeholder="Optional"
          ></textarea>
        </div>
      </div>
    </>
  );
}
