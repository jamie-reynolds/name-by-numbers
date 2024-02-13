// App.js

import React, { useEffect, useState } from 'react';
import NameEntry from '../components/NameEntry';
import NameLength from '../components/NameLength';
import NameFact from '../components/NameFact';

const App = () => {
  const [name, setName] = useState('');
  const [nameLength, setNameLength] = useState(0);
  const [nameLengthFact, setNameLengthFact] = useState('');

  useEffect(() => {
    setNameLength(name.length);
  }, [name]);

  useEffect(() => {
    console.log('nameLength', nameLength);
    if(nameLength !== 0 && name !== '') {
      fetch(`http://numbersapi.com/${nameLength}/trivia`)
        .then(resp => resp.text())
        .then(text => setNameLengthFact(text));
    } else {
      setNameLengthFact('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameLength]);

  const handleNameChange = (newName) => {
    console.log('handleNameChange');
    setName(newName);
  };

  return (
    <div>
      <h1>Enter your name and we'll tell you something numberish about it!</h1>
      <NameEntry onNameChange={handleNameChange} />
      <h1>Hello, {name || 'Stranger'}!</h1>
      <NameLength nameLength={nameLength} />
      <NameFact nameLengthFact={nameLengthFact} />
    </div>
  );
};

export default App;
