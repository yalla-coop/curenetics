var test = require("tape");

// modified version
const { filterByCountry } = require("./filterByCountry");

// 5 trials included in dummy data
// > bear in mind, we get 36 in https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json
const { dummyData } = require("./dummyData");

// expected results
const { ukLocations } = require("./expected-results/ukLocations");
const { estoniaLocations } = require("./expected-results/estoniaLocations");

// - - - - - - - - - - - -

test("Number of trials by country - .size property", function(t) {
  const trialsWithUkLocation = filterByCountry(dummyData, "United Kingdom");
  t.equal(trialsWithUkLocation.size, 5, "5 trials with locations in the UK");

  const trialsInFinland = filterByCountry(dummyData, "Finland");
  t.equal(trialsInFinland.size, 1, "1 trial with a location in Finland");

  const trialsInFrance = filterByCountry(dummyData, "France");
  t.equal(trialsInFrance.size, 1, "1 trial with a location in France");

  t.end();
});

// deepEqual fails if running 2 or more
// > ok if running one
test("Omit trial locations if not in the country specified - .results property", function(t) {
  const showUkLocationsOnly = filterByCountry(dummyData, "United Kingdom", (omitForeign = true));
  t.deepEqual(showUkLocationsOnly, ukLocations, "omit non- UK locations from results");

  t.end();
});

// running twice must mutate dummyData
test("Omit trial locations if not in Estonia", function(t) {
  const showEstoniaLocationsOnly = filterByCountry(dummyData, "Estonia", (omitForeign = true));
  t.deepEqual(showEstoniaLocationsOnly, estoniaLocations, "omit non- Estonia locations from results");

  t.end();
});
