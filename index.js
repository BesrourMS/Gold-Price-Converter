/**
 * A class to convert gold prices from USD per ounce to any currency per gram for various karats.
 */
class GoldPriceConverter {
    static OUNCE_TO_GRAM = 31.1035; // 1 troy ounce = 31.1035 grams
    
    #roundToPrecision(value) {
      const multiplier = Math.pow(10, this.precision);
      return Math.round(value * multiplier) / multiplier;
    }
    
    /**
     * Creates an instance of GoldPriceConverter.
     * @param {number} usdPerOunce - Gold price in USD per ounce.
     * @param {number} exchangeRate - Exchange rate from USD to target currency.
     * @param {number} [precision=3] - Number of decimal places for the results.
     * @param {string} [currencyCode='TND'] - Target currency code.
     * @throws {Error} If parameters are invalid.
     */
    constructor(usdPerOunce, exchangeRate, precision = 3, currencyCode = 'TND') {
      if (!Number.isFinite(usdPerOunce) || usdPerOunce <= 0) {
        throw new Error("usdPerOunce must be a positive finite number.");
      }
      if (!Number.isFinite(exchangeRate) || exchangeRate <= 0) {
        throw new Error("exchangeRate must be a positive finite number.");
      }
      if (!Number.isInteger(precision) || precision < 0) {
        throw new Error("precision must be a non-negative integer.");
      }
      if (typeof currencyCode !== 'string' || !currencyCode.trim()) {
        throw new Error("currencyCode must be a non-empty string.");
      }
      
      this.usdPerOunce = usdPerOunce;
      this.exchangeRate = exchangeRate;
      this.precision = precision;
      this.currencyCode = currencyCode.trim().toUpperCase();
    }
  
    /**
     * Calculates gold prices per gram in the target currency for standard karats.
     * @returns {Object} An object with prices for 24K, 21K, 18K, and 14K gold in the target currency per gram.
     */
    getGoldPricesPerGram() {
      // Convert price per ounce to price per gram in USD
      const goldPricePerGramUSD = this.usdPerOunce / GoldPriceConverter.OUNCE_TO_GRAM;
  
      // Convert price per gram to target currency
      const goldPricePerGramTarget = goldPricePerGramUSD * this.exchangeRate;
  
      // Calculate prices for different karats
      const goldPrices = {
        "24K": this.#roundToPrecision(goldPricePerGramTarget),
        "21K": this.#roundToPrecision(goldPricePerGramTarget * (21 / 24)),
        "18K": this.#roundToPrecision(goldPricePerGramTarget * (18 / 24)),
        "14K": this.#roundToPrecision(goldPricePerGramTarget * (14 / 24)),
      };
  
      return goldPrices;
    }
}