const BARREL_ITEMS = 4;
const VELOCITY = 10;

function rotateBarrel(index, force) {
  return VELOCITY * index * force % BARREL_ITEMS;
}

export default function slot() {
// function slot() {
  const force = Math.round(Math.random() * 1000);
  const barrel1 = rotateBarrel(1, force);
  const barrel2 = rotateBarrel(2, force);
  const barrel3 = rotateBarrel(3, force);

  console.log(barrel1, barrel2, barrel3);

  return barrel1 === barrel2 && barrel2 === barrel3;
}

// console.log(slot() ? 'Вы выиграли!' : 'Вы проиграли!');
