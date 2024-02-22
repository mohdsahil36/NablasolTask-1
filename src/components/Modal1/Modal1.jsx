import React, { useState } from "react";
import validator from 'validator';
import ProjectName from "./ProjectName/ProjectName";
import Client from './Client/Client';
import Notes from "./Notes/Notes";
import Dates from "./Dates/Dates";

export default function Modal1({next, values, handleFormData}) {
  const { projectName, client, startDate, endDate } = values;
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.projectName) ||
      validator.isEmpty(values.client) ||
      validator.isEmpty(values.startDate) ||
      validator.isEmpty(values.endDate)
    ) {
      setError(true);
    } else {
      next();
    }
  };

  return (
    <form className="container modal1" onSubmit={submitFormData}>
      <ProjectName next={next} values={values} handleFormData={handleFormData}/>
      <Client next={next} values={values} handleFormData={handleFormData}/>
      <Dates  next={next} values={values} handleFormData={handleFormData}/>
      <Notes/>
    </form>
  );
}
