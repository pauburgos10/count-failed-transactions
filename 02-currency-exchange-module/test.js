const exchange = require ('./index');

var options = {
  from: 'USD',
  to: 'ARS',
  amount: '10'
};

exchange(options)
  .then(res => console.log(res))
  .catch(err => console.log(err));

  
