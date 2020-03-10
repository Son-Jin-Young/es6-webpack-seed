import {Form} from './Form';

export class Select extends Form {
    constructor(id, items) {
        super(id);
        this.items = items;
    }

    template() {
        const options = this.items.map((item, index) => `<option value="${item.value}">${item.name}</option>`).join('');
        return `<select id="${this.id}">${options}</select>`;
    }
}