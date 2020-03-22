import './style.css';

import { Survey } from './view/survey';
import {InputRadios} from './component/InputRadios';
import {InputText} from './component/InputText';
import {InputCheckbox} from './component/InputCheckbox';
import {Select} from './component/Select';
import {TextArea} from './component/TextArea';

const execute = () => {
    // Step 1. Text
    const text = new InputText('text');

    // Step 2. Radio
    const radios = new InputRadios('radio', [
        {value: 1, name:'불고기피자'},
        {value: 2, name:'콤비네이션피자'},
        {value: 3, name:'치즈피자'},
        {value: 4, name:'핫치킨피자'}
    ]);

    // Step 3. Checkbox
    const checks = new InputCheckbox('check', [
        {value: 1, name:'파마산치즈'},
        {value: 2, name:'모짜렐라치즈'},
        {value: 3, name:'핫소스'},
        {value: 4, name:'갈릭디핑소스'},
        {value: 5, name:'피클'}
    ]);

    // Step 4. Select
    const select = new Select('select', [
        {value: 1, name:'매장식사'},
        {value: 2, name:'방문포장'},
        {value: 3, name:'일반배달'},
        {value: 4, name:'총알배달'}
    ]);

    // Step 3. Select
    const textarea = new TextArea('description');

    const survey = new Survey();
    survey.add({element: text, required: true, question: '1. 이름을 기입해 주세요.'});
    survey.add({element: radios, required: true, question: '2. 피자를 선택해 주세요.'});
    survey.add({element: checks, required: true, question: '3. 토핑을 선택해 주세요.'});
    survey.add({element: select, required: true, question: '4. 픽업 방식을 선택해 주세요.'});
    survey.add({element: textarea, required: true, question: '5. 추가 요청 사항을 기입해주세요.'});

    survey.load();
};

execute();