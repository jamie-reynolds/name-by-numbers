const LetterFact = ({ letter, alphabetNumber, fact }) => {
    return (
        <>
            <h1>{letter.toLowerCase()} is letter number {alphabetNumber} in the alphabet!</h1>
            <h1>{fact}</h1>
        </>
    );
}

export default LetterFact;
