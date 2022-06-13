import { getComputerInputNumbers } from './utils/numberMaker';

class BaseballGame {
  computerInputNumbers: string;

  constructor() {
    this.computerInputNumbers = getComputerInputNumbers();
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }
}

export default BaseballGame;

new BaseballGame();
