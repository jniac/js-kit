import kit from '../../src/kit.js'

let align = 1

let update = () => kit.SVG.viewBoxWidthFit('svg', 1920, 1080, align)

update()
window.addEventListener('resize', update)

document.querySelector('input').oninput = e => {

	align = e.target.value
	update()
	
}
