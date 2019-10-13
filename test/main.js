import kit from '../src/kit.js'
// import kit from 'https://jniac.github.io/js-kit/build/kit.module.js'

requestAnimationFrame(function animation() {

	let time = performance.now() / 1000

	document.body.style.backgroundColor = kit.Color.mix('blue', 'wheat', .5 * Math.sin(time * .7) + .5)

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
