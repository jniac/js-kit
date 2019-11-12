const viewBoxFitWidth = (svg, svgWidth, svgHeight, xAlign = .5) => {

	if (typeof svg === 'string') {

		for (let element of document.querySelectorAll(svg))
			viewBoxFitWidth(element, svgWidth, svgHeight, xAlign)

		return
	}

	let [rect] = svg.getClientRects()
	let ratio = rect.width / rect.height
	let width = svgHeight * ratio
	let x = (svgWidth - width) * xAlign
	let y = 0
	let height = svgHeight

	let viewBox = [x, y, width, height].map(v => v.toFixed(1)).join(' ')
	svg.setAttributeNS(null, "viewBox", viewBox)
}

export default {

	viewBoxFitWidth,

}
