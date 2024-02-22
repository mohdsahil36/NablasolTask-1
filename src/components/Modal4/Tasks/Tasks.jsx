import React from 'react';
import classes from './Tasks.module.css';
import AddTask from '../AddTask/AddTask';
import topicsJson from '../../../assets/json/tasks.json';

export default function Task(){
    return(
        <div className="tasksHeading">
            <h4 className={classes.tasksHeading}>Tasks</h4>
            <AddTask topicsJson={topicsJson} />
        </div>
    )
}
