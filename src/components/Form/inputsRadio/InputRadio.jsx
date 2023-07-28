import style from './InputRadio.module.css'
import { Component } from "react";

class InputRadio extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.props.handleChange(name, value);
      };

    render() {
        return (
            <>
                <div className={style.inputRadio}>
                    <input
                        onChange={this.handleChange}
                        type='radio'
                        name="sex"
                        value="Мужчина"
                    />
                    <label>Мужской:</label>
                </div>
                <div className={style.inputRadio}>
                    <input
                        onChange={this.handleChange}
                        type='radio'
                        name="sex"
                        value="Женщина"
                    />
                    <label>Женский:</label>
                </div>
            </>
        )
    }
}

export default InputRadio;