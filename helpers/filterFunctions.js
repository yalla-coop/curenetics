// filter the results with the following functions

// functions we may need:
// 1. get trials that have a certain key (data type)
// 2. get trials that have data entered for a certain key (data type)
// 3. search nested arrays (for data such as keywords). Return the record if there is a match.



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


exports.getTrialsByKey = getTrialsByKey;
