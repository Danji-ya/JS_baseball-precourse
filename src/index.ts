import BaseballGame from './baseballGame';
import GameResult from './gameResult';
import Controller from './controller';

const baseballGame = new BaseballGame();
const gameResult = new GameResult();

new Controller(baseballGame, gameResult);
