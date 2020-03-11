import {Form} from './Form';

export class TextArea extends Form {
    constructor(id) {
        super(id);
    }

    create() {
        this.element = document.createElement('textarea');
        this.element.id = this.id;
    }
}