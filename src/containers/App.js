// App.js

import React, { useEffect, useState } from 'react';
import NameEntry from '../components/NameEntry';
import NameLength from '../components/NameLength';
import NameFact from '../components/NameFact';
import LetterFacts from '../components/LetterFacts';

const App = () => {
  const [name, setName] = useState('');
  const [nameLengthFact, setNameLengthFact] = useState('');
  const [letterFacts, setLetterFacts] = useState([]);

  useEffect(() => {
    if(name.length > 0) {
      const nameChange = async () => {
        const nameFact = await fetchNumberFact(name.length);
        setNameLengthFact(nameFact);

        const nameArray = name.split("");
        const letters = await Promise.all(nameArray.map(async (letter, i) => {
          const alphaCode = alphabetCode(letter);
          const letterFact = await fetchNumberFact(alphaCode);
          return { 'letter': letter, 'alphabetNumber': alphaCode, 'fact': letterFact };
        }));
        setLetterFacts(letters);        
      };
      nameChange();
    } else {
      setNameLengthFact('');
      setLetterFacts([]);
    }
  }, [name]);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const fetchNumberFact = async (number) => {
    const resp = await fetch(`http://numbersapi.com/${number}/trivia`);
    const text = resp.text();
    return text;
  };

  const alphabetCode = (letter) => {
    return letter.toLowerCase().charCodeAt() - 96;
  }

  return (
    <div>
      <h1>Enter your name and we'll tell you something numberish about it!</h1>
      <NameEntry onNameChange={handleNameChange} />
      <h1>Hello, {name || 'Stranger'}!</h1>
      <NameLength nameLength={name.length} />
      <NameFact nameLengthFact={nameLengthFact} />
      <LetterFacts letterFacts={letterFacts}/>
    </div>
  );
};

export default App;
