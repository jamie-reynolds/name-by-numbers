import React, { useState } from 'react';
import './NameEntry.css';

const NameEntry = ({ onNameChange, checkLetter }) => {
  const [inputValue, setInputValue] = useState('');
  const errMessage = 'Wow, that\'s an interesting name. I\'m afraid we only look at names with regular letters. Try again if you like!';

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterClick = () => {
    handleCheckName(inputValue);
    setInputValue('');
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleCheckName(inputValue);
      setInputValue('');
    }
  };

  const checkName = (name) => {
    for (let char of name) {
      if (!checkLetter(char) && char !== ' ') {
        return false;
      }
    }
    return true;
  }

  const handleCheckName = (name) => {
    if (!checkName(name)) {
      alert(errMessage);
      onNameChange('');
    } else {
      onNameChange(name);
    }
    return null;
  }

  return (
    <div className='nameEntry'>
      <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterKey} />
      <button onClick={handleEnterClick}>Enter</button>
    </div>
  );
};

export default NameEntry;
