import './style.css';

import { Survey } from './model/survey';
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

    const survey = new Survey([
        {stepNo: 1, element: text, question: '개인정보 수거한다. 이름을 써라.'},
        {stepNo: 2, element: radios, question: '무슨 피자를 먹을건가요?'},
        {stepNo: 3, element: checks, question: '무슨 토핑을 추가할건가요?'},
        {stepNo: 4, element: select, question: '어디서 먹을건가요?'},
        {stepNo: 5, element: textarea, question: '주인장에게 하고 싶은 말을 쓰세요.'}
    ]);

    survey.update();
};

execute();