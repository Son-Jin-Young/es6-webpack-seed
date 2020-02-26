export const operatorType = {
    PLUS: '+',
    MINUS: '-',
    MULTIPLE: '*',
    DIVISION: '/',
    RESULT: '=',
    CLEAR: 'AC'
};

export class Calculator {
    constructor() {
        this.buttons = [];
        this.resultEL = document.createElement('input');

        this.init();
    }

    init() {
        this.resultNumber = 0;
        this.inputNumber = 0;

        this.keepOperator = '';

        this.resultEL.value = 0;
    }

    addButtons(buttons) {
        this.buttons = buttons;
    }

    render(selector) {
        this.appendResultPanel(selector);

        this.appendButtons(selector);
    }

    appendResultPanel(selector) {
        const parentEL = document.querySelector(selector);

        const panelEL = document.createElement('div');
        this.resultEL.readOnly = true;
        this.resultEL.setAttribute('class', 'result');

        panelEL.appendChild(this.resultEL);
        parentEL.appendChild(panelEL);
    }

    appendButtons(selector) {
        const parentEL = document.querySelector(selector);

        const buttonWrapper = document.createElement('div');
        buttonWrapper.setAttribute('class', 'number-wrapper');

        for (const [idx, btn] of this.buttons.entries()) {
            const buttonEL = document.createElement('button');
            buttonEL.innerText = btn.key;
            buttonEL.setAttribute('class', 'button');
            buttonEL.addEventListener('click', btn.event);

            buttonWrapper.appendChild(buttonEL);

            if (idx % 4 === 3) {
                buttonWrapper.appendChild(document.createElement('br'));
            }
        }

        parentEL.appendChild(buttonWrapper);
    }

    clickOperator(operator) {
        if (operator === operatorType.CLEAR) {
            this.init();
            return;
        }

        if (operator === operatorType.RESULT) {
            this.resultNumber = this.operator(this.keepOperator);
        } else {
            this.resultNumber = !!this.keepOperator ? this.operator(this.keepOperator) : this.inputNumber;

            this.inputNumber = 0;

            this.keepOperator = operator;
        }

        this.resultEL.value = this.resultNumber;
    }

    operator(operator) {
        let returnValue = this.resultNumber;

        switch (operator) {
            case operatorType.MINUS:
                returnValue -= this.inputNumber;
                break;
            case operatorType.MULTIPLE:
                returnValue *= this.inputNumber;
                break;
            case operatorType.DIVISION:
                returnValue = this.inputNumber !== 0 ? (returnValue / this.inputNumber) : 0;
                break;
            case operatorType.PLUS:
                returnValue += this.inputNumber;
                break;
        }

        console.log('return ::', returnValue);

        return returnValue;
    }

    clickNumber(num) {
        this.inputNumber = this.inputNumber * 10 + num;

        this.resultEL.value = this.inputNumber;

        console.log('number ::', this.inputNumber);
    }
}
