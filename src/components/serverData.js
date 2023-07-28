
//Форма

// чекбоксы 
const checkBoxData = [
    {
        checkBoxTitle: 'Мужской',
        check: false,
        id: uuidv4()
    },
    {
        checkBoxTitle: 'Женский',
        check: false,
        id: uuidv4()
    }
];

// инпуты
const inputData = [
    {
        inputTitle: 'Возраст:',
        inputValue: 0,
        id: uuidv4()
    },
    {
        inputTitle: 'Рост, см:',
        inputValue: 0,
        id: uuidv4()
    },
    {
        inputTitle: 'Вес, кг:',
        inputValue: 0,
        id: uuidv4()
    }
];

// селекты и их опции
const selectData = [
    {
        selectTitle: 'Уровень активности:',
        selected: '',
        id: uuidv4(),
        selectOptionData: [
            {
                optionTitle: 'Низкий',
                optionValue: 'Низкий',
                id: uuidv4()
            },
            {
                optionTitle: 'Средний',
                optionValue: 'Средний',
                id: uuidv4()
            },
            {
                optionTitle: 'Высокий',
                optionValue: 'Высокий',
                id: uuidv4()
            }
        ]
    },
    {
        selectTitle: 'Цель похудения:',
        selected: '',
        id: uuidv4(),
        selectOptionData: [
            {
                optionTitle: 'Похудеть на 0.5 кг в неделю',
                optionValue: 'Похудеть на 0.5 кг в неделю',
                id: uuidv4()
            },
            {
                optionTitle: 'Похудеть на 1 кг в неделю',
                optionValue: 'Похудеть на 1 кг в неделю',
                id: uuidv4()
            },
            {
                optionTitle: 'Похудеть на 1.5 кг в неделю',
                optionValue: 'Похудеть на 1.5 кг в неделю',
                id: uuidv4()
            },
            {
                optionTitle: 'Похудеть на 2 кг в неделю',
                optionValue: 'Похудеть на 2 кг в неделю',
                id: uuidv4()
            }
        ]
    },
]

// Зависимости состояния

// 1. checkbox => мужчина || женщина, в зависимости от того какой checkbox выбран в данный момент будет выбиратся формула расчета к-каллорий.
// Так же данные с checkbox (мужчина || женщина) будут попадать в финальную форму (object) => когда будет выполнен onSubmit всей формы.

// 2. Value с input=>value и select=>option(value) должны попадать в формулу и обчислятся в ней
// Они попадают в формулу в виде коэфициентов и напрямую влияют на результат вычислений!

// о формуле
// В формуле есть свои коэфициенты (вес, рост, возраст) у них по формуле есть базовые значения , они для всех одинаковы.
// Базовые значения формулы вес(weight)=10, рост(growth)=6.25, возраст(age)=5, и еще есть странная поправка на пол
// человека (полученый результат для мужчин + 5), (полученый результат для женщин -161).
// В самом конце результат умножается на коэфициенты активности и ??? цель похудения ???
// формула выглядит след образом 

