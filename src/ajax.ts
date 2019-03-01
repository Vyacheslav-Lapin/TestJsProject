import to from './to.js';

function getHttpResponse(url = 'localhost:8080/1', method = 'GET') {
  return new Promise((resolve, reject) => {
    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = () => {
      if (xmlHttpRequest.readyState === 4) {
        if (xmlHttpRequest.status === 200) {
          resolve(xmlHttpRequest.responseText);
        } else {
          reject(xmlHttpRequest);
        }
      }
    };
    xmlHttpRequest.open(method, url);
    xmlHttpRequest.send(null);
  });
}

async function show() {
  const {err, text} = await to(getHttpResponse());
  if (!err) {
    const {id, price} = JSON.parse(text);
    console.log(id + price);
  } else {
    const {status, message} = err;
    console.log(`Status: ${status}, message: ${message}`);
  }
}

show()
  .catch(reason => console.log(reason.status));

// getHttpResponse()
//   .then((text) => {
//     const {id, price} = JSON.parse(text);
//     return id + price;
//   }).then(pip => console.log(pip))
//   .catch(reason => console.log(reason.status));
//
// console.log('мама мыла раму');
