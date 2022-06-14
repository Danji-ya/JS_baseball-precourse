import { DOM_SELECTOR } from './constants';
import { $, addEventListener, getComputerInputNumbers, isValid } from './utils';

class BaseballGame {
  computerInputNumbers: string | undefined;

  userInputNumbers: string | undefined;

  constructor() {
    this.initialize();
    this.addEventDelegation();
  }

  play(computerInputNumbers: string, userInputNumbers: string) {
    return '결과 값 String';
  }

  // 게임 시작 및 초기화시 사용되는 초기화함수
  initialize() {
    this.computerInputNumbers = getComputerInputNumbers();
    this.userInputNumbers = '';

    ($(DOM_SELECTOR.USER_INPUT) as HTMLInputElement).value = '';
    ($(DOM_SELECTOR.RESULT) as HTMLDivElement).innerHTML = '';
  }

  addEventDelegation() {
    addEventListener(
      $(DOM_SELECTOR.USER_INPUT),
      'input',
      this.handleInput.bind(this),
    );
    addEventListener(
      $(DOM_SELECTOR.SUBMIT_BUTTON),
      'click',
      this.handleSubmit.bind(this),
    );
    addEventListener($(DOM_SELECTOR.RESULT), 'click', this.handleResult);
  }

  handleInput(event: Event) {
    this.userInputNumbers = (event.target as HTMLInputElement).value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (!this.computerInputNumbers || !this.userInputNumbers) return;
    if (!isValid(this.userInputNumbers)) return;

    this.play(this.computerInputNumbers, this.userInputNumbers);
  }

  handleResult(event: Event) {
    const target = event.target as HTMLElement;
    if (target.id !== DOM_SELECTOR.SUBMIT_BUTTON.slice(1)) return;

    console.log('TODO: 재시작 버튼 처리');
  }
}

export default BaseballGame;

new BaseballGame();
