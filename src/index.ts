import { $, getComputerInputNumbers } from './utils';

class BaseballGame {
  computerInputNumbers: string | undefined;

  userInputNumbers: string | undefined;

  constructor() {
    this.initialize();
  }

  play(computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  }

  // 게임 시작 및 초기화시 사용되는 초기화함수
  initialize() {
    this.computerInputNumbers = getComputerInputNumbers();
    this.userInputNumbers = '';

    ($('#user-input') as HTMLInputElement).value = '';
    ($('#result') as HTMLDivElement).innerHTML = '';
  }
}

export default BaseballGame;

new BaseballGame();
