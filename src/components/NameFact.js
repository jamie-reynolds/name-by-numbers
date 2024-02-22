const NameFact = ({ nameLengthFact }) => {
    const returnValue = nameLengthFact === ''
        ? null
        : <h1 className="fadein">{nameLengthFact}</h1>;
    return returnValue;
}

export default NameFact;