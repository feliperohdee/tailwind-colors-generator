# Color Generator Module

This README file explains how to use the `generate` function from our module.

## Description

The `generate` function is a color generator. The input of the function is a hex color code. It generates a color gradient based on the input hex color code and returns an array which contains various shades of the input color.

## Key Features

- The generated array includes lighter and darker shades of the input color.
- Each object in the returned array consists of three properties: 
  - `hex`: Color's hexadecimal representation
  - `number`: Number that represents the intensity/brightness of shade 
  - `self`: A boolean indicating if the color is the original passed color (`true`) or not (`false`).

## How to Use

Here's a sample usage:

```javascript
const assert = require('assert');
const generate = require('./');

let shades = generate('#d7006c');
console.log(shades);
```

In this example, the `generate` function is used with '#d7006c' as input. The function returns the following output:

```json
[
	{ "hex": "#fff0f9", "number": 50, "self": false },
	{ "hex": "#ffe4f5", "number": 100, "self": false },
	{ "hex": "#ffc9ee", "number": 200, "self": false },
	{ "hex": "#ff9cde", "number": 300, "self": false },
	{ "hex": "#ff5fc5", "number": 400, "self": false },
	{ "hex": "#ff30ab", "number": 500, "self": false },
	{ "hex": "#f50d88", "number": 600, "self": false },
	{ "hex": "#d7006c", "number": 700, "self": true },
	{ "hex": "#b00458", "number": 800, "self": false },
	{ "hex": "#92094c", "number": 900, "self": false },
	{ "hex": "#5b002a", "number": 950, "self": false }
]
```

It's an array of objects. Each object represents a shade of the color '#d7006c'. The `self` key is `true` only for the original input color shade.

## Note
The `assert` library is just used for verification in code testing. It's not part of the function's functionality itself.