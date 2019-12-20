import kit from '../../src/kit.js'

let time = 0

requestAnimationFrame(function animation() {

	time += 1 / 60

    for(let h of document.querySelectorAll('h1,h2,h3'))
        h.style.color =
            kit.Color.mixArray(['blue', '#96f', 'red'], (1 + time * .7) % 3, x => kit.Ease.inout(x, .5))

	requestAnimationFrame(animation)

})
