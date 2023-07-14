class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    submitMessage() {
        this.setState({
            input: '',
            messages: [...this.state.messages, this.state.input]
        })
    }

    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* Render an input, button, and ul below this line */ }
                <input onChange={this.handleChange.bind(this)} value={this.state.input}></input>
                <button onClick={this.submitMessage.bind(this)}>Add message</button>
                <ul>{this.state.messages.map(items => <li>{items}</li>)}</ul>
                { /* Change code above this line */ }
            </div>
        );
    }
};