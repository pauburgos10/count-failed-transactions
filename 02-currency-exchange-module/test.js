const exchange = require ('./index');

var options = {
  from: 'USD',
  to: 'ARS',
  amount: '10'
};

(async function f () {
  const result = await exchange(options);
  console.log(result);
})();
  
