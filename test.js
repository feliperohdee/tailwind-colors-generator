const assert = require('assert');
const generate = require('./');

const hex = '#d7006c';
const rgb = 'rgb(215, 0, 108)';
const hsl = 'hsl(329.86, 100%, 42.16%)';

[
	hex,
	rgb,
	hsl
].forEach(input => {

	assert.deepEqual(generate(input), {
		combinations: {
			analogous: [
				'#d700d7',
				'#d70000',
			],
			complementary: [
				'#00d76b'
			],
			split: [
				'#00d700',
				'#00d7d7'
			],
			tetradic: [
				'#d7d700',
				'#00d76b',
				'#0000d7'
			],
			triadic: [
				'#6cd700',
				'#006cd7'
			]
		},
		hex: '#d7006c',
		shades: [{
			hex: '#fff0f9',
			number: 50,
			self: false
		}, {
			hex: '#ffe4f5',
			number: 100,
			self: false
		}, {
			hex: '#ffc9ee',
			number: 200,
			self: false
		}, {
			hex: '#ff9cde',
			number: 300,
			self: false
		}, {
			hex: '#ff5fc5',
			number: 400,
			self: false
		}, {
			hex: '#ff30ab',
			number: 500,
			self: false
		}, {
			hex: '#f50d88',
			number: 600,
			self: false
		}, {
			hex: '#d7006c',
			number: 700,
			self: true
		}, {
			hex: '#b00458',
			number: 800,
			self: false
		}, {
			hex: '#92094c',
			number: 900,
			self: false
		}, {
			hex: '#5b002a',
			number: 950,
			self: false
		}]
	});
});
