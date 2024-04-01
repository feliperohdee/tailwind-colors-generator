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
        "analogous": [{
            "hex": "#d700d7",
            "hsl": [300, 1, 0.4215686274509804, 1],
            "luminance": 0.1935336953515051,
            "rgb": [215, 0, 215],
            "text": {
                "hex": "#ffffff",
                "hsl": [0, 0, 1, 1],
                "rgb": [255, 255, 255],
                "type": "light"
            }
        }, {
            "hex": "#d70000",
            "hsl": [0, 1, 0.4215686274509804, 1],
            "luminance": 0.14447072904399574,
            "rgb": [215, 0, 0],
            "text": {
                "hex": "#ffffff",
                "hsl": [0, 0, 1, 1],
                "rgb": [255, 255, 255],
                "type": "light"
            }
        }],
        "complementary": [{
            "hex": "#00d76b",
            "hsl": [149.86046511627907, 1, 0.4215686274509804, 1],
            "luminance": 0.496624142922715,
            "rgb": [0, 215, 107],
            "text": {
                "hex": "#000000",
                "hsl": [0, 0, 0, 1],
                "rgb": [0, 0, 0],
                "type": "dark"
            }
        }],
        "split": [{
            "hex": "#00d700",
            "hsl": [120, 1, 0.4215686274509804, 1],
            "luminance": 0.4860087742815887,
            "rgb": [0, 215, 0],
            "text": {
                "hex": "#000000",
                "hsl": [0, 0, 0, 1],
                "rgb": [0, 0, 0],
                "type": "dark"
            }
        }, {
            "hex": "#00d7d7",
            "hsl": [180, 1, 0.4215686274509804, 1],
            "luminance": 0.535071740589098,
            "rgb": [0, 215, 215],
            "text": {
                "hex": "#000000",
                "hsl": [0, 0, 0, 1],
                "rgb": [0, 0, 0],
                "type": "dark"
            }
        }],
        "tetradic": [{
            "hex": "#d7d700",
            "hsl": [60, 1, 0.4215686274509804, 1],
            "luminance": 0.6304795033255844,
            "rgb": [215, 215, 0],
            "text": {
                "hex": "#000000",
                "hsl": [0, 0, 0, 1],
                "rgb": [0, 0, 0],
                "type": "dark"
            }
        }, {
            "hex": "#00d76b",
            "hsl": [149.86046511627907, 1, 0.4215686274509804, 1],
            "luminance": 0.496624142922715,
            "rgb": [0, 215, 107],
            "text": {
                "hex": "#000000",
                "hsl": [0, 0, 0, 1],
                "rgb": [0, 0, 0],
                "type": "dark"
            }
        }, {
            "hex": "#0000d7",
            "hsl": [240, 1, 0.4215686274509804, 1],
            "luminance": 0.04906296630750938,
            "rgb": [0, 0, 215],
            "text": {
                "hex": "#ffffff",
                "hsl": [0, 0, 1, 1],
                "rgb": [255, 255, 255],
                "type": "light"
            }
        }],
        "triadic": [{
            "hex": "#6cd700",
            "hsl": [89.86046511627907, 1, 0.4215686274509804, 1],
            "luminance": 0.517890225595324,
            "rgb": [108, 215, 0],
            "text": {
                "hex": "#000000",
                "hsl": [0, 0, 0, 1],
                "rgb": [0, 0, 0],
                "type": "dark"
            }
        }, {
            "hex": "#006cd7",
            "hsl": [209.86046511627907, 1, 0.4215686274509804, 1],
            "luminance": 0.15631420798005663,
            "rgb": [0, 108, 215],
            "text": {
                "hex": "#ffffff",
                "hsl": [0, 0, 1, 1],
                "rgb": [255, 255, 255],
                "type": "light"
            }
        }]
    },
    "hex": "#d7006c",
    "hsl": [329.8604651162791, 1, 0.4215686274509804],
    "luminance": 0.1552978258683217,
    "rgb": [215, 0, 108],
    "shades": [{
        "hex": "#fff0f9",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.9041972956031168,
        "number": 50,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#000000",
            "hsl": [0, 0, 0, 1],
            "rgb": [0, 0, 0],
            "type": "dark"
        }
    }, {
        "hex": "#ffe4f5",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.8333937732001061,
        "number": 100,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#000000",
            "hsl": [0, 0, 0, 1],
            "rgb": [0, 0, 0],
            "type": "dark"
        }
    }, {
        "hex": "#ffc9ee",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.6920633507823302,
        "number": 200,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#000000",
            "hsl": [0, 0, 0, 1],
            "rgb": [0, 0, 0],
            "type": "dark"
        }
    }, {
        "hex": "#ff9cde",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.503108604229311,
        "number": 300,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#000000",
            "hsl": [0, 0, 0, 1],
            "rgb": [0, 0, 0],
            "type": "dark"
        }
    }, {
        "hex": "#ff5fc5",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.33475635549264576,
        "number": 400,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#ffffff",
            "hsl": [0, 0, 1, 1],
            "rgb": [255, 255, 255],
            "type": "light"
        }
    }, {
        "hex": "#ff30ab",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.26314179128922627,
        "number": 500,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#ffffff",
            "hsl": [0, 0, 1, 1],
            "rgb": [255, 255, 255],
            "type": "light"
        }
    }, {
        "hex": "#f50d88",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.2147789867712152,
        "number": 600,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#ffffff",
            "hsl": [0, 0, 1, 1],
            "rgb": [255, 255, 255],
            "type": "light"
        }
    }, {
        "hex": "#d7006c",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.1552978258683217,
        "number": 700,
        "rgb": [215, 0, 108],
        "self": true,
        "text": {
            "hex": "#ffffff",
            "hsl": [0, 0, 1, 1],
            "rgb": [255, 255, 255],
            "type": "light"
        }
    }, {
        "hex": "#b00458",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.1002151995089306,
        "number": 800,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#ffffff",
            "hsl": [0, 0, 1, 1],
            "rgb": [255, 255, 255],
            "type": "light"
        }
    }, {
        "hex": "#92094c",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.06828169220771314,
        "number": 900,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#ffffff",
            "hsl": [0, 0, 1, 1],
            "rgb": [255, 255, 255],
            "type": "light"
        }
    }, {
        "hex": "#5b002a",
        "hsl": [329.8604651162791, 1, 0.4215686274509804],
        "luminance": 0.023913137555828322,
        "number": 950,
        "rgb": [215, 0, 108],
        "self": false,
        "text": {
            "hex": "#ffffff",
            "hsl": [0, 0, 1, 1],
            "rgb": [255, 255, 255],
            "type": "light"
        }
    }],
    "text": {
        "hex": "#ffffff",
        "hsl": [0, 0, 1, 1],
        "rgb": [255, 255, 255],
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

- **hex** - String (hex formatted color)

Returns an object containing the closest color's identifier and respective distances.

## Contributing 

Bug reports and pull requests are welcome. This project aims to foster an environment for collaboration and contributors are expected to adhere to the code of conduct.

