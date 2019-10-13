/*
	kit.js
	2019-10-13 23:28 GMT(+2)
	js toolkit
	https://github.com/jniac/js-kit
*/

/*

Forked from https://gist.github.com/blixt/f17b47c62508be59987b
other example https://github.com/davidbau/seedrandom

*/

class PRNG {

	constructor(seed = 123456789) {

		this.seed = seed;

	}

	next() {

		return this.seed = this.seed * 16807 % 2147483647

	}

	float() {

		if (arguments.length === 1) {

			let [scalar] = arguments;

			return scalar * this.float()

		}

		if (arguments.length === 2) {

			let [min, max] = arguments;

			return min + (max - min) * this.float()

		}

		return (this.next() - 1) / 2147483646

	}

	int() {

		return Math.floor(this.float(...arguments))

	}

	item(array) {

		return array[this.int(array.length)]

	}

	toString() {

		return `PRNG(seed:${this.seed})`
	}

	static get seed() { return prng.seed }

	static next() { return prng.next() }

	static float() { return prng.float(...arguments) }

	static int() { return prng.int(...arguments) }

	static item(array) { return prng.item(array) }

}

let prng = new PRNG();

let CSS = {

	aliceblue: '#f0f8ff',
	antiquewhite: '#faebd7',
	aqua: '#00ffff',
	aquamarine: '#7fffd4',
	azure: '#f0ffff',
	beige: '#f5f5dc',
	bisque: '#ffe4c4',
	black: '#000000',
	blanchedalmond: '#ffebcd',
	blue: '#0000ff',
	blueviolet: '#8a2be2',
	brown: '#a52a2a',
	burlywood: '#deb887',
	cadetblue: '#5f9ea0',
	chartreuse: '#7fff00',
	chocolate: '#d2691e',
	coral: '#ff7f50',
	cornflowerblue: '#6495ed',
	cornsilk: '#fff8dc',
	crimson: '#dc143c',
	cyan: '#00ffff',
	darkblue: '#00008b',
	darkcyan: '#008b8b',
	darkgoldenrod: '#b8860b',
	darkgray: '#a9a9a9',
	darkgreen: '#006400',
	darkgrey: '#a9a9a9',
	darkkhaki: '#bdb76b',
	darkmagenta: '#8b008b',
	darkolivegreen: '#556b2f',
	darkorange: '#ff8c00',
	darkorchid: '#9932cc',
	darkred: '#8b0000',
	darksalmon: '#e9967a',
	darkseagreen: '#8fbc8f',
	darkslateblue: '#483d8b',
	darkslategray: '#2f4f4f',
	darkslategrey: '#2f4f4f',
	darkturquoise: '#00ced1',
	darkviolet: '#9400d3',
	deeppink: '#ff1493',
	deepskyblue: '#00bfff',
	dimgray: '#696969',
	dimgrey: '#696969',
	dodgerblue: '#1e90ff',
	firebrick: '#b22222',
	floralwhite: '#fffaf0',
	forestgreen: '#228b22',
	fuchsia: '#ff00ff',
	gainsboro: '#dcdcdc',
	ghostwhite: '#f8f8ff',
	gold: '#ffd700',
	goldenrod: '#daa520',
	gray: '#808080',
	green: '#008000',
	greenyellow: '#adff2f',
	grey: '#808080',
	honeydew: '#f0fff0',
	hotpink: '#ff69b4',
	indianred: '#cd5c5c',
	indigo: '#4b0082',
	ivory: '#fffff0',
	khaki: '#f0e68c',
	lavender: '#e6e6fa',
	lavenderblush: '#fff0f5',
	lawngreen: '#7cfc00',
	lemonchiffon: '#fffacd',
	lightblue: '#add8e6',
	lightcoral: '#f08080',
	lightcyan: '#e0ffff',
	lightgoldenrodyellow: '#fafad2',
	lightgray: '#d3d3d3',
	lightgreen: '#90ee90',
	lightgrey: '#d3d3d3',
	lightpink: '#ffb6c1',
	lightsalmon: '#ffa07a',
	lightseagreen: '#20b2aa',
	lightskyblue: '#87cefa',
	lightslategray: '#778899',
	lightslategrey: '#778899',
	lightsteelblue: '#b0c4de',
	lightyellow: '#ffffe0',
	lime: '#00ff00',
	limegreen: '#32cd32',
	linen: '#faf0e6',
	magenta: '#ff00ff',
	maroon: '#800000',
	mediumaquamarine: '#66cdaa',
	mediumblue: '#0000cd',
	mediumorchid: '#ba55d3',
	mediumpurple: '#9370db',
	mediumseagreen: '#3cb371',
	mediumslateblue: '#7b68ee',
	mediumspringgreen: '#00fa9a',
	mediumturquoise: '#48d1cc',
	mediumvioletred: '#c71585',
	midnightblue: '#191970',
	mintcream: '#f5fffa',
	mistyrose: '#ffe4e1',
	moccasin: '#ffe4b5',
	navajowhite: '#ffdead',
	navy: '#000080',
	oldlace: '#fdf5e6',
	olive: '#808000',
	olivedrab: '#6b8e23',
	orange: '#ffa500',
	orangered: '#ff4500',
	orchid: '#da70d6',
	palegoldenrod: '#eee8aa',
	palegreen: '#98fb98',
	paleturquoise: '#afeeee',
	palevioletred: '#db7093',
	papayawhip: '#ffefd5',
	peachpuff: '#ffdab9',
	peru: '#cd853f',
	pink: '#ffc0cb',
	plum: '#dda0dd',
	powderblue: '#b0e0e6',
	purple: '#800080',
	rebeccapurple: '#663399',
	red: '#ff0000',
	rosybrown: '#bc8f8f',
	royalblue: '#4169e1',
	saddlebrown: '#8b4513',
	salmon: '#fa8072',
	sandybrown: '#f4a460',
	seagreen: '#2e8b57',
	seashell: '#fff5ee',
	sienna: '#a0522d',
	silver: '#c0c0c0',
	skyblue: '#87ceeb',
	slateblue: '#6a5acd',
	slategray: '#708090',
	slategrey: '#708090',
	snow: '#fffafa',
	springgreen: '#00ff7f',
	steelblue: '#4682b4',
	tan: '#d2b48c',
	teal: '#008080',
	thistle: '#d8bfd8',
	tomato: '#ff6347',
	turquoise: '#40e0d0',
	violet: '#ee82ee',
	wheat: '#f5deb3',
	white: '#ffffff',
	whitesmoke: '#f5f5f5',
	yellow: '#ffff00',
	yellowgreen: '#9acd32',

};

