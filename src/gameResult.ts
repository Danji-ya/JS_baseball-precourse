import { DOM_SELECTOR } from './constants';
import { $ } from './utils';

class GameResult {
  result: HTMLDivElement;

  constructor() {
    this.result = $(DOM_SELECTOR.RESULT) as HTMLDivElement;
  }

  render(markup: string) {
    this.result.innerHTML = markup;
  }
}

export default GameResult;
