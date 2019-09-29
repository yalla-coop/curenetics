const fetch = require("node-fetch");

const sample = 'https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json';

const {
  getTrialsByKey,
  getValidTrialsByKey,
  getTrialsByValue,
  getTrialsByMatched,
  getTrialsByCountry
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

      
      // 1.
      console.log('--- 1: getTrialsByKey --- ');
      console.log('no. of trials with data for Phase: ', getTrialsByKey('Phase', resultArray).length);
      console.log('no. of trials with Keywords (property): ', getTrialsByKey('Keywords', resultArray).length);

      
      // 2.
      console.log('--- 2: getValidTrialsByKey --- ');
      console.log('no. of trials with valid Keywords: ', getValidTrialsByKey('Keywords', resultArray).length);
      console.log('no. of trials with valid minimum age: ', getValidTrialsByKey('MinAge', resultArray).length);
      console.log('no. of trials with valid Phase: ', getValidTrialsByKey('Phase', resultArray).length);

      
      // 3.
      console.log('--- 3: getTrialsByValue --- ');
      console.log('no. of trials of Phase 1: ', getTrialsByValue('Phase', resultArray, 1 ).length);
      console.log('no. of trials of Phase 2: ', getTrialsByValue('Phase', resultArray, 2 ).length);
      console.log('no. of trials of Phase 3: ', getTrialsByValue('Phase', resultArray, 3 ).length);
      console.log('no. of trials that are recruiting: ', getTrialsByValue('OverallStatus', resultArray, 'Recruiting' ).length);
      console.log('no. of trials that are active, but not recruiting: ', getTrialsByValue('OverallStatus', resultArray, 'Active, not recruiting' ).length);
      console.log('no. of trials that are completed: ', getTrialsByValue('OverallStatus', resultArray, 'Completed' ).length);


      // 4.
      console.log('--- 4: getTrialsByMatched --- ');
      console.log('matched Phase 1: ', getTrialsByMatched('Phase', resultArray, 1 ).length);
      console.log('matched Phase 4: ', getTrialsByMatched('Phase', resultArray, 4 ).length);
      console.log('matched Gender "male": ', getTrialsByMatched('Gender', resultArray, 'male' ).length);
      console.log('matched Gender "mAlE": ', getTrialsByMatched('Gender', resultArray, 'mAlE' ).length);
      console.log('matched Gender "femalE": ', getTrialsByMatched('Gender', resultArray, 'femalE' ).length);
      console.log('matched Gender "aLL": ', getTrialsByMatched('Gender', resultArray, 'aLL' ).length);
      console.log('matched MaxAge 80: ', getTrialsByMatched('MaxAge', resultArray, 80 ).length);

      console.log('matched Conditions "breast": ', getTrialsByMatched('Conditions', resultArray, 'breast' ).length);
      console.log('matched Conditions "Prostate": ', getTrialsByMatched('Conditions', resultArray, 'Prostate' ).length);
      console.log('matched Conditions "ovarian": ', getTrialsByMatched('Conditions', resultArray, 'ovarian' ).length);
      console.log('matched Conditions "neoplasms": ', getTrialsByMatched('Conditions', resultArray, 'neoplasms' ).length);

      // todo:
      // - age range (get min and max age from a slider, for example)
      // - locations filtering -> see filterFunctions.js for further notes on this
      // ^ both of the above require getTrials.. function refactor or adapted version

      console.log('--- 5: getTrialsByCountry --- ');
      console.log('no. of trials that contain locations in "United Kingdom": ', getTrialsByCountry(resultArray, 'United Kingdom').length);
      console.log('no. of trials that contain locations in "United States": ', getTrialsByCountry(resultArray, 'United States').length);
      console.log('no. of trials that contain locations in "Germany": ', getTrialsByCountry(resultArray, 'Germany').length);

      // wont log enough levels deep in terminal:
      console.log('Show trials with locations in "United Kingdom", omitting foreign results. JUST SHOW LENGTH because cant test in terminal', getTrialsByCountry(resultArray, 'United Kingdom', omitForeign = true).length);
      
      


    })
    .catch(error =>
      console.log('error in dataFetch.js', error)
    );
};

// module.exports = fetchFunc;
// exports.fetchFunc = fetchFunc;

fetchFunc(sample);