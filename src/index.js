import './style.css';

import { Calculator, operatorType } from './component/calculator';

const excute = () => {
    const calculator = new Calculator();

    const buttons = [
        {key: 7, event: () => calculator.clickNumber(7)},
        {key: 8, event: () => calculator.clickNumber(8)},
        {key: 9, event: () => calculator.clickNumber(9)},
        {key: operatorType.PLUS, event: () => calculator.clickOperator(operatorType.PLUS)},
        {key: 4, event: () => calculator.clickNumber(4)},
        {key: 5, event: () => calculator.clickNumber(5)},
        {key: 6, event: () => calculator.clickNumber(6)},
        {key: operatorType.MINUS, event: () => calculator.clickOperator(operatorType.MINUS)},
        {key: 1, event: () => calculator.clickNumber(1)},
        {key: 2, event: () => calculator.clickNumber(2)},
        {key: 3, event: () => calculator.clickNumber(3)},
        {key: operatorType.MULTIPLE, event: () => calculator.clickOperator(operatorType.MULTIPLE)},
        {key: 0, event: () => calculator.clickNumber(0)},
        {key: operatorType.RESULT, event: () => calculator.clickOperator(operatorType.RESULT)},
        {key: operatorType.CLEAR, event: () => calculator.clickOperator(operatorType.CLEAR)},    
        {key: operatorType.DIVISION, event: () => calculator.clickOperator(operatorType.DIVISION)}
    ];

    calculator.addButtons(buttons);

    calculator.render('#result');
};

excute();