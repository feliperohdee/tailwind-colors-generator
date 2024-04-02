/* eslint no-console: 0 */
const assert = require('assert');
const chroma = require('chroma-js');

const generate = require('./');

const hex = '#d7006c';
const rgb = 'rgb(215, 0, 108)';
const hsl = 'hsl(329.86, 100%, 42.16%)';
const expected = {
	closest: 'pink',
    combinations: {
        analogous: [{
			closest: 'fuchsia',
            hex: '#d700d7',
            hsl: [300, 1, 0.4215686274509804, 1],
            luminance: 0.1935336953515051,
            rgb: [215, 0, 215],
            text: {
                hex: '#ffffff',
				hsl: [0, 0, 1, 1],
                rgb: [255, 255, 255],
				type: 'light'
            }
        }, {
			closest: 'red',
            hex: '#d70000',
            hsl: [0, 1, 0.4215686274509804, 1],
            luminance: 0.14447072904399574,
            rgb: [215, 0, 0],
            text: {
                hex: '#ffffff',
				hsl: [0, 0, 1, 1],
                rgb: [255, 255, 255],
				type: 'light'
            }
        }],
        complementary: [{
			closest: 'green',
            hex: '#00d76b',
            hsl: [149.86046511627907, 1, 0.4215686274509804, 1],
            luminance: 0.496624142922715,
            rgb: [0, 215, 107],
            text: {
                hex: '#000000',
				hsl: [0, 0, 0, 1],
                rgb: [0, 0, 0],
				type: 'dark'
            }
        }],
        split: [{
			closest: 'lime',
            hex: '#00d700',
            hsl: [120, 1, 0.4215686274509804, 1],
            luminance: 0.4860087742815887,
            rgb: [0, 215, 0],
            text: {
                hex: '#000000',
				hsl: [0, 0, 0, 1],
                rgb: [0, 0, 0],
				type: 'dark'
            }
        }, {
			closest: 'teal',
            hex: '#00d7d7',
            hsl: [180, 1, 0.4215686274509804, 1],
            luminance: 0.535071740589098,
            rgb: [0, 215, 215],
            text: {
                hex: '#000000',
				hsl: [0, 0, 0, 1],
                rgb: [0, 0, 0],
				type: 'dark'
            }
        }],
        tetradic: [{
			closest: 'yellow',
            hex: '#d7d700',
            hsl: [60, 1, 0.4215686274509804, 1],
            luminance: 0.6304795033255844,
            rgb: [215, 215, 0],
            text: {
                hex: '#000000',
				hsl: [0, 0, 0, 1],
                rgb: [0, 0, 0],
				type: 'dark'
            }
        }, {
			closest: 'green',
            hex: '#00d76b',
            hsl: [149.86046511627907, 1, 0.4215686274509804, 1],
            luminance: 0.496624142922715,
            rgb: [0, 215, 107],
            text: {
                hex: '#000000',
				hsl: [0, 0, 0, 1],
                rgb: [0, 0, 0],
				type: 'dark'
            }
        }, {
			closest: 'violet',
            hex: '#0000d7',
            hsl: [240, 1, 0.4215686274509804, 1],
            luminance: 0.04906296630750938,
            rgb: [0, 0, 215],
            text: {
                hex: '#ffffff',
				hsl: [0, 0, 1, 1],
                rgb: [255, 255, 255],
				type: 'light'
            }
        }],
        triadic: [{
			closest: 'lime',
            hex: '#6cd700',
            hsl: [89.86046511627907, 1, 0.4215686274509804, 1],
            luminance: 0.517890225595324,
            rgb: [108, 215, 0],
            text: {
                hex: '#000000',
				hsl: [0, 0, 0, 1],
                rgb: [0, 0, 0],
				type: 'dark'
            }
        }, {
			closest: 'blue',
            hex: '#006cd7',
            hsl: [209.86046511627907, 1, 0.4215686274509804, 1],
            luminance: 0.15631420798005663,
            rgb: [0, 108, 215],
            text: {
                hex: '#ffffff',
				hsl: [0, 0, 1, 1],
                rgb: [255, 255, 255],
				type: 'light'
            }
        }]
    },
    hex: '#d7006c',
    hsl: [329.8604651162791, 1, 0.4215686274509804],
    luminance: 0.1552978258683217,
	number: 700,
    rgb: [215, 0, 108],
    shades: [{
        hex: '#fff0f9',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.9041972956031168,
        number: 50,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#000000',
			hsl: [0, 0, 0, 1],
            rgb: [0, 0, 0],
			type: 'dark'
        }
    }, {
        hex: '#ffe4f5',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.8333937732001061,
        number: 100,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#000000',
			hsl: [0, 0, 0, 1],
            rgb: [0, 0, 0],
			type: 'dark'
        }
    }, {
        hex: '#ffc9ee',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.6920633507823302,
        number: 200,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#000000',
			hsl: [0, 0, 0, 1],
            rgb: [0, 0, 0],
			type: 'dark'
        }
    }, {
        hex: '#ff9cde',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.503108604229311,
        number: 300,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#000000',
			hsl: [0, 0, 0, 1],
            rgb: [0, 0, 0],
			type: 'dark'
        }
    }, {
        hex: '#ff5fc5',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.33475635549264576,
        number: 400,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#ffffff',
			hsl: [0, 0, 1, 1],
            rgb: [255, 255, 255],
			type: 'light'
        }
    }, {
        hex: '#ff30ab',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.26314179128922627,
        number: 500,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#ffffff',
			hsl: [0, 0, 1, 1],
            rgb: [255, 255, 255],
			type: 'light'
        }
    }, {
        hex: '#f50d88',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.2147789867712152,
        number: 600,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#ffffff',
			hsl: [0, 0, 1, 1],
            rgb: [255, 255, 255],
			type: 'light'
        }
    }, {
        hex: '#d7006c',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.1552978258683217,
        number: 700,
        rgb: [215, 0, 108],
        self: true,
        text: {
            hex: '#ffffff',
			hsl: [0, 0, 1, 1],
            rgb: [255, 255, 255],
			type: 'light'
        }
    }, {
        hex: '#b00458',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.1002151995089306,
        number: 800,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#ffffff',
			hsl: [0, 0, 1, 1],
            rgb: [255, 255, 255],
			type: 'light'
        }
    }, {
        hex: '#92094c',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.06828169220771314,
        number: 900,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#ffffff',
			hsl: [0, 0, 1, 1],
            rgb: [255, 255, 255],
			type: 'light'
        }
    }, {
        hex: '#5b002a',
        hsl: [329.8604651162791, 1, 0.4215686274509804],
        luminance: 0.023913137555828322,
        number: 950,
        rgb: [215, 0, 108],
        self: false,
        text: {
            hex: '#ffffff',
			hsl: [0, 0, 1, 1],
            rgb: [255, 255, 255],
			type: 'light'
        }
    }],
    text: {
        hex: '#ffffff',
		hsl: [0, 0, 1, 1],
        rgb: [255, 255, 255],
		type: 'light'
    }
};

