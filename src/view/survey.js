export class Survey {
    constructor(initData) {
        this.init(initData);
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

        this.createButton();
        this.initRender();
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

    initRender() {
        const rootDiv = document.createElement('div');

        this.questionHeader = document.createElement('h4');

        this.formDiv = document.createElement('div');

        const buttonWrapper = document.createElement('div');
        buttonWrapper.append(this.prevButton);
        buttonWrapper.append(this.nextButton);
        buttonWrapper.append(this.submitButton);

        rootDiv.append(this.questionHeader);
        rootDiv.append(this.formDiv);
        rootDiv.append(buttonWrapper);

        document.querySelector('#result').innerHTML = '';
        document.querySelector('#result').append(rootDiv);
    }

    validate() {
        if (this.step) {
            if (!this.step.element.getValue) {
                alert('필수 입력사항입니다.');
                return true;
            }
        }

        return false;
    }

    prevStep() {
        if (!this.isFirstStep) {
            this.currentStepNo--;
            this.update();
        }
    }

    nextStep() {
        if (!this.validate()) {
            if (!this.isLastStep) {
                this.currentStepNo++;
                this.update();
            }
        }
    }

    submit() {
        if (!this.validate()) {
            console.log('survey ::', this.survey.map((item) => item.element.getValue));

            document.querySelector('#result').innerHTML = `<h4>설문결과</h4>
                <div>${this.survey.map((item) => `Q. ${item.question}<br/>A. ${item.element.getValue}`).join('<hr><br>')}</div>`;
        }
    }

    changeStep(stepNo = this.currentStepNo) {
        this.step = this.survey.find((item) => item.stepNo === stepNo) || {question: '잘못된 스탭입니다.'};
    }

    render({question, element}) {
        this.questionHeader.innerText = question;

        this.formDiv.innerHTML = '';
        if (Array.isArray(element.getElement())) {
            element.getElement().forEach((item) => this.formDiv.append(item))
        } else {
            this.formDiv.append(element.getElement());
        }

        this.prevButton.disabled = this.isFirstStep;
        this.nextButton.disabled = this.isLastStep;
        this.submitButton.disabled = !this.isLastStep;
    }

    update() {
        this.changeStep();
        this.render(this.step);
    }
}