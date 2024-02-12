//NameLength.js

const NameLength = ({ nameLength }) => {
    const returnValue = nameLength === 0
        ? null
        : <h1>Your name is {nameLength} letters long</h1>;
    return returnValue;
}

export default NameLength;