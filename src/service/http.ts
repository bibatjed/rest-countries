class HTTPCountry {
  static async getAllCountry() {
    return fetch(`https://restcountries.com/v3.1/all`).then((data) =>
      data.json()
    );
  }
  static async getCountryByRegion(region: string) {
    return fetch(`https://restcountries.com/v3.1/region/${region}`).then(
      (data) => data.json()
    );
  }
  static async getCountryByName(name: string) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(async (data) => {
        if (!data.ok) {
          //debugger
          return fetch(`https://restcountries.com/v3.1/alpha/${name}`)
            .then((data) => {
              if (!data.ok) {
                throw data;
              }
              return data.json();
            })
            .then((data) => {
              return data;
            })
            .catch((e) => {
              throw e;
            });
        } else {
          return data.json();
        }
      })
      .catch((e) => {
        throw e;
      });
  }
}

export default HTTPCountry;
