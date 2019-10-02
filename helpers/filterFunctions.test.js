var test = require('tape');
const { getTrialsByCountry } = require("./filterFunctions");

// 5 trials included in dummy data
const { dummyData } = require("./dummyData");

test('timing test', function (t) {

  // test test
  const a = { name: "Jane" };
  const b = { name: "Jane" };
  t.deepEqual(a, b, 'object matches');

  const trials = dummyData.results;

  // actual tests
  const trialsWithUkLocation = getTrialsByCountry(trials, 'United Kingdom');
  t.equal(trialsWithUkLocation.length, 5, '5 trials with locations in the UK');

  const trialsInFinland = getTrialsByCountry(trials, 'Finland');
  t.equal(trialsInFinland.length, 1, '1 trial with a location in Finland');

  const trialsInFrance = getTrialsByCountry(trials, 'France');
  t.equal(trialsInFrance.length, 1, '1 trial with a location in France');



  t.end();

});
