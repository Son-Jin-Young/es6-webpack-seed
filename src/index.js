import './style.css';

import { Survey } from './model/survey';
import {InputRadios} from './component/InputRadios';
import {InputText} from './component/InputText';
import {InputCheckbox} from './component/InputCheckbox';
import {Select} from './component/Select';
import {TextArea} from './component/TextArea';

const execute = () => {
    // Step 1. Text
    const text = new InputText('step1');

    // Step 2. Radio
    const radios = new InputRadios('radio', [
        {value: 1, name:'aaaaa'},
        {value: 2, name:'aaaaa'},
        {value: 3, name:'ccccc'}
    ]);

    // Step 3. Checkbox
    const checks = new InputCheckbox('check', [
        {value: 1, name:'aaaaa'},
        {value: 2, name:'aaaaa'},
        {value: 3, name:'ccccc'}
    ]);

    // Step 4. Select
    const select = new Select('select', [
        {value: 1, name:'aaaaa'},
        {value: 2, name:'aaaaa'},
        {value: 3, name:'ccccc'}
    ]);

    // Step 3. Select
    const textarea = new TextArea('select');

    const survey = new Survey([
        {stepNo: 1, template: text.template(), question: '문자열인데요'},
        {stepNo: 2, template: radios.template(), question: '라디오인데요'},
        {stepNo: 3, template: checks.template(), question: '체크박스인데요'},
        {stepNo: 4, template: select.template(), question: '셀렉트인데요'},
        {stepNo: 5, template: textarea.template(), question: '텍스트영역인데요'}
    ]);

    survey.update();
};

execute();