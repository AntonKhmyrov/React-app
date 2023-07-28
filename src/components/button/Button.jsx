import { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onClearAll } = this.props;
        return (
            <button className="clear-btn button" onClick={onClearAll}>Clear all</button>
        );
    }
}

export default Button;