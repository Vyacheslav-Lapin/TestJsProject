// document.writeln("<span>12345 Вышел завйчик погулять!</span>");

import insert2Body from './utils';

const { a: a1, b: { q }, c } = { a: 1, b: { q: 6, w: 9 }, c: 3 };

console.log(a1); // 1
console.log(c); // 2
console.log(q); // 2

insert2Body('12345 Вышел зайчик погулять!');

const z = 56;

const x = {
  x: 5,
  y: 8,
  z,
  get a() {
    return 5;
  },
};

console.log(x);
