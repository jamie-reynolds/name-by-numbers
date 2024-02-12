//NameFact.js

const NameFact = ({ nameLengthFact }) => {
    const returnValue = nameLengthFact === ''
        ? null
        : <h1>{nameLengthFact}</h1>;
    return returnValue;
}

export default NameFact;