// document.writeln("<span>12345 Вышел завйчик погулять!</span>");

const $ = document.querySelector;

// "Молодёжный" способ
$('body').innerHTML += '<span>12345 Вышел зайчик погулять!</span>';

// "Классический" способ:
// const htmlSpanElement = document.createElement("span");
// htmlSpanElement.appendChild(document.createTextNode("12345 Вышел зайчик погулять!"));
// document.body.appendChild(htmlSpanElement);

const z = 56;

const x = {
  x: 5,
  y: 8,
  z,
  get a() {
    return 5;
  },
};

// console.log(x);
