import { Component } from "react";
import Form from "./Form/Form";

class CaloriesCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sex: '',
            age: 0,
            growth: 0,
            weight: 0,
            activityLevel: 1.2,
            weightLossGoal: 0.5,
            weightLoss: null,
            basicMetabolism: null,
            dailyCalorieRate: null
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.sex !== this.state.sex ||
            prevState.age !== this.state.age ||
            prevState.growth !== this.state.growth ||
            prevState.weight !== this.state.weight ||
            prevState.activityLevel !== this.state.activityLevel ||
            prevState.weightLossGoal !== this.state.weightLossGoal
        ) {
            this.calculateValues();
        }
    }

    handleChangeActive = (level) => {
        this.setState({
            activityLevel: +level
        })
    }

    handleChangeLostGoal = (weightLossGoal) => {
        this.setState({
            weightLossGoal: +weightLossGoal
        })
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
      };
    
    calculateValues = () => {
        const { sex, age, growth, weight, activityLevel, weightLossGoal } = this.state;
        const formulaConst =  (10 * weight + 6.25 * growth - 5 * age)

        if (sex === 'Мужчина') {
            this.setState({
                weightLoss: Math.floor(((formulaConst + 5) * activityLevel) / weightLossGoal),
                basicMetabolism: Math.floor((formulaConst + 5) * activityLevel),
                dailyCalorieRate: Math.floor(formulaConst + 5)
            })
        } else if (sex === 'Женщина') {
            this.setState({
                weightLoss: Math.floor((((formulaConst) - 161) * activityLevel) / weightLossGoal),
                basicMetabolism: Math.floor((formulaConst - 161) * activityLevel),
                dailyCalorieRate: Math.floor(formulaConst - 161)
            })
        }
      };

    render() {
        const {
            sex,
            age,
            growth,
            weight,
            activityLevel,
            weightLossGoal
        } = this.state;
        return (
            <div>
                <Form
                    handleChangeActive={this.handleChangeActive}
                    handleChangeLostGoal={this.handleChangeLostGoal}
                    handleChange={this.handleChange}
                />
                    <div>
                    <h2>Ваша форма:</h2>
                    <p>Пол: {sex}</p>
                    <p>Возраст: {age}</p>
                    <p>Рост, см: {growth}</p>
                    <p>Вес, кг: {weight}</p>
                    <p>Уровень активности: {activityLevel}</p>
                    <p>Цель похудения: {weightLossGoal}</p>
                    <div>
                        <p>Ваш базовый метаболизм: ккал {this.state.basicMetabolism}</p>
                        <p>Ваша суточная норма калорий: ккал {this.state.dailyCalorieRate}</p>
                        <p>Для похудения вам необходимо потреблять примерно калорий в день: {this.state.weightLoss}</p>
                    </div>
                    </div>
            </div>
        );
    }
}

export default CaloriesCalculator;
