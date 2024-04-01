const SA98G = {
    blkClmp: 1.414,
    blkThrs: .022,
    deltaYmin: 5e-4,
    loBoWoffset: .027,
    loClip: .1,
    loWoBoffset: .027,
    mExpAdj: .283343396420869,
    mFactor: 1.9468554433171,
    mOffsetIn: .0387393816571401,
    mOffsetOut: .312865795870758,
    mainTRC: 2.4,
    normBG: .56,
    normTXT: .57,
    revBG: .65,
    revTXT: .62,
    sBco: .072175,
    sGco: .7151522,
    sRco: .2126729,
    scaleBoW: 1.14,
    scaleWoB: 1.14
};

const APCAcontrast = (txtY, bgY, places = -1) => {
    // send linear Y (luminance) for text and background.
    // txtY and bgY must be between 0.0-1.0
    // IMPORTANT: Do not swap, polarity is important.

    const icp = [0.0, 1.1]; // input range clamp / input error check

    if (isNaN(txtY) || isNaN(bgY) || Math.min(txtY, bgY) < icp[0] ||
        Math.max(txtY, bgY) > icp[1]) {
        return 0.0; // return zero on error
        // return 'error'; // optional string return for error
    }

    //////////   SAPC LOCAL VARS   /////////////////////////////////////////

    let SAPC = 0.0; // For raw SAPC values
    let outputContrast = 0.0; // For weighted final values
    let polCat = 'BoW'; // Alternate Polarity Indicator. N normal R reverse

    // TUTORIAL

    // Use Y for text and BG, and soft clamp black,
    // return 0 for very close luminances, determine
    // polarity, and calculate SAPC raw contrast
    // Then scale for easy to remember levels.

    // Note that reverse contrast (white text on black)
    // intentionally returns a negative number
    // Proper polarity is important!

    //////////   BLACK SOFT CLAMP   ////////////////////////////////////////

    // Soft clamps Y for either color if it is near black.
    txtY = (txtY > SA98G.blkThrs) ? txtY :
        txtY + Math.pow(SA98G.blkThrs - txtY, SA98G.blkClmp);
    bgY = (bgY > SA98G.blkThrs) ? bgY :
        bgY + Math.pow(SA98G.blkThrs - bgY, SA98G.blkClmp);

    ///// Return 0 Early for extremely low ∆Y
    if (Math.abs(bgY - txtY) < SA98G.deltaYmin) {
        return 0.0;
    }

    //////////   APCA/SAPC CONTRAST - LOW CLIP (W3 LICENSE)  ///////////////

    if (bgY > txtY) { // For normal polarity, black text on white (BoW)

        // Calculate the SAPC contrast value and scale
        SAPC = (Math.pow(bgY, SA98G.normBG) -
            Math.pow(txtY, SA98G.normTXT)) * SA98G.scaleBoW;

        // Low Contrast smooth rollout to prevent polarity reversal
        // and also a low-clip for very low contrasts
        outputContrast = (SAPC < SA98G.loClip) ? 0.0 : SAPC - SA98G.loBoWoffset;

    } else { // For reverse polarity, light text on dark (WoB)
        // WoB should always return negative value.
        polCat = 'WoB';

        SAPC = (Math.pow(bgY, SA98G.revBG) -
            Math.pow(txtY, SA98G.revTXT)) * SA98G.scaleWoB;

        outputContrast = (SAPC > -SA98G.loClip) ? 0.0 : SAPC + SA98G.loWoBoffset;
    }

    // return Lc (lightness contrast) as a signed numeric value 
    // Round to the nearest whole number as string is optional.
    // Rounded can be a signed INT as output will be within ± 127 
    // places = -1 returns signed float, 1 or more set that many places
    // 0 returns rounded string, uses BoW or WoB instead of minus sign

    if (places < 0) { // Default (-1) number out, all others are strings
        return outputContrast * 100.0;
    } else if (places === 0) {
        return Math.round(Math.abs(outputContrast) * 100.0) + '<sub>' + polCat + '</sub>';
    } else if (Number.isInteger(places)) {
        return (outputContrast * 100.0).toFixed(places);
    } else {
        return 0.0;
    }
};

const sRGBtoY = (rgb = [0, 0, 0]) => { // send sRGB 8bpc (0xFFFFFF) or string
    // NOTE: Currently expects 0-255

    /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////
    /*
    const mainTRC = 2.4; // 2.4 exponent emulates actual monitor perception
    	
    const sRco = 0.2126729, 
    	  sGco = 0.7151522, 
    	  sBco = 0.0721750; // sRGB coefficients
    	  */
    // Future:
    // 0.2126478133913640	0.7151791475336150	0.0721730390750208
    // Derived from:
    // xW	yW	K	xR	yR	xG	yG	xB	yB
    // 0.312720	0.329030	6504	0.640	0.330	0.300	0.600	0.150	0.060

    // linearize r, g, or b then apply coefficients
    // and sum then return the resulting luminance

    function simpleExp(chan) {
        return Math.pow(chan / 255.0, SA98G.mainTRC);
    }

    return SA98G.sRco * simpleExp(rgb[0]) +
        SA98G.sGco * simpleExp(rgb[1]) +
        SA98G.sBco * simpleExp(rgb[2]);
};

module.exports = {
	APCAcontrast,
	sRGBtoY
};