let re = {

	rgba: /rgba.(\d+)[\s|,]+(\d+)[\s|,]+(\d+)[\s|,]+([\d|\.]+)/,
	rgb: /rgb.(\d+)[\s|,]+(\d+)[\s|,]+(\d+)/,
	hsl: /hsl.(\d+)[\s|,]+(\d+)%[\s|,]+(\d+)%/,

};

function clamp(x, min = 0, max = 1) {

	return x < min ? min : x > max ? max : x

}

function toF(x) {

	return Math.round(clamp(x) * 0xf).toString(16)

}

function toFF(x) {

	return Math.round(clamp(x) * 0xff).toString(16).padStart(2, '0')

}

function hue2rgb(p, q, t){

	t %= 1;

	if (t < 0)
		t += 1;

	if (t < 1 / 6)
		return p + (q - p) * 6 * t

	if (t < 1 / 2)
		return q

	if (t < 2 / 3)
		return p + (q - p) * (2 / 3 - t) * 6

	return p

}

class Color {

	static ensure(value) {

		if (value instanceof Color)
			return value

		return new Color().set(value)

	}

	static isColor(str, { hashTolerant = true } = {}) {

		if (str in CSS)
			return true

		if (/^#[0-9A-Fa-f]+$/.test(str))
			return str.length === 4 || str.length === 5 || str.length === 7 || str.length === 9

		if (hashTolerant && /^[0-9A-Fa-f]+$/.test(str))
			return str.length === 3 || str.length === 4 || str.length === 6 || str.length === 8

		let m;

		if (m = str.match(/rgb\((\d+)\s?,\s?(\d+)\s?,\s?(\d+)\)/))
			return m.slice(1).map(parseFloat).every(n => n >= 0 && n <= 255)

		if (m = str.match(/rgba\((\d+)\s?,\s?(\d+)\s?,\s?(\d+)\s?,\s?(.*)\)/))
			return m.slice(1, 4).map(parseFloat).every(n => n >= 0 && n <= 255) && (m = parseFloat(m[4])) >= 0 && m <= 1

		return false

	}

	static mix(color1, color2, t) {

		color1 = Color.ensure(color1);
		color2 = Color.ensure(color2);

		let t2 = 1 - t;
		let c = new Color();

		c.r = color1.r * t2 + color2.r * t;
		c.g = color1.g * t2 + color2.g * t;
		c.b = color1.b * t2 + color2.b * t;
		c.a = color1.a * t2 + color2.a * t;

		return c

	}

	constructor() {

		this.r = 1;
		this.g = 1;
		this.b = 1;
		this.a = 1;

		if (arguments.length)
			this.set(...arguments);

	}

	set() {

		if (typeof arguments[0] === 'string') {

			let str = arguments[0];

			if (str.toLowerCase() in CSS)
				str = CSS[str.toLowerCase()];

			if (str[0] === '#') {

				let [, alpha = 1] = arguments;

				str = str.slice(1);

				if (str.length === 3)
					return this.setRGBA(...str.split('').map(v => Number('0x' + v) / 0xf), alpha)

				if (str.length === 4)
					return this.setRGBA(...str.split('').map(v => Number('0x' + v) / 0xf))

				if (str.length === 6)
					return this.setRGBA(...str.match(/.{2}/g).map(v => Number('0x' + v) / 0xff), alpha)

				if (str.length === 8)
					return this.setRGBA(...str.match(/.{2}/g).map(v => Number('0x' + v) / 0xff))

			}

			if (str.startsWith('rgba')) {

				let [, r, g, b, a] = str.match(re.rgba) || [, 255, 255, 255, 1];
				return this.setRGBA(r / 255, g / 255, b / 255, a)

			}

			if (str.startsWith('rgb')) {

				let [, r, g, b] = str.match(re.rgb) || [, 255, 255, 255];
				return this.setRGB(r / 255, g / 255, b / 255)

			}

			if (str.startsWith('hsl')) {

				let [, h, s, l] = str.match(re.hsl) || [, 0, 100, 50];
				return this.setHsl(h / 360, s / 100, l / 100)

			}
		}

	}

	setRGB(r, g, b) {

		this.r = parseFloat(r) || 0;
		this.g = parseFloat(g) || 0;
		this.b = parseFloat(b) || 0;

		return this

	}

	setRGBA(r, g, b, a) {

		this.r = parseFloat(r) || 0;
		this.g = parseFloat(g) || 0;
		this.b = parseFloat(b) || 0;
		this.a = parseFloat(a) || 0;

		return this

	}

	setAlpha(a) {

		this.a = a;

		return this

	}

	setHsl(h, s, l) {

		if (s === 0) {

			this.r = l;
			this.g = l;
			this.b = l;

		} else {

			let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			let p = 2 * l - q;

			this.r = hue2rgb(p, q, h + 1/3);
			this.g = hue2rgb(p, q, h);
			this.b = hue2rgb(p, q, h - 1/3);

		}

		return this

	}

	getHsl() {

		let h, s, l;
		let r = this.r, g = this.g, b = this.b;

		let min = Math.min(r, g, b);
		let max = Math.max(r, g, b);

		l = (min + max) / 2;

		if (min === max) {

			h = 0;
			s = 0;

		} else {

			let d = max - min;

			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

			switch(max) {

				case r: h = (g - b) / d + (g < b ? 6 : 0); break
				case g: h = (b - r) / d + 2; break
				case b: h = (r - g) / d + 4; break

			}

			h /= 6;

		}

		return [h, s, l]

	}

	/**
	 * @param alpha
	 *\t if alpha === false : return #RRGGBB
	 *\t if alpha === true : return #RRGGBBAA where AA is computed from this.a
	 *\t if typeof alpha === 'number' : return #RRGGBBAA where AA is computed from the given alpha
	 *\t if alpha === 'auto' : return #RRGGBBAA or #RRGGBB depending of the value this.a (this.a < 1)
	 */
	getHexString({ prefix = '#', alpha = 'auto', short = false } = {}) {

		let alphaIsNumber = typeof alpha === 'number';
		let a = alphaIsNumber ? alpha : this.a;

		if (short)
			return prefix
				+ toF(this.r)
				+ toF(this.g)
				+ toF(this.b)
				+ (alphaIsNumber || alpha === true || (alpha === 'auto' && a < 1) ? toF(a) : '')

		return prefix
			+ toFF(this.r)
			+ toFF(this.g)
			+ toFF(this.b)
			+ (alphaIsNumber || alpha === true || (alpha === 'auto' && a < 1) ? toFF(a) : '')

	}

	valueOf() {

		return this.getHexString()

	}

	toString() {

		return this.getHexString()

	}

}

var kit = {

	PRNG,
	Color,

};

export default kit;
