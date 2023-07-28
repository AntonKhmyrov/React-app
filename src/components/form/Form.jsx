import { Component, createRef } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskTitle: ''
        }

        this.inputRef = createRef();
    }

    componentDidMount() {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    handleInputChange = (e) => {
        this.setState({
            taskTitle: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.taskTitle) {
            this.props.onAddTask(this.state.taskTitle.trim());
        }
        this.clear();
    };

    setFocusOnInput = () => {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    };

    clear = () => {
        this.setState({
            taskTitle: ''
        })
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    value={this.state.taskTitle}
                    placeholder="Add your list here"
                    onChange={this.handleInputChange}
                />
                <button className="submit-button">
                    <span className="material-symbols-outlined plus">
                        add
                    </span>
                </button>
            </form>
        );
    }
}

export default Form;