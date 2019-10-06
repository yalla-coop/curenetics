// pass in and output the same format as here:
// https://raw.githubusercontent.com/susanX/datatest/master/uk-Y018-2000-m-70.json
// > see dummyData.js for a sample

// maybe this should be called hasTheLocation()
const hasUkLocation = (objArr, country) => {
	return (
		objArr.filter(item => item.Facility.Address.Country === country).length > 0
	);
};

const filterByCountry = (
	resultObject,
	country,
	omitForeign = false,
	status = null
) => {
	const resultArray = resultObject.results;
	// const keys = Object.keys(resultArray);

	// we have to clone the array because we are overriding
	// the Locations reference in line 45
	// this one> item.Locations = filteredByCountry;
	// this is easy or we can use recursion
	const clonedArr = JSON.parse(JSON.stringify(resultArray));
	// why are we using Object.keys??
	// this is array and we can use reduce directly on it
	const keys = Object.keys(clonedArr);

	const results = keys.reduce((acc, val) => {
		// const item = resultArray[val];
		const item = clonedArr[val];

		// check .Locations property exists and has an array as it's value:
		if (
			item.hasOwnProperty("Locations") &&
			item["Locations"] &&
			item["Locations"].length > 0 &&
			hasUkLocation(item["Locations"], country)
		) {
			// > include ONLY locations in the country the user specified
			if (omitForeign) {
				const filteredByCountry = item["Locations"].filter(
					item => item.Facility.Address.Country === country
				);
				// Locations is a ref to the original
				item.Locations = filteredByCountry;
			}

			// > omit the WHOLE TRIAL if the status does not match the status specified
			if (typeof status === "string") {
				const filteredByStatus = item["Locations"].filter(
					item => item.Status === status
				);
				//this also a ref, that's why we need to clone
				item.Status = filteredByStatus;
				if (filteredByStatus.length > 0) {
					acc.push({ [val]: item });
				}
			} else {
				acc.push(item);
			}
		}
		return acc;
	}, []);

	return {
		size: results.length,
		results
	};
};

exports.filterByCountry = filterByCountry;
