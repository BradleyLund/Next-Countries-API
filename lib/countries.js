// exporting all the functions which get the data required from the countries api
// these functions are used in the getStaticProps method and the getStaticPaths method

export async function getCountryData() {
  const countryData = await fetch(
    "https://restcountries.com/v2/continent/africa"
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  // delete reunion from the list as it is giving issues
  let indexToDelete;
  for (let i = 0; i < countryData.length; i++) {
    if (countryData[i].name === "Réunion") {
      indexToDelete = i;
    }
  }

  countryData.splice(indexToDelete, 1);

  return countryData;
}

// This is the function used to get the country names which are used for dynamic routing

export async function getCountryNames() {
  const countryData = await fetch(
    "https://restcountries.com/v2/continent/africa"
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  // delete reunion from the list as it is giving issues
  let indexToDelete;
  for (let i = 0; i < countryData.length; i++) {
    if (countryData[i].name === "Réunion") {
      indexToDelete = i;
    }
  }

  countryData.splice(indexToDelete, 1);

  return countryData.map((country) => {
    return {
      params: {
        name: country.name,
      },
    };
  });
}

// once we are in the specific country page we can pull in the data just for that country
export async function getSpecificCountryData(name) {
  const specificCountryData = await fetch(
    `https://restcountries.com/v2/name/${name}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return specificCountryData;
}
