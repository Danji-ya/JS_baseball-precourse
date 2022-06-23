import BaseballGame from './baseballGame';
import GameResult from './gameResult';
import { DOM_SELECTOR } from './constants';
import { $, addEventListener, getComputerInputNumbers, isValid } from './utils';

class Controller {
  baseballGame: BaseballGame;

  gameResult: GameResult;

  constructor(baseballGame: BaseballGame, gameResult: GameResult) {
    this.baseballGame = baseballGame;
    this.gameResult = gameResult;
    this.initialize();
    this.addEventDelegation();
  }

  initialize() {
    this.baseballGame.setComputerInputValue(getComputerInputNumbers());
    this.baseballGame.resetUserInputValue();
    this.gameResult.render('');
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
      this.handleReset.bind(this),
    );
  }

  handleInput(event: Event) {
    this.baseballGame.setUserInputValue(
      (event.target as HTMLInputElement).value,
    );
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const computerInputNumbers = this.baseballGame.getComputerInputValue();
    const userInputNumbers = this.baseballGame.getUserInputValue();

    if (!computerInputNumbers || !userInputNumbers) return;
    if (!isValid(userInputNumbers)) return;

    const result = this.baseballGame.play(
      computerInputNumbers,
      userInputNumbers,
    );
    this.gameResult.render(result);
  }

  handleReset(event: Event) {
    const target = event.target as HTMLElement;
    const resetBtnId = DOM_SELECTOR.RESET_BUTTON.slice(1);
    if (target.id !== resetBtnId) return;

    this.initialize();
  }
}

export default Controller;
