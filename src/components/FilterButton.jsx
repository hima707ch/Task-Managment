import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../slices/filter';

const ButtonSelector = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const dispatch = useDispatch();

  const handleButtonClick = (option) => {

    if(selectedOption === option){
        console.log("same option")
        setSelectedOption('');
        dispatch(set('all'));
        return;
    }

    console.log("dif option");

    dispatch(set(option));

    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Add filter:</h2>
      <button
        onClick={() => handleButtonClick('Todo')}
        style={{ backgroundColor: selectedOption === 'Todo' ? 'green' : '' }}
      >
        ToDo
      </button>
      <button
        onClick={() => handleButtonClick('In Progress')}
        style={{ backgroundColor: selectedOption === 'In Progress' ? 'green' : '', marginLeft : '1rem' }}
      >
        In Progress
      </button>
      <button
        onClick={() => handleButtonClick('Completed')}
        style={{ backgroundColor: selectedOption === 'Completed' ? 'green' : '', marginLeft : '1rem' }}
      >
        Completed
      </button>
      
    </div>
  );
};

export default ButtonSelector;
