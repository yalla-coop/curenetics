const fetch = require("node-fetch");
const sample = 'https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json';

const {
  getTrialsByKey,
  getValidTrialsByKey,
  getTrialsByValue,
  getTrialsByMatched
} = require("./filterFunctions");



// run this with `node dataFetch.js`
const fetchFunc = url => {
  fetch(url)
    .then(result => result.json())
    .then(result => {
      console.log('total result count is: ', result.size);
      const resultArray = result.results;
      // console.log(resultArray);
      
      // do some filtering here
      // > log out the count to reduce noise

      console.log('--- 1: getTrialsByKey --- ');
      // 1.
      console.log('no. of trials with data for Phase: ', getTrialsByKey('Phase', resultArray).length);
      console.log('no. of trials with Keywords (property): ', getTrialsByKey('Keywords', resultArray).length);

      console.log('--- 2: getValidTrialsByKey --- ');
      // 2.
      console.log('no. of trials with valid Keywords: ', getValidTrialsByKey('Keywords', resultArray).length);
      console.log('no. of trials with valid minimum age: ', getValidTrialsByKey('MinAge', resultArray).length);
      console.log('no. of trials with valid Phase: ', getValidTrialsByKey('Phase', resultArray).length);

      console.log('--- 3: getTrialsByValue --- ');
      // 3.
      console.log('no. of trials of Phase 1: ', getTrialsByValue('Phase', resultArray, 1 ).length);
      console.log('no. of trials of Phase 2: ', getTrialsByValue('Phase', resultArray, 2 ).length);
      console.log('no. of trials of Phase 3: ', getTrialsByValue('Phase', resultArray, 3 ).length);
      console.log('no. of trials that are recruiting: ', getTrialsByValue('OverallStatus', resultArray, 'Recruiting' ).length);
      console.log('no. of trials that are active, but not recruiting: ', getTrialsByValue('OverallStatus', resultArray, 'Active, not recruiting' ).length);
      console.log('no. of trials that are completed: ', getTrialsByValue('OverallStatus', resultArray, 'Completed' ).length);

      // 4.
      console.log('--- 4: getTrialsByMatched --- ');
      // getTrialsByMatched
      console.log('matched Phase 1: ', getTrialsByMatched('Phase', resultArray, 1 ).length);
      
      


    })
    .catch(error =>
      console.log('error in dataFetch.js', error)
    );
};

// module.exports = fetchFunc;
// exports.fetchFunc = fetchFunc;

fetchFunc(sample);