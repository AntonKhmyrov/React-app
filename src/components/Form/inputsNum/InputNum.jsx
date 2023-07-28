import style from './InputsNum.module.css'
import React, { Component } from "react";

class InputNum extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.props.handleChange(name, +value);
      };

    render() {
        return (
            <>
                <div className={style.inputBody}>
                    <label>Возраст:</label>
                    <input
                        onChange={this.handleChange}
                        type='number'
                        name="age"
                    />
                </div>
                <div className={style.inputBody}>
                    <label>Рост, см:</label>
                    <input
                        onChange={this.handleChange}
                        type='number'
                        name="growth"
                    />
                </div>
                <div className={style.inputBody}>
                    <label>Вес, кг:</label>
                    <input
                        onChange={this.handleChange}
                        type='number'
                        name="weight"
                    />
                </div>
            </>
        )
    }
}

export default InputNum;