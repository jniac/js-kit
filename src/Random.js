
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

	item(items) {

		return items[this.int(items.length)]
	}

	weigthedItem(items, { weightDelegate = item => item.weight } = {}) {

		if (typeof weightDelegate === 'string')
			return this.weigthedItem(items, { weightDelegate:item => item[weightDelegate] })

		const weights = items.map(weightDelegate)
		const sum = weights.reduce((x, y) => x + y)
		const draw = sum * this.float()

		let acc = 0, n = items.length
		for (let i = 0; i < n; i++) {

			acc += weights[i]
			if (acc >= draw)
				return items[i]
		}

		throw new Error(`oops, this should not happen!`)
	}

	shuffle(items) {

		const n = items.length
		for (let i = 0; i < n; i++) {

			const temp = items[i]
			const index = this.int(n)
			items[i] = items[index]
			items[index] = temp

		}

		return items
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
