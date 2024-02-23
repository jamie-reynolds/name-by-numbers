import React, { useEffect, useState } from 'react';
import NameEntry from '../components/NameEntry';
import NameLength from '../components/NameLength';
import NameFact from '../components/NameFact';
import LetterFacts from '../components/LetterFacts';
import Greeting from '../components/Greeting';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [nameLengthFact, setNameLengthFact] = useState('');
  const [letterFacts, setLetterFacts] = useState([]);
  const [componentOrder, setComponentOrder] = useState(0);
  const totalComponents = 4;

  useEffect(() => {
    if(name.length > 0) {
      const nameChange = async () => {
        const nameFact = await fetchNumberFact(name.length);
        setNameLengthFact(nameFact);

        const letterArray = [...name].filter(letter => isLetter(letter));

        const letters = await Promise.all(letterArray.map(async (letter, i) => {
          const alphaCode = alphabetCode(letter);
          const letterFact = await fetchNumberFact(alphaCode);
          return { 'letter': letter, 'alphabetNumber': alphaCode, 'fact': letterFact };
        }));
        setLetterFacts(letters);    
        setComponentOrder(1);    
      };
      nameChange();
    } else {
      setNameLengthFact('');
      setLetterFacts([]);
      setComponentOrder(0);
    }
  }, [name]);

  useEffect(() => {
    if (componentOrder > 0 && componentOrder < totalComponents) {
      setTimeout(() => {
        setComponentOrder(componentOrder + 1);
      }, 2000);
    }
  }, [componentOrder]);

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
  };

  const isLetter = (letter) => {
    return letter.length === 1 && letter.match(/[a-z]/i);
  };

  return (
    <div className='app'>
      <h1>Enter your name and we'll tell you something numberish about it!</h1>
      <NameEntry onNameChange={handleNameChange} checkLetter={isLetter} />
      {componentOrder >= 1 && <Greeting name={name} />}
      {componentOrder >= 2 && <NameLength nameLength={name.length} />}
      {componentOrder >= 3 && <NameFact nameLengthFact={nameLengthFact} />}
      {componentOrder >= 4 && <LetterFacts letterFacts={letterFacts}/>}
    </div>
  );
};

export default App;
