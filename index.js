const fs = require('fs');
const http = require('http');
const url = require('url');

// ReadFile Method
// const result = fs.readFileSync('./txt/input.txt', 'UTF-8');
// console.log(result);
// let text = `we know about avocado is: ${result}`;
// fs.writeFileSync('./txt/output.txt', text);

// Server
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

function replaceTemplate(temp, product) {
  let output = temp.replaceAll('{%PRODUCTNAME%}', product.productName);
  output = output.replaceAll('{%IMAGE%}', product.image);
  output = output.replaceAll('{%PRICE%}', product.price);
  output = output.replaceAll('{%FROM%}', product.from);
  output = output.replaceAll('{%NUTRIENTS%}', product.nutrients);
  output = output.replaceAll('{%QUANTITY%}', product.quantity);
  output = output.replaceAll('{%DESCRIPTION%}', product.description);
  output = output.replaceAll('{%ID%}', product.id);

  if (!product.organic) output = output.replaceAll('{%NOT_ORGANIC%}', 'not-organic');
  return output;
}

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // overview PAGE
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    const cardsHTML = dataObj.map((ele) => replaceTemplate(tempCard, ele)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);
    res.end(output);

    // product PAGE
  } else if (pathName === '/product') {
    res.end('This is the product');

    // api
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'content-type': 'application/json',
    });
    res.end(data);

    // Error PAGE
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      someInfo: 'this user is not ok',
    });
    res.end('<h1>This page not found</h1>');
  }
});

server.listen('8000', '127.0.0.1', () => {
  console.log('Listening Requests from Local host..');
});
