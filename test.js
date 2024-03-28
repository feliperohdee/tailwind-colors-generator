const assert = require('assert');
const generate = require('./');

assert.deepEqual(generate('#d7006c'), [
	{ hex: '#fff0f9', number: 50, self: false },
	{ hex: '#ffe4f5', number: 100, self: false },
	{ hex: '#ffc9ee', number: 200, self: false },
	{ hex: '#ff9cde', number: 300, self: false },
	{ hex: '#ff5fc5', number: 400, self: false },
	{ hex: '#ff30ab', number: 500, self: false },
	{ hex: '#f50d88', number: 600, self: false },
	{ hex: '#d7006c', number: 700, self: true },
	{ hex: '#b00458', number: 800, self: false },
	{ hex: '#92094c', number: 900, self: false },
	{ hex: '#5b002a', number: 950, self: false }
]);