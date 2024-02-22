import React, { useState } from 'react';
import './App.css';
import Modal1 from './components/Modal1/Modal1';
import Modal2 from './components/Modal2/Modal2';
import Modal3 from './components/Modal3/Modal3';
import Modal4 from './components/Modal4/Modal4';
import StepperControl from './components/StepperControl';

function App() {
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    selectedButton: "" // Adding selectedButton to formData state
  });

  const handleInputData = input => e => {
    const { value } = e.target || e; // Ensure to handle the case where e.target is undefined
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  };

  const [currentModal, setCurrentModal] = useState(1);

  const nextModal = () => {
    if (currentModal === 2) {
      // Ensure a button is selected before proceeding to the next modal
      if (!formData.selectedButton) {
        alert("Please select a view.");
        return;
      }
    }
    if (!formData.projectName) {
      alert("Please enter a project name.");
    } else if (!formData.client) {
      alert("Please select a client.");
    } else if (!formData.startDate) {
      alert("Please select a start date.");
    } else if (!formData.endDate) {
      alert("Please select an end date.");
    } else {
      setCurrentModal(currentModal => currentModal + 1);
    }
  };

  const prevModal = () => {
    if(currentModal<=1){
      return;
    }
    setCurrentModal(currentModal => currentModal - 1);
  };

  const renderModal = () => {
    switch (currentModal) {
      case 1:
        return <Modal1 next={nextModal} values={formData} handleFormData={handleInputData} />;;
      case 2:
        return <Modal2 handleButtonClick={handleButtonClick} activeButton={formData.selectedButton}/>;
      case 3:
        return <Modal3 handleButtonClick={handleButtonClick} activeButton={formData.selectedButton}/>;
      case 4:
        return <Modal4 />;
      default:
        return null;
    }
  };

  // Define handleButtonClick function
  const handleButtonClick = (buttonName) => {
    setFormData(prevState => ({
      ...prevState,
      selectedButton: buttonName
    }));
  };

  return (
    <div className=''>
      <div className='render-modal'>
        {renderModal()}
        <StepperControl next={nextModal} prev={prevModal} />
      </div>
    </div>
  );
}

export default App;
