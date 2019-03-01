import Deck from './cards.ts';

function compare(player1Card, player2Card) {
  const number = Deck.pip(player1Card) - Deck.pip(player2Card);
  return Math.abs(number) === 8 ? -number : number;
}

export default function doDrunkard() {
  const {player1Cards, player2Cards} = new Deck().upkeep();

  console.log(player1Cards);
  console.log(player2Cards);

  let winner;
  let count = 0;

  do {
    count++;

    const player1Card = player1Cards.pop();
    const player2Card = player2Cards.pop();

    console.log(`Игрок №1 извлёк карту ${Deck.toString(player1Card)}`);
    console.log(`Игрок №2 извлёк карту ${Deck.toString(player2Card)}`);

    const compareResult = compare(player1Card, player2Card);
    if (compareResult > 0) {
      player1Cards.unshift(player1Card);
      player1Cards.unshift(player2Card);
      winner = 1;
      console.log('Кон выиграл игрок №1');
    } else if (compareResult < 0) {
      player2Cards.unshift(player2Card);
      player2Cards.unshift(player1Card);
      winner = 2;
      console.log('Кон выиграл игрок №2');
    } else {
      player1Cards.unshift(player1Card);
      player2Cards.unshift(player2Card);
      console.log('Кон выиграла дружба!');
    }

    console.log(`У игрока №1 ${player1Cards.length} карт, а у игрока №2 ${player2Cards.length} карт`);
    // console.log(player1Cards);
    // console.log(player2Cards);
  } while (
    player1Cards.length !== 0
    && player2Cards.length !== 0
    && count < 1500);

  console.log(`Общее кол-во конов = ${count}`);

  return winner;
}
