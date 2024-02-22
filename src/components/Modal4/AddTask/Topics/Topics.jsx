import React, { useState } from "react";
import { X } from 'lucide-react';
import classes from "./Topics.module.css";

export default function Topics({ topicsList,selectedTopicValues }) {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(selectedTopic => selectedTopic !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  selectedTopicValues(selectedTopics);
  

  return (
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
                        <X className={classes['cancel-icon']}/>
                    </button>
                </div>
            </div>
          </li>
        ))}
      </ul>
      <div>Selected topics: {selectedTopics.join(', ')}</div>
    </div>
  );
}
