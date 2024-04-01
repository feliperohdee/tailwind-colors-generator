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

let result = generate('#d7006c');
console.log(result);
```

In this example, the `generate` function is used with '#d7006c' as input. The function returns the following output:

```json
{
	"combinations": {
		"analogous": "[...]", // similar or related colors
		"complementary": "[...]", // colors opposite on the color wheel
		"split": "[...]", // colors that are similar distance apart on the color wheel
		"tetradic": "[...]", // four colors at 90 degrees apart on the color wheel
		"triadic": "[...]", // three colors at equal distances on the color wheel
	},
	"hex": "#d7006c",
	"hsl": "[...]",
	"luminance": 0.3,
	"rgb": "[...]",
	"shades": [
		{
			"hex": "#fff0f9",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 50,
			"rgb": "[...]",
			"self": false,
			"text":" {...}"
		}, {
			"hex": "#ffe4f5",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 100,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#ffc9ee",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 200,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#ff9cde",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 300,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#ff5fc5",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 400,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#ff30ab",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 500,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#f50d88",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 600,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#d7006c",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 700,
			"rgb": "[...]",
			"self": true,
			"text": "{...}"
		}, {
			"hex": "#b00458",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 800,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#92094c",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 900,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}, {
			"hex": "#5b002a",
			"hsl": "[...]",
			"luminance": 0.96,
			"number": 950,
			"rgb": "[...]",
			"self": false,
			"text": "{...}"
		}
	],
	"text": {
		"hex": "#fff",
		"hsl": "[...]",
		"rgb": "[...]",
		"type": "light"
	}
}
```

