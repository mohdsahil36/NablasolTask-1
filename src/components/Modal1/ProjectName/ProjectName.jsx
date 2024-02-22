import React from "react";
import classes from './ProjectName.module.css';

export default function ProjectName({projectName,handleFormData,savedFormData}) {
  console.log(savedFormData.projectName);
  return (
    <>
      <h3 className={classes["modal1-heading"]}>Create a project</h3>
      <div className={classes["project-name"]}>
        <label htmlFor="projectName" className={classes["nameLabel"]}>
          Project name
        </label>
        <input
          type="text"
          id="projectName"
          placeholder="Enter project name"
          value={savedFormData.projectName ? savedFormData.projectName : ''}
          onChange={(e) => handleFormData("projectName")(e)}
          required
        />
      </div>
    </>
  );
}
