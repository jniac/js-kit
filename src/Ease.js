
const _clamp = x => x = x < 0 ? 0 : x > 1 ? 1 : x

/**
 * https://jsfiddle.net/jniac/1qpum68z/
 * https://www.desmos.com/calculator/kikl4d4sed
 * @param x the value
 * @param p the power
 * @param m the middle of the ease
 */
const inout = (x, p = 3, i = .5, clamp = true) => {

	if (clamp)
		x = _clamp(x)

	return x === i
		? x
		: x < i
		? 1 / Math.pow(i, p - 1) * Math.pow(x, p)
		: 1 - 1 / Math.pow(1 - i, p - 1) * Math.pow(1 - x, p)

}

const bindInout = (p = 3, i = .5, clamp = true) => x => inout(p, i, clamp)

const linear = (x, clamp = true) => clamp ? _clamp(x) : x

const in2 = (x, clamp = true) => (x = linear(x, clamp)) * x
const in3 = (x, clamp = true) => (x = linear(x, clamp)) * x * x
const in4 = (x, clamp = true) => (x = linear(x, clamp)) * x * x * x
const in5 = (x, clamp = true) => (x = linear(x, clamp)) * x * x * x * x
const inP = (x, p, clamp = true) => Math.pow(linear(x, clamp), p)

const out2 = (x, clamp = true) => 1 - (x = linear(1 - x, clamp)) * x
const out3 = (x, clamp = true) => 1 - (x = linear(1 - x, clamp)) * x * x
const out4 = (x, clamp = true) => 1 - (x = linear(1 - x, clamp)) * x * x * x
const out5 = (x, clamp = true) => 1 - (x = linear(1 - x, clamp)) * x * x * x * x
const outP = (x, p, clamp = true) => 1 - Math.pow(linear(1 - x, clamp), p)


export default {

	inout,
	bindInout,

	linear,
	in2,
	in3,
	in4,
	in5,
	inP,
	out2,
	out3,
	out4,
	out5,
	outP,

}
