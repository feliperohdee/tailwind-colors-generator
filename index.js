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

const harmonize = (hue, start, end, interval) => {
	let result = [];

    for(let i = start; i <= end; i += interval) {
		if (i !== 0) {
			result = result.concat((hue + i) % 360);
		}
    }

    return result;
};

const analogous = hue => {
	return harmonize(hue, -30, 30, 30);
};

const complementary = hue => {
	return harmonize(hue, 180, 180, 1);
};

const split = hue => {
	return harmonize(hue, 150, 210, 60);
};

const tetradic = hue => {
	return harmonize(hue, 90, 270, 90);
};

const triadic = hue => {
	return harmonize(hue, 120, 240, 120);
};

const generate = hex => {
	const color = chroma(hex);
	const closestColor = findClosestColor(hex);
	const closestShade = chroma(closestColor.closestShadeLightness.hexcode);

	const [hue, s, l] = color.hsl();
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

	return {
		combinations: {
			analogous: analogous(hue).map(h => {
				return color.set('hsl.h', h).hex();
			}),
			complementary: complementary(hue).map(h => {
				return color.set('hsl.h', h).hex();
			}),
			split: split(hue).map(h => {
				return color.set('hsl.h', h).hex();
			}),
			tetradic: tetradic(hue).map(h => {
				return color.set('hsl.h', h).hex();
			}),
			triadic: triadic(hue).map(h => {
				return color.set('hsl.h', h).hex();
			})
		},
		hex: color.hex(),
		shades: closestColor.shades.map(shade => {
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
		})
	};
};

generate.findClosestColor = findClosestColor;

module.exports = generate;