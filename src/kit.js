import Random from './Random.js'
import Color from './Color.js'
import Ease from './Ease.js'
import SVG from './SVG.js'

const wait = delay => new Promise(resolve => setTimeout(resolve, delay))

export default {

	Random,
	Ease,
	Color,
	SVG,

	wait,

}
