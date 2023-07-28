import React, { Component } from "react";

class WeightLossGoal extends Component {
    constructor(props) {
        super(props)
    }

    onChangedWeightLossGoal = (e) => {
        this.props.handleChangeLostGoal(e.target.value)
    }

    render() {
        return (
            <div>
                <label>Цель похудения:</label>
                <select onChange={this.onChangedWeightLossGoal}>
                    <option value={0.5}>Похудеть на 0.5 кг в неделю</option>
                    <option value={1}>Похудеть на 1 кг в неделю</option>
                    <option value={1.5}>Похудеть на 1.5 кг в неделю</option>
                    <option value={2}>Похудеть на 2 кг в неделю</option>
                </select>
            </div>
        )
    }
}

export default WeightLossGoal;

