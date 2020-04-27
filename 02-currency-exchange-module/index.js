const fetch = require('node-fetch');

async function getExchangeRates(options) {

  var base = 'https://www.amdoren.com/api/currency.php?api_key=';
  var apiKey = 'BnQapFpshPsKcHcGU3duxbpzCNKeK6';

  var optionsText = '';

  if (options.from && options.to) {
    optionsText += `&from=${options.from}&to=${options.to}`
  }

  if (options.amount) {
    optionsText += `&amount=${options.amount}`;
  }

  try {
    const response = await fetch(`${base}${apiKey}${optionsText}`);
    const json = await response.json();
    //console.log(json);
    return json;
  } catch (err) {
    //console.log('Something went wrong');
    return err;
  }

}

module.exports = getExchangeRates;


