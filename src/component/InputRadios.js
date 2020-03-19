import {Form} from './Form';

export class InputRadios extends Form {
    constructor(id, items) {
        super(id, items);
    }

    get getValue() {
        let returnValue = '';
        const checked = this.element.map(elem => elem.children).filter(elem => elem[0].checked);

        if (checked[0]) {
            const findItem = this.items.find((item) => String(item.value) === String(checked[0][0].value));

            if (findItem) {
                returnValue = findItem.name;
            }
        }

        return returnValue;
    }

    create() {
        this.element = this.items.map((item, index) => {
            const radioID = `radio_${item.value}_${index}`;
            const labelEL = document.createElement('label');
            labelEL.for = radioID;

            const inputEL = document.createElement('input');
            inputEL.type = 'radio';
            inputEL.name = this.id;
            inputEL.id = radioID;
            inputEL.value = item.value;

            const textNode = document.createTextNode(`${index + 1}. ${item.name}`);

            labelEL.append(inputEL);
            labelEL.append(textNode);

            return labelEL;
        });
    }
}