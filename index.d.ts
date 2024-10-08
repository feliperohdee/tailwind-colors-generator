declare module '@simpleimg/tailwind-colors-generator' {
	export interface ClosestColor {
		closestShadeLightness: {
			number: number;
			hex: string;
			lightnessDiff: number;
		};
		id: string;
		name: string;
		shades: {
			number: number;
			hex: string;
			lightnessDiff: number;
		}[];
	}

    export interface Shade {
        hex: string;
        hsl: number[];
        luminance: number;
        number: number;
        rgb: number[];
        self: boolean;
        text: TextColor;
    }

    export interface TextColor {
        hex: string;
        hsl: number[];
        rgb: number[];
        type: string;
    }

	export interface Combination {
		closest: string;
		hex: string;
		hsl: number[];
		luminance: number;
		number: number;
		rgb: number[];
		shades: Shade[];
		text: TextColor;
	}

	export interface GenerateResponse {
        closest: string;
		combinations: {
			analogous: Combination[];
			complementary: Combination[];
			split: Combination[];
			tetradic: Combination[];
			triadic: Combination[];
		};
        hex: string;
        hsl: number[];
        luminance: number;
		number: number;
        rgb: number[];
        text: TextColor;
        shades: Shade[];
    }

	export interface Generate {
		(src: any, opts?: {
			combinationsShades: boolean
		}): GenerateResponse;
		closestColor: (hex: string) => ClosestColor;
		hexByNumber: (number: number, obj: {
			shades: Shade[];
		}) => string;
		hexByLuminance: (luminance: number, obj: {
			shades: Shade[];
		}) => string;
		textColor: (targetColor: any, lightColor?: string, darkColor?: string) => TextColor;
		validColor: (value: string) => boolean;
	}

	const generate: Generate;

    export default generate;
}