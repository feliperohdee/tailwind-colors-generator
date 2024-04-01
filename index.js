const chroma = require('chroma-js');

const contrast = require('./contrast');
const referenceColorFamilies = require('./referenceColorFamilies.json');

const findClosestColor = targetColor => {
    let colors = referenceColorFamilies;

    colors = colors.map(color => {
        return {
            ...color,
            shades: color.shades.map(shade => {
                return {
                    ...shade,
                    delta: chroma.deltaE(targetColor, shade.hex)
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
                chroma(shade.hex).get('hsl.l') - chroma(targetColor).get('hsl.l')
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

    for (let i = start; i <= end; i += interval) {
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

const generate = src => {
    const color = chroma(src);

	const hex = color.hex();
	const luminance = color.luminance();
	
    const closestColor = findClosestColor(hex);
    const closestShade = chroma(closestColor.closestShadeLightness.hex);
    const closestShadeHue = closestShade.get('hsl.h');
	
    const [hue] = color.hsl();
    const saturationRatio = color.get('hsl.s') / closestShade.get('hsl.s');

    let hueDiff = hue - (closestShadeHue || 0);

    if (hueDiff === 0) {
        hueDiff = closestShadeHue.toString();
    } else if (hueDiff > 0) {
        hueDiff = '+' + hueDiff;
    } else {
        hueDiff = hueDiff.toString();
    }

	const combination = hue => {
		const newColor = color.set('hsl.h', hue);
		const hex = newColor.hex();
		const luminance = newColor.luminance();
		const text = textColor(hex);

		return {
			hex,
			luminance,
			text
		};
	};

    return {
        combinations: {
            analogous: analogous(hue).map(combination),
            complementary: complementary(hue).map(combination),
            split: split(hue).map(combination),
            tetradic: tetradic(hue).map(combination),
            triadic: triadic(hue).map(combination)
        },
        hex,
        luminance: color.luminance(),
        shades: closestColor.shades.map(shade => {
			const result = {
				hex,
				luminance
			};

			if (closestColor.closestShadeLightness.number !== shade.number) {
                let shadeColor = chroma(shade.hex);
                let shadeSaturation = shadeColor.get('hsl.s') * saturationRatio;

                shadeColor = shadeColor.set('hsl.s', shadeSaturation);
                shadeColor = shadeColor.set('hsl.h', hueDiff);

                result.hex = shadeColor.hex();
                result.luminance = shadeColor.luminance();
            }

            return {
                hex: result.hex,
                luminance: result.luminance,
                number: shade.number,
                self: closestColor.closestShadeLightness.number === shade.number,
				text: textColor(result.hex)
            };
        }),
		text: textColor(hex)
    };
};

const hexByNumber = (number, obj = {
    shades: []
}) => {
    if (number % 50 !== 0) {
        number = Math.round(number / 50) * 50;
    }

    const shade = obj.shades.find(shade => {
        return shade.number === number;
    });

    return shade ? shade.hex : '';
};

const hexByLuminance = (luminance, obj = {
    shades: []
}) => {
    const shade = obj.shades.reduce((prev, current) => {
        const a = Math.abs((prev.luminance * 100) - luminance);
        const b = Math.abs((current.luminance * 100) - luminance);

        return a < b ? prev : current;
    });

    return shade ? shade.hex : '';
};

const textColor = (targetColor, lightColor = '#fff', darkColor = '#000') => {
	if (!(targetColor instanceof chroma)) {
		targetColor = chroma(targetColor);
	}

	if (!(lightColor instanceof chroma)) {
		lightColor = chroma(lightColor);
	}

	if (!(darkColor instanceof chroma)) {
		darkColor = chroma(darkColor);
	}
	
    const bgY = contrast.sRGBtoY(targetColor.rgb());

    const darkTxtY = contrast.sRGBtoY(darkColor.rgb());
    const darkContrast = Math.abs(contrast.APCAcontrast(darkTxtY, bgY));

    const lightTxtY = contrast.sRGBtoY(lightColor.rgb());
    const lightContrast = Math.abs(contrast.APCAcontrast(lightTxtY, bgY));

    return darkContrast > lightContrast ? darkColor.hex() : lightColor.hex();
};

generate.closestColor = findClosestColor;
generate.hexByNumber = hexByNumber;
generate.hexByLuminance = hexByLuminance;
generate.textColor = textColor;

module.exports = generate;