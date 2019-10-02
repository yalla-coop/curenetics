// pass in and output the same format as here:
// https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json
// > see dummyData.js for a sample

const hasUkLocation = (objArr, country) => {
  return objArr.filter(item => item.Facility.Address.Country === country).length > 0;
};

const filterByCountry = (resultObject, country, omitForeign = false, status = null) => {
  const resultArray = resultObject.results;
  const keys = Object.keys(resultArray);

  return keys.reduce((acc, val) => {
    const item = resultArray[val];

    // check .Locations property exists and has an array as it's value:
    if (item.hasOwnProperty("Locations") && item["Locations"] && item["Locations"].length > 0 && hasUkLocation(item["Locations"], country)) {
      // > include ONLY locations in the country the user specified
      if (omitForeign === true) {
        const filteredByCountry = item["Locations"].filter(item => item.Facility.Address.Country === country);
        item.Locations = filteredByCountry;
      }

      // > omit the WHOLE TRIAL if the status does not match the status specified
      if (typeof status === "string") {
        const filteredByStatus = item["Locations"].filter(item => item.Status === status);
        item.Status = filteredByStatus;
        if (filteredByStatus.length > 0) {
          acc.push({ [val]: item });
        }
      } else {
        acc.push({ [val]: item });
      }
    }
    return acc;
  }, []);
};

// {
//   size: size,
//   results: [
//     {}
//   ]
// }

exports.filterByCountry = filterByCountry;
