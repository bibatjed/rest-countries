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
}

export default HTTPCountry;
