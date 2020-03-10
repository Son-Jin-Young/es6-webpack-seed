export class Survey {
    constructor(initData) {
        this.init(initData);
        this.createButton();
        this.initRender();
    }

    get isFirstStep() {
        return this.currentStepNo === 1;
    }

    get isLastStep() {
        return this.currentStepNo === this.survey.length;
    }

    init(initData = []) {
        this.survey = initData;

        this.currentStepNo = 1;
    }

    initRender() {
        const rootDiv = document.createElement('div');

        this.questionHeader = document.createElement('h4');

        this.templateDiv = document.createElement('div');

        const buttonWrapper = document.createElement('div');
        buttonWrapper.append(this.prevButton);
        buttonWrapper.append(this.nextButton);
        buttonWrapper.append(this.submitButton);

        rootDiv.append(this.questionHeader);
        rootDiv.append(this.templateDiv);
        rootDiv.append(buttonWrapper);

        document.querySelector('#result').append(rootDiv);
    }

    createButton() {
        this.prevButton = document.createElement('button');
        this.nextButton = document.createElement('button');
        this.submitButton = document.createElement('button');

        this.prevButton.innerText = '이전';
        this.nextButton.innerText = '다음';
        this.submitButton.innerText = '완료';

        this.prevButton.addEventListener('click', () => {
            if (!this.isFirstStep) {
                this.prevStep();
            }
        });
        this.nextButton.addEventListener('click', () => {
            if (!this.isLastStep) {
                this.nextStep();
            }
        });
        this.submitButton.addEventListener('click', () => {
            if (this.isLastStep) {
                this.submit();
            }
        });
    }

    prevStep() {
        if (this.currentStepNo > 1) {
            this.currentStepNo--;
            this.update();
        }
    }

    nextStep() {
        if (this.currentStepNo < this.survey.length) {
            this.currentStepNo++;
            this.update();
        }
    }

    submit() {
        console.log('survey ::', this.survey);
    }

    changeStep(stepNo = this.currentStepNo) {
        this.step = this.survey.find((item) => item.stepNo === stepNo) || {template: '잘못된 스탭입니다.'};
    }

    render({question, template}) {
        this.questionHeader.innerText = question;

        this.templateDiv.innerHTML = template;
    }

    update() {
        this.changeStep();
        this.render(this.step);
    }
}