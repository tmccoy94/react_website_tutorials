// PascalCasing, capitalize all words
// Always follow when creating a function component
function Message() {
    // This is written in JSX: JavaScript XML
    // Under the hood it will get compiled to JS
    const name = "Taylor";
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;