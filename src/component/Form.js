export class Form {
    constructor(id, items) {
        this.id = id;
        this.element = null;
        this.items = items;

        this.create();
    }

    get getValue() {
        return this.element.value;
    }

    create() {
        console.error('Override create method.');
    }

    getElement() {
        return this.element;
    }
}