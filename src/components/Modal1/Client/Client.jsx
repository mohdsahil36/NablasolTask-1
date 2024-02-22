import React from "react";
import { Plus } from 'lucide-react';
import classes from './Client.module.css';

export default function Client({client,handleFormData,savedFormData}) {
  return (
    <>
      <div className={classes.client}>
        <label htmlFor="client" className={classes.clientLabel}>
          Client
        </label>
        <div className={classes.clientOptions}>
          <div className={classes["client-options"]}>
            <select
              id="client"
              className={classes["client-select"]}
              value={savedFormData.client ? savedFormData.client:"" }
              onChange={(e) => handleFormData("client")(e)}
              required
              placeholder=" Select an option"
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className={classes['or-text']}>Or</div>
          <div className="new">
            <button disabled>
              <Plus className={classes["plus-icon"]} />
              New Client
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
