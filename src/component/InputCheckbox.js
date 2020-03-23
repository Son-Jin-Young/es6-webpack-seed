import {Form} from './Form';

export class InputCheckbox extends Form {
    constructor(id, items) {
        super(id, items);
    }

    get getValue() {
        let returnValue = '';
        const childList = [];

        for (const label of this.element.children) {
            childList.push(label);
        }

        const checked = childList.map(elem => elem.children).filter(elem => elem[0].checked);

        if (checked) {
            const values = [];

            for (const check of checked) {
                values.push(check[0].value);
            }

            const findValues = this.items.filter((item) => values.includes(String(item.value))).map((item) => item.name);

            if (findValues) {
                returnValue = findValues.join(',');
            }
        }

        return returnValue;
    }

    create() {
        this.element = document.createElement('div');
        this.items.forEach((item, index) => {
            const checkID = `check_${item.value}_${index}`;
            const labelEL = document.createElement('label');
            labelEL.for = checkID;

            const inputEL = document.createElement('input');
            inputEL.type = 'checkbox';
            inputEL.name = this.id;
            inputEL.id = checkID;
            inputEL.value = item.value;

            const textNode = document.createTextNode(`${index + 1}. ${item.name}`);

            labelEL.append(inputEL);
            labelEL.append(textNode);

            this.element.append(labelEL);
        });
    }
}