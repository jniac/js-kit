
/*

'Random' === 'PRNG'
Forked from https://gist.github.com/blixt/f17b47c62508be59987b
other example https://github.com/davidbau/seedrandom

*/

export default class Random {

	constructor(seed = 123456789) {

		this.seed = seed;

	}

	next() {

		return this.seed = this.seed * 16807 % 2147483647

	}

	float() {

		if (arguments.length === 1) {

			let [scalar] = arguments

			return scalar * this.float()

		}

		if (arguments.length === 2) {

			let [min, max] = arguments

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

		return `Random(seed:${this.seed})`
	}

	static get seed() { return random.seed }

	static next() { return random.next() }

	static float() { return random.float(...arguments) }

	static int() { return random.int(...arguments) }

	static item(array) { return random.item(array) }

}

let random = new Random()
