import {Form} from './Form';

export class Select extends Form {
    constructor(id, items) {
        super(id, items);
    }

    get getValue() {
        return this.items.find((item) => String(item.value) === String(this.element.value)).name;
    }

    create() {
        this.element = document.createElement('select');
        this.items.forEach((item) => {
            const optionEL = document.createElement('option');
            optionEL.value = item.value;
            optionEL.innerText = item.name;

            this.element.append(optionEL);
        });
    }
}