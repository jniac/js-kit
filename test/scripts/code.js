import kit from '../../src/kit.js'

const formatResult = value => {

    if (typeof value === 'string')
        return `"${value}"`

    if (Array.isArray(value))
        return `[${value.join(', ')}]`

    return value

}

const evalCode = code => {

    let script = code.innerText.replace('let ', 'window.')

    return formatResult(eval(script))

}

for (let code of document.querySelectorAll('code')) {

    let ps = code.querySelectorAll('p')

    let getResult

    if (ps.length > 0) {

        for (let p of ps) {
            if (p.innerHTML.startsWith('//'))
                p.classList.add('comment')
        }

        getResult = () => [...ps]
            .filter(p => !p.innerHTML.startsWith('//'))
            .map(p => `<p>${evalCode(p)}</p>`)
            .join('\n')

    } else {

        getResult = () => evalCode(code)

    }

	let result = document.createElement('code')
	result.classList.add('result')
	result.innerHTML = getResult()

    code.parentElement.insertBefore(result, code.nextElementSibling)

	code.onclick = () => result.innerHTML = getResult()

}

window.kit = kit
