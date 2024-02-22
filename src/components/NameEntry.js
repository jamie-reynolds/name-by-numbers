import React, { useState } from 'react';
import './NameEntry.css';

const NameEntry = ({ onNameChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterClick = () => {
    onNameChange(inputValue);
    setInputValue('');
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      onNameChange(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className='nameEntry'>
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKey} />
      <button onClick={handleEnterClick}>Enter</button>
    </div>
  );
};

export default NameEntry;