// generate
(() => {
    [
        hex,
        rgb,
        hsl
    ].forEach(input => {
        const result = generate(input);

        assert.deepEqual(result, expected);
    });

    console.log('✅ generate');
})();

// generate w/ combinations shades
(() => {
	const result = generate(hex, {
		combinationsShades: true
	});

	assert.ok(Array.isArray(result.combinations.analogous[0].shades));

    console.log('✅ generate w/ combinations shades');
})();

// closestColor
(() => {
    const result = generate.closestColor(hex, expected);

    assert.deepEqual(result.id, 'pink');

    console.log('✅ closestColor');
})();

// hexByNumber
(() => {
    const input = generate(hex);

    [
        50,
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        950
    ].forEach(number => {
        // purposely adding 20 to the number
        const result = generate.hexByNumber(number + 20, input);
        const shade = expected.shades.find(shade => {
            return shade.number === number;
        });

        assert.equal(result, shade ? shade.hex : 0);
    });

    console.log('✅ hexByNumber');
})();

// hexByLuminance
(() => {
    const input = generate(hex);
    const result = [
        0,
        10,
        15,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100
    ].map(luminance => {
        return generate.hexByLuminance(luminance, input);
    });

    assert.deepEqual(result, [
        input.shades[10].hex,
        input.shades[8].hex,
        input.shades[7].hex,
        input.shades[6].hex,
        input.shades[4].hex,
        input.shades[4].hex,
        input.shades[3].hex,
        input.shades[2].hex,
        input.shades[2].hex,
        input.shades[1].hex,
        input.shades[0].hex,
        input.shades[0].hex
    ]);

    console.log('✅ hexByLuminance');
})();

// textColor
(() => {
    const input = generate(hex);
    const result = new Array(10)
        .fill(0)
        .map((_, i) => {
            const {
                hex
            } = input.shades[i];

            return generate.textColor(i % 2 ? hex : chroma(hex), '#ffffff', '#000000');
        });

    assert.deepEqual(result, [{
        hex: '#000000',
		hsl: [0, 0, 0, 1],
        rgb: [0, 0, 0],
		type: 'dark'
    }, {
        hex: '#000000',
		hsl: [0, 0, 0, 1],
        rgb: [0, 0, 0],
		type: 'dark'
    }, {
        hex: '#000000',
		hsl: [0, 0, 0, 1],
        rgb: [0, 0, 0],
		type: 'dark'
    }, {
        hex: '#000000',
		hsl: [0, 0, 0, 1],
        rgb: [0, 0, 0],
		type: 'dark'
    }, {
        hex: '#ffffff',
		hsl: [0, 0, 1, 1],
        rgb: [255, 255, 255],
		type: 'light'
    }, {
        hex: '#ffffff',
		hsl: [0, 0, 1, 1],
        rgb: [255, 255, 255],
		type: 'light'
    }, {
        hex: '#ffffff',
		hsl: [0, 0, 1, 1],
        rgb: [255, 255, 255],
		type: 'light'
    }, {
        hex: '#ffffff',
		hsl: [0, 0, 1, 1],
        rgb: [255, 255, 255],
		type: 'light'
    }, {
        hex: '#ffffff',
		hsl: [0, 0, 1, 1],
        rgb: [255, 255, 255],
		type: 'light'
    }, {
        hex: '#ffffff',
		hsl: [0, 0, 1, 1],
        rgb: [255, 255, 255],
		type: 'light'
    }]);

    console.log('✅ textColor');
})();