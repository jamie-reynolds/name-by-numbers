const Greeting = ({ name }) => {
    if (name) {
        return (
            <h1 className="fadein">Hello, {name}.</h1>
        )
    }
    return null;
}

export default Greeting;