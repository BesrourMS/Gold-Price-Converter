[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/besrourms/Gold-Price-Converter/blob/main/LICENSE)
[![](https://data.jsdelivr.com/v1/package/gh/besrourms/Gold-Price-Converter/badge)](https://www.jsdelivr.com/package/gh/besrourms/Gold-Price-Converter)

# GoldPriceConverter

A JavaScript class to convert gold prices from USD per ounce to any currency per gram for various karats (24K, 21K, 18K, and 14K). The class supports configurable precision for rounding results and includes robust input validation to ensure accurate conversions.

## Features

- Converts gold prices from USD per ounce to any target currency per gram.
- Supports standard gold karats: **24K**, **21K**, **18K**, and **14K**.
- Allows configuration of decimal precision for the output (default is 3 decimal places).
- Validates input parameters to prevent errors during conversion.
- No external dependencies; it's a standalone JavaScript class.

## Installation

To use the `GoldPriceConverter` class in your project:

1. Copy the `GoldPriceConverter.js` file into your project directory.
2. Import the class using `require` (for Node.js) or `import` (for ES6 modules).

### Example for Node.js
```javascript
const GoldPriceConverter = require('./GoldPriceConverter');
```

### Example for ES6 Modules
```javascript
import GoldPriceConverter from './GoldPriceConverter.js';
```

### Example for browser
```html
<script src="https://cdn.jsdelivr.net/gh/besrourms/gold-price-converter@latest/index.min.js"></script>
```

## Usage

1. **Create an instance of the class** by providing the required parameters:
   - `usdPerOunce`: The gold price in USD per ounce.
   - `exchangeRate`: The exchange rate from USD to the target currency.
   - `precision` (optional): The number of decimal places for rounding the results (default is 3).
   - `currencyCode` (optional): The target currency code (default is 'TND').

2. **Call the `getGoldPricesPerGram` method** to retrieve the gold prices per gram in the target currency for different karats.

### Example
```javascript
// Create an instance of GoldPriceConverter
const converter = new GoldPriceConverter(1800, 3.5, 2, 'TND');

// Get gold prices per gram in TND for various karats
const prices = converter.getGoldPricesPerGram();

console.log(prices);
// Output:
// {
//   "24K": 202.54,
//   "21K": 177.22,
//   "18K": 151.91,
//   "14K": 118.14
// }
```

In this example:
- The gold price is **1800 USD per ounce**.
- The exchange rate is **3.5 (USD to TND)**.
- The precision is set to **2 decimal places**.
- The target currency is **TND (Tunisian Dinar)**.

## Parameters

### Constructor Parameters
| Parameter         | Type   | Description                                                                 | Required | Default |
|-------------------|--------|-----------------------------------------------------------------------------|----------|---------|
| `usdPerOunce`     | Number | The gold price in USD per ounce. Must be a positive finite number.          | Yes      | -       |
| `exchangeRate`    | Number | The exchange rate from USD to the target currency. Must be a positive finite number. | Yes      | -       |
| `precision`       | Number | The number of decimal places to round the results to. Must be a non-negative integer. | No       | 3       |
| `currencyCode`    | String | The target currency code (e.g., 'TND', 'EUR'). Must be a non-empty string.   | No       | 'TND'   |

### Method
- **`getGoldPricesPerGram()`**: Returns an object with gold prices per gram in the target currency for **24K**, **21K**, **18K**, and **14K** gold. Each price is rounded to the specified precision.

## Error Handling

The class includes input validation to ensure correct usage:
- `usdPerOunce` and `exchangeRate` must be positive finite numbers.
- `precision` must be a non-negative integer.
- `currencyCode` must be a non-empty string.

If any parameter is invalid, the class throws an informative error message.

### Example
```javascript
try {
  const converter = new GoldPriceConverter(-1800, 3.5);
} catch (error) {
  console.error(error.message);  // Output: "usdPerOunce must be a positive finite number."
}
```

## Dependencies

- **None**. The `GoldPriceConverter` class is a standalone JavaScript class with no external dependencies.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's repository.