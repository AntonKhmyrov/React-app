export const data = {
    questions: [
        {
            question:
                "Какой метод жизненного цикла отрабатывает один раз при монтировании компоненты?",
            variants: [ 
                "componentDidMount",
                "componentWillUnmount",
                "shouldComponentUpdate",
                "componentDidUpdate",
            ],
            correctVariant: "componentDidMount", 
        },
        {
            question: "Что такое React.js",
            variants: [
                "Серверный фреймворк",
                "Библиотека для разработки интерфейсов",
                "Оба ответа",
                "Не один не походит",
            ],
            correctVariant: "Библиотека для разработки интерфейсов",
        },
        {
            question:
                "Какой способ используется для передачи данных из вне в компоненту",
            variants: ["Render with arguments", "setState", "PropTypes", "props"],
            correctVariant: "props",
        },
        {
            question: "На каком языке написан реакт",
            variants: ["Python", "Java", "C#", "JavaScript"],
            correctVariant: "JavaScript",
        },
        {
            question: "Что такое Babel?",
            variants: [
                "JavaScript interpreter",
                "JavaScript transpiler",
                "JavaScript compiler",
                "None of the above",
            ],
            correctVariant: "JavaScript compiler",
        },
    ],
};