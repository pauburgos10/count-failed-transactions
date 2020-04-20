const lineReader = require('line-reader');
Promise = require('bluebird');

var failed = 0;
var failedIds = [];

var eachLine = Promise.promisify(lineReader.eachLine);

eachLine('./data200416.txt', function (line) {
  let row = line.split(':');
  //console.log(row);
  switch (row[3]) {
    case 'RJ':
    case 'CD':
    let id   
      failedIds.push(row[0]);
      break;
  }
}).then(function () {
  console.log("Transactions failed. Count: ", failedIds.length);
  console.log("_______________________________");
  failedIds.forEach(function(value){
    console.log(value);
  });
});





