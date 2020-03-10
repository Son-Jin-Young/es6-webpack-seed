import {Form} from './Form';

export class InputText extends Form {
    constructor(id) {
        super(id);
    }

    template() {
        return `<input id="${this.id}" type="text">`;
    }
}