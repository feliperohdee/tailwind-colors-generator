const chroma = require('chroma-js');
const referenceColorFamilies = require('./referenceColorFamilies.json');

const findClosestColor = targetColor => {
	let colors = referenceColorFamilies;

	colors = colors.map(color => {
		return {
			...color,
			shades: color.shades.map(shade => {
				return {
					...shade,
					delta: chroma.deltaE(targetColor, shade.hexcode)
				};
			})
		};
	});

	colors = colors.map(color => {
		return {
			...color,
			closestShade: color.shades.reduce((prev, current) => {
				return prev.delta < current.delta ? prev : current;
			}, {
				delta: Infinity
			})
		};
	});

	const closestColor = colors.reduce((prev, current) => {
		return prev.closestShade.delta < current.closestShade.delta ? prev : current;
	}, {
		closestShade: {
			delta: Infinity
		}
	});

	closestColor.shades = closestColor.shades.map(shade => {
		return {
			...shade,
			lightnessDiff: Math.abs(
				chroma(shade.hexcode).get('hsl.l') - chroma(targetColor).get('hsl.l')
			)
		};
	});

	closestColor.closestShadeLightness = closestColor.shades.reduce((prev, current) => {
		return prev.lightnessDiff < current.lightnessDiff ? prev : current;
	}, {
		lightnessDiff: Infinity
	});

	return closestColor;
};

const generate = hex => {
	const color = chroma(hex);
	const closestColor = findClosestColor(hex);
	const closestShade = chroma(closestColor.closestShadeLightness.hexcode);

	const hue = color.get('hsl.h');
	const closestShadeHue = closestShade.get('hsl.h');
	const saturationRatio = color.get('hsl.s') / closestShade.get('hsl.s');

	let hueDiff = hue - (closestShadeHue || 0);

	if (hueDiff === 0) {
		hueDiff = closestShadeHue.toString();
	} else if (hueDiff > 0) {
		hueDiff = '+' + hueDiff;
	} else {
		hueDiff = hueDiff.toString();
	}

	return closestColor.shades.map(shade => {
		let shadeHex = shade.hexcode;
		
		if (closestColor.closestShadeLightness.number === shade.number) {
			shadeHex = color.hex();
		} else {
			const shadeSaturation = chroma(shadeHex).get('hsl.s') * saturationRatio;
	
			shadeHex = chroma(shadeHex).set('hsl.s', shadeSaturation).hex();
			shadeHex = chroma(shadeHex).set('hsl.h', hueDiff).hex();
		}

		return {
			hex: shadeHex,
			number: shade.number,
			self: closestColor.closestShadeLightness.number === shade.number
		}
	});
};

generate.findClosestColor = findClosestColor;

module.exports = generate;