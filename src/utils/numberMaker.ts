import { INPUT_NUMBER } from '../constants';

function isLessThanInputMaxLength(size: number) {
  return size < INPUT_NUMBER.LENGTH;
}

function getRandomNumber(startInclusive: number, endInclusive: number) {
  return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
}

function getComputerInputNumbers(): string {
  const numbers = new Set();

  while (isLessThanInputMaxLength(numbers.size)) {
    numbers.add(getRandomNumber(INPUT_NUMBER.MIN, INPUT_NUMBER.MAX));
  }

  return [...numbers].join('');
}

export { getRandomNumber, getComputerInputNumbers };
