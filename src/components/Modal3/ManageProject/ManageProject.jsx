import React from "react";
import classes from "./ManageProject.module.css";

export default function ManageProject() {
  return (
    <>
      <h4 className={classes["modal-title-heading"]}>
        Who can manage projects
      </h4>
      <p className={classes["sub-text"]}>
        Don't panic- You can also customize this permissions in settings
      </p>
    </>
  );
}
