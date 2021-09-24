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
