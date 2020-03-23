export class Survey {
    constructor() {
        this.init();
    }

    get isFirstStep() {
        return this.currentStepNo === 1;
    }

    get isLastStep() {
        return this.currentStepNo === this.survey.length;
    }

    init() {
        this.headerTag = 'h3';
        this.survey = [];
        this.currentStepNo = 1;

        this.prevStep = () => {
            if (!this.isFirstStep) {
                this.currentStepNo--;
                this.update();
            }
        };

        this.nextStep = () => {
            if (!this.validate() && !this.isLastStep) {
                this.currentStepNo++;
                this.update();
            }
        };

        this.submit = () => {
            if (!this.validate() && this.isLastStep) {
                this.resultTemplate();
            }
        };
    }

    add(item) {
        if (item) {
            this.survey.push({...item, stepNo: (this.survey.length + 1)});
        }
    }

    load() {
        if (this.survey.length > 0) {
            const rootDiv = document.createElement('div');

            this.questionHeader = document.createElement(this.headerTag);

            this.formDiv = document.createElement('div');
            this.formDiv.setAttribute('class', 'form');

            this.buttonWrapper = document.createElement('div');

            this.createButton();

            this.buttonWrapper.append(this.prevButton);
            this.buttonWrapper.append(this.nextButton);
            this.buttonWrapper.append(this.submitButton);

            rootDiv.append(this.questionHeader);
            rootDiv.append(this.formDiv);
            rootDiv.append(this.buttonWrapper);

            document.querySelector('#result').innerHTML = '';
            document.querySelector('#result').append(rootDiv);

            this.update();
        }
    }

    createButton() {
        this.prevButton = document.createElement('button');
        this.nextButton = document.createElement('button');
        this.submitButton = document.createElement('button');

        this.prevButton.innerText = '이전';
        this.nextButton.innerText = '다음';
        this.submitButton.innerText = '완료';

        this.prevButton.addEventListener('click', this.prevStep);
        this.nextButton.addEventListener('click', this.nextStep);
        this.submitButton.addEventListener('click', this.submit);
    }

    resultTemplate() {
        this.questionHeader.innerText = '설문결과';

        this.formDiv.innerHTML = '';
        this.survey.map((item) => {
            const wrapper = document.createElement('div');
            const questionEL = document.createElement('h5');

            questionEL.innerText = `Q. ${item.question}`;
            const answerEL = document.createElement('span');

            answerEL.innerText = `A. ${item.element.getValue}`;
            wrapper.append(questionEL);
            wrapper.append(answerEL);
            wrapper.append(document.createElement('hr'));

            return wrapper;

        }).forEach((item) => this.formDiv.append(item));

        this.prevButton.removeEventListener('click', this.prevStep);
        this.nextButton.removeEventListener('click', this.nextStep);
        this.submitButton.removeEventListener('click', this.submit);

        this.buttonWrapper.remove();
    }

    render({question, element}) {
        this.questionHeader.innerText = question;

        this.formDiv.innerHTML = '';
        this.formDiv.append(element.getElement());

        this.prevButton.disabled = this.isFirstStep;
        this.nextButton.disabled = this.isLastStep;
        this.submitButton.disabled = !this.isLastStep;
    }

    validate() {
        if (this.step && this.step.required && !this.step.element.getValue) {
            alert('필수 입력사항입니다.');
            return true;
        }
        return false;
    }

    changeStep(stepNo = this.currentStepNo) {
        this.step = this.survey.find((item) => item.stepNo === stepNo) || {question: '잘못된 스탭입니다.'};
    }

    update() {
        this.changeStep();
        this.render(this.step);
    }
}