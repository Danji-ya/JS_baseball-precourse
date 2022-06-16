import { ERROR_MESSAGE, INPUT_NUMBER } from '../constants';

function isValidScope(values: Array<number>) {
  return values.every(
    (value) => value >= INPUT_NUMBER.MIN && value <= INPUT_NUMBER.MAX,
  );
}

function isValidUnique(values: Array<number>) {
  const uniqueSet = new Set();

  for (let i = 0; i < values.length; i += 1) {
    uniqueSet.add(values[i]);
  }

  return uniqueSet.size === values.length;
}

function isValidLength(values: Array<number>) {
  return values.length === INPUT_NUMBER.LENGTH;
}

function isValid(inputValue: string) {
  const inputValueToNumberArray = inputValue
    .split('')
    .map((value) => Number(value));

  if (!isValidScope(inputValueToNumberArray)) {
    alert(ERROR_MESSAGE.NON_SCOPE);
    return false;
  }

  if (!isValidUnique(inputValueToNumberArray)) {
    alert(ERROR_MESSAGE.NON_UNIQUE);
    return false;
  }

  if (!isValidLength(inputValueToNumberArray)) {
    alert(ERROR_MESSAGE.NON_LENGTH);
    return false;
  }

  return true;
}

export default isValid;
