import React from "react";
import classes from "./SelectView.module.css";

export default function SelectViewSec() {
  return (
    <>
      <h4 className={classes["modal-title-heading"]}>Select a view</h4>
      <p className={classes["sub-text"]}>
        You can also customize this view in settings
      </p>
    </>
  );
}
