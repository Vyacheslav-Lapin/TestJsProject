import Deck from './cards.mjs';

const BET = 10;
const MAX_POINTS = 21;

function value(card) {
  // todo:
}

function getNewPoints(oldPoints, card) {
  // todo:
  return undefined;
}

function getUserPoints() {
  const points = 0;

  do {
    // Взять очередную карту
  } while (points !== 0
    // todo:
  && points < MAX_POINTS - 1
  && confirm('Берём ещё?'));

  return points;
}

function getComputerPoints() {
  // todo
  return undefined;
}

export default function doBlackJak() {
  const cards = new Deck().shuffle();

  let player1Money = 100;
  let player2Money = 100;

  let count = 0;

  do {
    console.log(`Стартуем кон №${++count}`);
    player1Money -= BET;
    player2Money -= BET;

    // todo

    const userPoints = getUserPoints();
    const computerPoints = getComputerPoints();
  } while (player1Money !== 0 && player2Money !== 0);

  return player1Money - player2Money;
}
