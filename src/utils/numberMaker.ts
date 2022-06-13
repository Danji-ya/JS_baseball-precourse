import { Random } from '@woowacourse/mission-utils';

import { INPUT_NUMBER } from '../constants';

function getRandomNumber(startInclusive: number, endInclusive: number) {
  return Random.pickNumberInRange(startInclusive, endInclusive);
}

function getComputerInputNumbers(): string {
  const maker = new Set();

  while (maker.size !== INPUT_NUMBER.LENGTH) {
    maker.add(getRandomNumber(INPUT_NUMBER.MIN, INPUT_NUMBER.MAX));
  }

  return [...maker].join('');
}

export { getRandomNumber, getComputerInputNumbers };
