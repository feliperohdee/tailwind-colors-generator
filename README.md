# Tailwind Color Generator

## How to Use

The `generate` function is primarily used to generate an extensive list of attributes and combinations for a given color. Supporting helper functions are also included to retrieve colors by their properties or manipulate them accordingly.

### `generate()`

Generates a complete color object based on the provided color.

Parameters:

- **color** - String (hex, hsl, or rgb formatted color)

Returns a detailed color object containing hexadecimal, RGB and HSL representations of that color alongside other important properties such as shades and luminance.

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

### `generate.hexByNumber()`

Retrieves the hex value of a color based on a number identifier within an input color object.

Parameters:

- **number** - Numerical identifier for the desired shade
- **input** - Color object generated using `generate()`

Returns a matching hexadecimal color string if found, or 0 otherwise.

### `generate.hexByLuminance()`

Retrieves the hex value of a shade within an input color object with a matched luminance.

Parameters:

- **luminance** - Luminance level (ranging from 0 to 100)
- **input** - Color object generated using `generate()`

Returns an array of hexadecimal color strings representing shades with matching luminance levels.

### `generate.textColor()`

Determines the most readable text color given a background color.

Parameters:

- **color** - Background color's hex/rgb/hsl values
- **lightColor** - A light color's hex/rgb/hsl values typically white
- **darkColor** - A dark color's hex/rgb/hsl values typically black

Returns an object that includes the best text color in hex, hsl, rgb and the type (light/dark).

### `generate.closestColor()`

Finds the closest matching color from a list of colors.

Parameters:

- **color** - String (hex, hsl or rgb formatted color)
- **colors** - Array of color objects for comparison

Returns an object containing the closest color's identifier and respective distances.

## Contributing 

Bug reports and pull requests are welcome. This project aims to foster an environment for collaboration and contributors are expected to adhere to the code of conduct.

