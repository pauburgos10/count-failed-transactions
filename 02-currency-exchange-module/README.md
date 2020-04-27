# NodeJS Currency Converter

A simple currency converter Powered by [Amdoren](https://www.amdoren.com)
From free account so ir has basic functionalities and is limited to 10 API calls per month

## Getting started

### Installation
This package can be installed using npm

```
npm install currency-conversion-paula
```

### Usage
Import `currency-conversion-paula` and use it as a Promise.

```
const convertCurrency = require('currency-conversion-paula');

var options = {
  from: 'USD',
  to: 'ARS',
  amount: '10'
};

convertCurrency.getExchangeRates(options)
  .then(res => console.log(res))
  .catch(err => console.log(err));

```

Without the amount parameter, the function will return the currency based on amount 1. 
