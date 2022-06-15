import { DOM_SELECTOR, RESULT } from './constants';
import {
  $,
  addEventListener,
  getComputerInputNumbers,
  getHint,
  isValid,
} from './utils';

class BaseballGame {
  computerInputNumbers: string | undefined;

  userInputNumbers: string | undefined;

  constructor() {
    this.initialize();
    this.addEventDelegation();
  }

  renderResult(markup: string) {
    ($(DOM_SELECTOR.RESULT) as HTMLDivElement).innerHTML = markup;
  }

  play(computerInputNumbers: string, userInputNumbers: string) {
    if (computerInputNumbers === userInputNumbers) return RESULT.ANSWER;
    const hint = getHint(computerInputNumbers, userInputNumbers);

    return hint;
  }

  initialize() {
    this.computerInputNumbers = getComputerInputNumbers();
    this.userInputNumbers = '';

    ($(DOM_SELECTOR.USER_INPUT) as HTMLInputElement).value = '';
    this.renderResult('');
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
    addEventListener(
      $(DOM_SELECTOR.RESULT),
      'click',
      this.handleResult.bind(this),
    );
  }

  handleInput(event: Event) {
    this.userInputNumbers = (event.target as HTMLInputElement).value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (!this.computerInputNumbers || !this.userInputNumbers) return;
    if (!isValid(this.userInputNumbers)) return;

    const result = this.play(this.computerInputNumbers, this.userInputNumbers);
    this.renderResult(result);
  }

  handleResult(event: Event) {
    const target = event.target as HTMLElement;
    if (target.id !== DOM_SELECTOR.RESET_BUTTON.slice(1)) return;

    this.initialize();
  }
}

export default BaseballGame;

new BaseballGame();
