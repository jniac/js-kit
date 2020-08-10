
/*

'Random' === 'PRNG'
Forked from https://gist.github.com/blixt/f17b47c62508be59987b
other example https://github.com/davidbau/seedrandom

*/

export default class Random {

	constructor(seed = 123456789) {

		this.seed = seed
	}

	next() {

		return this.seed = this.seed * 16807 % 2147483647
	}

	float() {

		if (arguments.length === 1) {

			const [scalar] = arguments
			return scalar * this.float()
		}

		if (arguments.length === 2) {

			const [min, max] = arguments
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

	shuffle(array) {

		for (const n = array.length, i = 0; i < n; i++) {

			const temp = array[i]
			const index = this.int(n)
			array[i] = array[index]
			array[index] = temp

		}

		return array
	}

	toString() {

		return `Random(seed:${this.seed})`
	}

}

const random = new Random()

const {
	constructor, toString,
	...props
} = Object.getOwnPropertyDescriptors(Random.prototype)

for (const key of Object.keys(props)) {

	Random[key] = random[key].bind(random)
}
