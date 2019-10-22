import kit from '../src/kit.js'
// import kit from 'https://jniac.github.io/js-kit/build/kit.module.js'

let time = 0

requestAnimationFrame(function animation() {

	time += 1 / 60

	document.body.style.backgroundColor =
		// kit.Color.mix('blue', 'wheat', .5 * Math.sin(time * .7) + .5)
		kit.Color.mixArray(['blue', 'wheat', 'red'], (time * .7) % 3, x => kit.Ease.inout(x, .5))

	requestAnimationFrame(animation)
})




for (let src of document.querySelectorAll('pre')) {

	let script = src.innerText.replace('let ', 'window.')

	let res = document.createElement('pre')
	res.classList.add('res')
	res.innerText = eval(script)

	document.body.insertBefore(res, src.nextElementSibling)

	src.onclick = () => res.innerText = eval(script)

}

window.kit = kit
