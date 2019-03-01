const $ = document.querySelector;

export function add2Document(s) {
  // "Молодёжный" способ
  $('body').innerHTML += `<span>${s}</span>`;

  // "Классический" способ:
  // const htmlSpanElement = document.createElement("span");
  // htmlSpanElement.appendChild(document.createTextNode(s));
  // document.body.appendChild(htmlSpanElement);
}

export function shuffle(array) {
  array = Array.prototype.slice.call(array, 0);

  let i = array.length;

  if (i !== 0)
    while (--i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}
