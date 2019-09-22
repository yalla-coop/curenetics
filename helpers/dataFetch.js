const fetch = require("node-fetch");
const sample = 'https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json';

const {
  getTrialsByKey,
  getValidTrialsByKey,
  getTrialsByValue
} = require("./filterFunctions");



// run this with `node dataFetch.js`
const fetchFunc = url => {
  fetch(url)
    .then(result => result.json())
    .then(result => {
      console.log('total result count is: ', result.size);
      const resultArray = result.results;
      
      // do some filtering here
      // > log out the count to reduce noise

      // 1.
      console.log('no. of trials with data for Phase: ', getTrialsByKey('Phase', resultArray).length);
      console.log('no. of trials with Keywords (property): ', getTrialsByKey('Keywords', resultArray).length);

      // 2.
      console.log('no. of trials with valid Keywords: ', getValidTrialsByKey('Keywords', resultArray).length);
      console.log('no. of trials with valid minimum age: ', getValidTrialsByKey('MinAge', resultArray).length);
      console.log('no. of trials with valid Phase: ', getValidTrialsByKey('Phase', resultArray).length);

      // 3.
      console.log('no. of trials of Phase 1: ', getTrialsByValue('Phase', resultArray, 1 ).length);
      console.log('no. of trials of Phase 2: ', getTrialsByValue('Phase', resultArray, 2 ).length);
      console.log('no. of trials of Phase 3: ', getTrialsByValue('Phase', resultArray, 3 ).length);
      console.log('no. of trials that are recruiting: ', getTrialsByValue('OverallStatus', resultArray, 'Recruiting' ).length);
      console.log('no. of trials that are active, but not recruiting: ', getTrialsByValue('OverallStatus', resultArray, 'Active, not recruiting' ).length);
      console.log('no. of trials that are completed: ', getTrialsByValue('OverallStatus', resultArray, 'Completed' ).length);
      
      


    })
    .catch(error =>
      console.log('error in dataFetch.js', error)
    );
};

// module.exports = fetchFunc;
// exports.fetchFunc = fetchFunc;

fetchFunc(sample);