const fetch = require("node-fetch");
const sample = 'https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json';

const { getTrialsByKey } = require("./filterFunctions");

const fetchFunc = url => {
  fetch(url)
    .then(result => result.json())
    .then(result => {
      console.log('result count is: ', result.size);
      const resultArray = result.results;
      
      // do some filtering here
      // > log out the count to reduce noise
      console.log('no. of trials with data for Phase: ', getTrialsByKey('Phase', resultArray).length);



    })
    .catch(error =>
      console.log('error in dataFetch.js', error)
    );
};

// module.exports = fetchFunc;
// exports.fetchFunc = fetchFunc;

fetchFunc(sample);