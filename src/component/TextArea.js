import {Form} from './Form';

export class TextArea extends Form {
    constructor(id) {
        super(id);
    }

    template() {
        return `<textarea id="${this.id}"></textarea>`;
    }
}