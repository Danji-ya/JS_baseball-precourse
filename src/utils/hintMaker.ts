import { RESULT } from '../constants';

function getStrikeBallCount(
  computerInputNumbers: string,
  userInputNumbers: string,
) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < computerInputNumbers.length; i += 1) {
    const computerInputNumber = computerInputNumbers[i];

    if (computerInputNumber === userInputNumbers[i]) strike += 1;
    else if (userInputNumbers.includes(computerInputNumber)) ball += 1;
  }

  return {
    strike,
    ball,
  };
}

function getHint(computerInputNumbers: string, userInputNumbers: string) {
  const { strike, ball } = getStrikeBallCount(
    computerInputNumbers,
    userInputNumbers,
  );

  if (strike === 0 && ball === 0) return RESULT.NOTHING;

  if (ball === 0 && strike !== 0) return `${strike}${RESULT.STRIKE}`;
  if (strike === 0 && ball !== 0) return `${ball}${RESULT.BALL}`;

  return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
}

export { getHint, getStrikeBallCount };
