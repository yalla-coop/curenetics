// filter the results with the following functions

// functions we may need:

// 1. top level properties:
// a) get trials that have a certain key (data type)
// b) get trials that have VALID data entered for a certain key (data type)
// > ultimately, this needs to be queries with Sola
// - can't be 'N/A'
// - can't be null
// - can't be 'Unknown status', etc -> may not want to filter this out though.
// c) search get trials by key that have a certain value (e.g. Phase: 3, Gender: 'Male')


// 2. second level properties:
// a + b) search nested arrays (for data such as keywords). Return the record if there is a match.
// c) search by a certain value


// 3. combine the above top level and nested functions in a way that can be used in a search function

// ---

// 1. get all trials that have a particular key / data type
const getTrialsByKey = ( dataType, resultArray ) => {
  const keys = Object.keys(resultArray);
  return keys.reduce( (acc, val) => {
    if (resultArray[val].hasOwnProperty(dataType)) {
      acc.push({ [val] : resultArray[val] });
    }
    return acc;
  }, []);
};

// 2. valid trials
// - want this to be a catch all for invalid entries
const getValidTrialsByKey = ( dataType, resultArray ) => {
  const keys = Object.keys(resultArray);
  return keys.reduce( (acc, val) => {
    const item = resultArray[val];
    if (item.hasOwnProperty(dataType) && item[dataType] && item[dataType] !== 'N/A' ) {
      acc.push({ [val] : resultArray[val] });
    }
    return acc;
  }, []);
};



// use this to filter out useless data:
const dataValidation = {
  Keywords: null,
  MaxAge: 'N/A',
  MinAge: 'N/A',
  OverallStatus: 'Unknown Status',
  Conditions: undefined // can't filter on 'undefined'
};


// 3. search by value
const getTrialsByValue = ( dataType, resultArray, userCondition ) => {
  const keys = Object.keys(resultArray);
  return keys.reduce( (acc, val) => {
    const item = resultArray[val];
    if (
      item.hasOwnProperty(dataType) &&
      item[dataType] &&
      item[dataType] !== dataValidation[dataType] &&
      item[dataType] === userCondition
      // may want to put userCondition to lowercase, filter for age bracket, etc.
      // > userCondition needs to be processed according to dataType
      // > see below solution
    ) {
      acc.push({ [val] : resultArray[val] });
    }
    return acc;
  }, []);
};



// evaluate (presence of the search term) to be true or false:
// > add to result array if true
const searchFuncs = {
  Phase: (val, con) => val === con,
  Gender: (val, con) => val.toLowerCase() === con.toLowerCase(),
  MaxAge: (val, con) => parseInt(val) === parseInt(con),
  // if there are no matches, filter returns an empty array, which is truthy
  Conditions: (val, con) => val.filter(item => item.toLowerCase().includes(con.toLowerCase())).length > 0
};
// if dataType === Phase, search exact userCondition (item[dataType] === userCondition)
// if dataType === Gender, item[dataType].toLowerCase() === userCondition.toLowerCase()
// if dataType === MaxAge, parseInt(item[dataType]) === parseInt(userCondition)



const getTrialsByMatched = ( dataType, resultArray, userCondition ) => {
  const keys = Object.keys(resultArray);
  const addResult = searchFuncs[dataType];

  return keys.reduce( (acc, val) => {
    const item = resultArray[val];
    if (
      item.hasOwnProperty(dataType) &&
      item[dataType] &&
      item[dataType] !== dataValidation[dataType] &&
      // search data using searchFunc specific to dataType, and user search term
      addResult(item[dataType], userCondition)
    ) {
      acc.push({ [val] : resultArray[val] });
    }
    return acc;
  }, []);
};


exports.getTrialsByKey = getTrialsByKey;
exports.getValidTrialsByKey = getValidTrialsByKey;
exports.getTrialsByValue = getTrialsByValue;
exports.getTrialsByMatched = getTrialsByMatched;


// potential todo list:
// > Locations and Age range need to be treated differently

// 1. search an age range (trials that allow applicants of a certain age range)
// > current searchFuncs work with a single dataType. This requires two (MaxAge and MinAge)

// 2. search the Locations property, this includes:
// a) location list
// b) contact list
// c) recuiting status (not always the same as parent object's OverallStatus property)

// ---

// Location Search thoughts:
// - main thing people probably want to know is the name and location of the trial
// - results could be filtered depending upon quality of the data:

// 1. filter out trials that:
// a) aren't recruiting (or show no status)
// b) with no trial contact details (caveat there will be location + name)
// c) that are abroad
// d) with no name (this is the institution name)
// > a city, country, and zip code in some results is not enough!
// > 'Research Site' is not enough

// 2. show:
// a) if a trial has multiple locations