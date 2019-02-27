const $ = document.querySelector;

export default function (s) {
  // "Молодёжный" способ
  $('body').innerHTML += `<span>${s}</span>`;

  // "Классический" способ:
  // const htmlSpanElement = document.createElement("span");
  // htmlSpanElement.appendChild(document.createTextNode(s));
  // document.body.appendChild(htmlSpanElement);
}
