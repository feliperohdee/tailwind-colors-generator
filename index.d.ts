declare module 'tailwind-colors-generator' {
    interface Shade {
        hex: string;
        hsl: number[];
        luminance: number;
        number: number;
        rgb: number[];
        self: boolean;
        text: TextColor;
    }

    interface TextColor {
        hex: string;
        hsl: number[];
        rgb: number[];
        type: string;
    }

	interface GenerateResponse {
        closest: string;
        hex: string;
        hsl: number[];
        luminance: number;
        rgb: number[];
        text: TextColor;
        shades: Shade[];
    }

	interface Generate {
		(src: any, opts: {
			combinationsShades: boolean
		}): GenerateResponse;
		closestColor: (hex: string) => any;
		hexByNumber: (number: number, obj: GenerateResponse) => string;
		hexByLuminance: (luminance: number, obj: GenerateResponse) => string;
		textColor: (targetColor: any, lightColor?: string, darkColor?: string) => TextColor;
	}

	const generate: Generate;

    export = generate;
}