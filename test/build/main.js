requestAnimationFrame(function animation() {

	let time = performance.now() / 1000

	document.body.style.backgroundColor = kit.Color.mix('blue', 'wheat', .5 * Math.sin(time) + .5)

	requestAnimationFrame(animation)
})
