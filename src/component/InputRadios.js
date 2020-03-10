import {Form} from './Form';

export class InputRadios extends Form {
    constructor(id, items) {
        super(id);
        this.items = items;
    }

    template() {
        return this.items.map((item, index) => `<label for="radio_${item.value}_${index}">
            <input type="radio" name="${this.id}" id="radio_${item.value}_${index}" value="${item.value}"/>
            ${index + 1}. ${item.name}</label>`).join('<br/>');
    }
}