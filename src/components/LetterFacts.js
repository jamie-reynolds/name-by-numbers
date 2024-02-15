// LetterFacts.js
import { useEffect, useState } from "react";
import LetterFact from "./LetterFact";

const LetterFacts = ({ letterFacts }) => {
    const [returnVal, setReturnVal] = useState(null);
    useEffect(() => {
        if (letterFacts.length > 0) {
            const jsxElements = letterFacts.map((letterObj, i) => {
                return (
                    <LetterFact 
                        key={i}
                        letter={letterFacts[i].letter}
                        alphabetNumber={letterFacts[i].alphabetNumber}
                        fact={letterFacts[i].fact}
                    />
                );
            });
            setReturnVal(jsxElements);
        }
    }, [letterFacts]);
    return (
        <div>
            {returnVal}
        </div>
    );
};

export default LetterFacts;
