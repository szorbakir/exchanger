class Converter {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }

  async convertCurrency() {
    const url = `https://api.exchangeratesapi.io/latest?base=${this.source}&symbols=${this.target}`;

    const response = await fetch(url);
    return await response.json();
  }
}
