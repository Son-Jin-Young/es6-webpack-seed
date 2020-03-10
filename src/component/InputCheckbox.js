import {Form} from './Form';

export class InputCheckbox extends Form {
    constructor(id, items) {
        super(id);
        this.items = items;
    }

    template() {
        return this.items.map((item, index) => `<label for="check_${item.value}_${index}">
            <input type="checkbox" name="${this.id}" id="check_${item.value}_${index}" value="${item.value}"/>
            ${index + 1}. ${item.name}</label>`).join('<br/>');
    }
}