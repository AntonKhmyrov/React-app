import style from './Form.module.css'

import { Component } from "react";
import ActivityLevel from './selects/ActivityLevel/ActivityLevel';
import WeightLossGoal from './selects/WeightLossGoal/WeightLossGoal';
import InputRadio from './inputsRadio/InputRadio';
import InputNum from './inputsNum/InputNum';


class Form extends Component {
    constructor(props) {
        super(props)
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.props.handleChange(name, value);
      };

    render() {
        return (
            <form className={style.body}>
                <div className={style.inputBox}>
                    <InputRadio handleChange={this.props.handleChange}/>
                </div>

                <div className={style.inputBox}>
                    <InputNum handleChange={this.props.handleChange}/>
                </div>

                <div className={style.selectBox}>
                    <ActivityLevel
                        handleChangeActive={this.props.handleChangeActive}
                        name="activityLevel"
                    />

                    <WeightLossGoal
                        handleChangeLostGoal={this.props.handleChangeLostGoal}
                        name="weightLossGoal"
                    />
                </div>
            </form>
        )
    }
}

export default Form;