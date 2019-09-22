const fetch = require("node-fetch");

const sample = 'https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json';

const fetchFunc = url => {
  fetch(url)
    .then(result => result.json())
    .then(result => console.log(result))
    .catch(error =>
      console.log(error)
    );
};

fetchFunc(sample);