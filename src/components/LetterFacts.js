import { useEffect, useState } from "react";
import LetterFact from "./LetterFact";

const LetterFacts = ({ letterFacts }) => {
    const [returnVal, setReturnVal] = useState(null);
    useEffect(() => {
        if (letterFacts.length > 0) {
            const letterFactElements = letterFacts.map((letterObj, i) => {
                return (
                    <LetterFact 
                        key={i}
                        letter={letterFacts[i].letter}
                        alphabetNumber={letterFacts[i].alphabetNumber}
                        fact={letterFacts[i].fact}
                    />
                );
            });
            letterFactElements.forEach((element, i) => {
                setTimeout(() => {
                    setReturnVal(letterFactElements.slice(0,i+1))
                }, i * 2000);
            });
        } else {
            setReturnVal(null);
        }
    }, [letterFacts]);
    return (
        <div className="fadein">
            {returnVal}
        </div>
    );
};

export default LetterFacts;
