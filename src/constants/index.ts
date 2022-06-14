const DOM_SELECTOR = {
  USER_INPUT: '#user-input',
  RESULT: '#result',
  SUBMIT_BUTTON: '#submit',
  RESET_BUTTON: '#game-restart-button',
};

const INPUT_NUMBER = {
  MIN: 1,
  MAX: 9,
  LENGTH: 3,
};

const ERROR_MESSAGE = {
  NON_UNIQUE: '중복된 값이 존재합니다(올바른 예시: 123)',
  NON_SCOPE: '1 ~ 9 사이의 숫자만 입력해주세요(올바른 예시: 123)',
  NON_LENGTH: `${INPUT_NUMBER.LENGTH} 자릿수 까지만 입력해주세요.`,
};

export { DOM_SELECTOR, INPUT_NUMBER, ERROR_MESSAGE };
