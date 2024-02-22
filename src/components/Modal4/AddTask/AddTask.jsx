import React, { useState } from 'react';
import { X } from 'lucide-react';
import classes from './AddTask.module.css';

export default function AddTask({ topicsJson }) {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const topicsList = topicsJson.topics;

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(selectedTopic => selectedTopic !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div>
      <div className={classes.addTask}>
        <label htmlFor="AddTask" className={classes['addTask-label']}>Add Task</label>
        <div className={classes.addValue}>
          <input type="text" placeholder='Add Task' className={classes['addTask-input']} />
          <div>
            <button className={classes.addButton}>Add</button>
          </div>
        </div>
      </div>
      <div className='mt-4 text-success'>Selected topics: {selectedTopics.join(', ')}</div>
      <div className={classes.topics}>
        <ul className={classes['topics-list']}>
          {topicsList.map((topic, index) => (
            <li key={index} className={classes['list-element']} onClick={() => toggleTopic(topic)}>
              <div className={classes['list-topics']}>
                <div className={classes['topics-box']}>
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      checked={selectedTopics.includes(topic)}
                      onChange={() => toggleTopic(topic)}
                    />
                  </div>
                  <div className={classes['topic-value']}>{topic}</div>
                </div>
                <div className="cancel">
                  <button className={classes['cancel-button']}>
                    <X className={classes['cancel-icon']} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
