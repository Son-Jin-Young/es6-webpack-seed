import {Form} from './Form';

export class InputText extends Form {
    constructor(id) {
        super(id, null);
        this.create();
    }

    create() {
        this.element = document.createElement('input');
        this.element.id = this.id;
        this.element.type = 'text';
    }
}