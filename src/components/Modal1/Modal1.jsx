import React from "react";
import ProjectName from "./ProjectName/ProjectName";
import Client from './Client/Client';
import Notes from "./Notes/Notes";
import Dates from "./Dates/Dates";

export default function Modal1({next, values, handleFormData,savedFormData}) {

  const submitFormData = (e) => {
    e.preventDefault();

    const { projectName, client, startDate, endDate } = values;

    if (
      projectName.trim() === "" ||
      client.trim() === "" ||
      startDate.trim() === "" ||
      endDate.trim() === ""
    ) {
      setError(true);
    } else {
      next();
    }
  };

  return (
    <form className="container modal1" onSubmit={submitFormData}>
      <ProjectName next={next} values={values} handleFormData={handleFormData} savedFormData={savedFormData}/>
      <Client next={next} values={values} handleFormData={handleFormData} savedFormData={savedFormData}/>
      <Dates  next={next} values={values} handleFormData={handleFormData} savedFormData={savedFormData}/>
      <Notes/>
    </form>
  );
}

