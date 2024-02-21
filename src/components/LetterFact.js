const LetterFact = ({ letter, alphabetNumber, fact }) => {
    return (
        <div>
            <h1>{letter.toLowerCase()} is letter number {alphabetNumber} in the alphabet!</h1>
            <h1>{fact}</h1>
        </div>
    );
}

export default LetterFact;
