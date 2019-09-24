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


// could extend 1 with functionality of 2 by passing an array of conditions
// > if length > 0, run the conditions
// > store conditions in an object, this will serve as validation

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
      // v see below
    ) {
      acc.push({ [val] : resultArray[val] });
    }
    return acc;
  }, []);
};


// use this to search data:
// > functions that will format the data depending upon the type searched for

// evaluate (presence of the search term) to true or false:
const searchFuncs = {
  Phase: (val, con) => val === con,
  Gender: (val, con) => val.toLowerCase() === con.toLowerCase(),
  MaxAge: (val, con) => parseInt(val) === parseInt(con),
  // need to test the length as an empty array is truthy
  Conditions: (val, con) => val.filter(item => item.toLowerCase().includes(`${con}`.toLowerCase())).length > 0
};


const getTrialsByMatched = ( dataType, resultArray, userCondition ) => {
  const keys = Object.keys(resultArray);
  return keys.reduce( (acc, val) => {
    const item = resultArray[val];
    if (
      item.hasOwnProperty(dataType) &&
      item[dataType] &&
      item[dataType] !== dataValidation[dataType] &&
      // pass in original value and condition
      // > this will search data using searchFuncs specific to dataType
      searchFuncs[dataType](item[dataType], userCondition)

      // if dataType === Phase, search exact userCondition (item[dataType] === userCondition)
      // if dataType === Gender, item[dataType].toLowerCase() === userCondition.toLowerCase()
      // if dataType === MaxAge, parseInt(item[dataType]) === parseInt(userCondition)
      
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
