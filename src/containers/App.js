// App.js

import React, { useEffect, useState } from 'react';
import NameEntry from '../components/NameEntry';
import NameLength from '../components/NameLength';
import NameFact from '../components/NameFact';

const App = () => {
  const [name, setName] = useState('');
  const [nameLengthFact, setNameLengthFact] = useState('');

  useEffect(() => {
    if(name.length !== 0) {
      fetch(`http://numbersapi.com/${name.length}/trivia`)
        .then(resp => resp.text())
        .then(text => setNameLengthFact(text));
    } else {
      setNameLengthFact('');
    }
  }, [name]);

  const handleNameChange = (newName) => {
    console.log('handleNameChange');
    setName(newName);
  };

  return (
    <div>
      <h1>Enter your name and we'll tell you something numberish about it!</h1>
      <NameEntry onNameChange={handleNameChange} />
      <h1>Hello, {name || 'Stranger'}!</h1>
      <NameLength nameLength={name.length} />
      <NameFact nameLengthFact={nameLengthFact} />
    </div>
  );
};

export default App;
