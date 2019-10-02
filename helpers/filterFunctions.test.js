var test = require("tape");

// modified version
const { filterByCountry } = require("./filterByCountry");

// 5 trials included in dummy data
// > bear in mind, we get 36 in https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json
const { dummyData } = require("./dummyData");

// expected results
const { ukLocations } = require("./expected-results/ukLocations");

// - - - - - - - - - - - -

test("Count number of trials with a location in a specified country", function(t) {
  const trialsWithUkLocation = filterByCountry(dummyData, "United Kingdom");
  t.equal(trialsWithUkLocation.length, 5, "5 trials with locations in the UK");

  const trialsInFinland = filterByCountry(dummyData, "Finland");
  t.equal(trialsInFinland.length, 1, "1 trial with a location in Finland");

  const trialsInFrance = filterByCountry(dummyData, "France");
  t.equal(trialsInFrance.length, 1, "1 trial with a location in France");

  t.end();
});

test("Omit trial locations from the data the location is not in the country specified ", function(t) {
  const showUkLocationsOnly = filterByCountry(dummyData, "United Kingdom", (omitForeign = true));
  t.deepEqual(showUkLocationsOnly, ukLocations, "omit non-uk locations from results");

  t.end();
});
