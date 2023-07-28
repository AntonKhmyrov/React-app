import { stateSelectName } from "../../../../data";
import React, { Component } from "react";


class ActivityLevel extends Component {
    constructor(props) {
        super(props)
        

    }

    onChangeActiveLvl = (e) => {
        this.props.handleChangeActive(e.target.value)
    }

    render() {
        const {none, easy, midle, hard, veryHard} = stateSelectName
        return (            
            <div>
                <label>Уровень активности:</label>
                <select onChange={this.onChangeActiveLvl}>
                    <option value={1.2}>{none}</option>
                    <option value={1.375}>{easy}</option>
                    <option value={1.55}>{midle}</option>
                    <option value={1.725}>{hard}</option>
                    <option value={1.9}>{veryHard}</option>
                </select>
            </div>
        )
    }
}

export default ActivityLevel;