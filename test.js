/* eslint no-console: 0 */
const assert = require('assert');
const chroma = require('chroma-js');

const generate = require('./');

const hex = '#d7006c';
const rgb = 'rgb(215, 0, 108)';
const hsl = 'hsl(329.86, 100%, 42.16%)';
const expected = {
    combinations: {
        analogous: [{
            hex: '#d700d7',
            luminance: 0.1935336953515051,
			text: '#ffffff'
        }, {
            hex: '#d70000',
            luminance: 0.14447072904399574,
			text: '#ffffff'
        }],
        complementary: [{
            hex: '#00d76b',
            luminance: 0.496624142922715,
			text: '#000000'
        }],
        split: [{
            hex: '#00d700',
            luminance: 0.4860087742815887,
			text: '#000000'
        }, {
            hex: '#00d7d7',
            luminance: 0.535071740589098,
			text: '#000000'
        }],
        tetradic: [{
            hex: '#d7d700',
            luminance: 0.6304795033255844,
			text: '#000000'
        }, {
            hex: '#00d76b',
            luminance: 0.496624142922715,
			text: '#000000'
        }, {
            hex: '#0000d7',
            luminance: 0.04906296630750938,
			text: '#ffffff'
        }],
        triadic: [{
            hex: '#6cd700',
            luminance: 0.517890225595324,
			text: '#000000'
        }, {
            hex: '#006cd7',
            luminance: 0.15631420798005663,
			text: '#ffffff'
        }]
    },
    hex: '#d7006c',
    luminance: 0.1552978258683217,
    shades: [{
        hex: '#fff0f9',
        luminance: 0.9041972956031168,
        number: 50,
        self: false,
		text: '#000000'
    }, {
        hex: '#ffe4f5',
        luminance: 0.8333937732001061,
        number: 100,
        self: false,
		text: '#000000'
    }, {
        hex: '#ffc9ee',
        luminance: 0.6920633507823302,
        number: 200,
        self: false,
		text: '#000000'
    }, {
        hex: '#ff9cde',
        luminance: 0.503108604229311,
        number: 300,
        self: false,
		text: '#000000'
    }, {
        hex: '#ff5fc5',
        luminance: 0.33475635549264576,
        number: 400,
        self: false,
		text: '#ffffff'
    }, {
        hex: '#ff30ab',
        luminance: 0.26314179128922627,
        number: 500,
        self: false,
		text: '#ffffff'
    }, {
        hex: '#f50d88',
        luminance: 0.2147789867712152,
        number: 600,
        self: false,
		text: '#ffffff'
    }, {
        hex: '#d7006c',
        luminance: 0.1552978258683217,
        number: 700,
        self: true,
		text: '#ffffff'
    }, {
        hex: '#b00458',
        luminance: 0.1002151995089306,
        number: 800,
        self: false,
		text: '#ffffff'
    }, {
        hex: '#92094c',
        luminance: 0.06828169220771314,
        number: 900,
        self: false,
		text: '#ffffff'
    }, {
        hex: '#5b002a',
        luminance: 0.023913137555828322,
        number: 950,
        self: false,
		text: '#ffffff'
    }],
	text: '#ffffff'
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

			return generate.textColor(i % 2 ? hex : chroma(hex), '#fff', '#000');
		});

	assert.deepEqual(result, [
		'#000000',
		'#000000',
		'#000000',
		'#000000',
		'#ffffff',
		'#ffffff',
		'#ffffff',
		'#ffffff',
		'#ffffff',
		'#ffffff'
	]);

	console.log('✅ textColor');
})();