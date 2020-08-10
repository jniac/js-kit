import kit from '../../src/kit.js'

const formatResult = value => {

    if (typeof value === 'string')
        return `"${value}"`

    if (Array.isArray(value))
        return `[${value.join(', ')}]`

    return value

}

const formatCode = string => {

    const text = string.replace(/^\n*/, '')

    const [leadingSpaces] = text.match(/^\s*/)

    const lines = text.trim()
        .split('\n')
        .map(line => /^\s+$/.test(line) ? '' : line)

    return (
        lines
            .map(line => line.startsWith(leadingSpaces) ? line.substring(leadingSpaces.length) : line)
            .join('\n')
    )
}

const evalAndExpose = script => {

    const lines = script.split('\n')

    const exportLines = lines
        .map(line => line.match(/^(?:let|const)\s(\w+)/))
        .filter(match => match)
        .map(match => match[1])

    if (exportLines.length > 0) {

        script += `\nObject.assign(globalThis, { ${exportLines.join(',')} })`
    }

    return eval(script)
}

const lineIsComment = line => line.startsWith('//')
const divWrap = line => {

    const classes = ['line']

    if (lineIsComment(line))
        classes.push('comment')

    return `<div class="${classes.join(' ')}">${line}</div>`
}

const injectResultElement = codeElement => {

    codeElement.classList.add('with-result')

    const resultElement = document.createElement('code')
    resultElement.classList.add('result')

    codeElement.parentElement.insertBefore(resultElement, codeElement.nextElementSibling)

    return resultElement
}

for (const codeElement of document.querySelectorAll('code')) {

    const lines = formatCode(codeElement.innerText)
        .split('\n')

    evalAndExpose(lines.join('\n'))

    codeElement.innerHTML = lines
        .map(divWrap)
        .join('')

    if (codeElement.classList.contains('eval-lines')) {

        const result = injectResultElement(codeElement)

        const getResult = () => lines
            .filter(line => !lineIsComment(line))
            .map(line => String(eval(line)))
            .join('\n')

            result.innerHTML = getResult()

        codeElement.onclick = async () => {

            result.innerHTML = getResult()
            result.classList.add('highlight')
            await kit.wait(.1)
            result.classList.remove('highlight')
        }
    }

    if (codeElement.classList.contains('eval-all')) {

        const result = injectResultElement(codeElement)

        const getResult = () => String(eval(lines.join('\n')))
        
        result.innerHTML = getResult()

        codeElement.onclick = async () => {

            result.innerHTML = getResult()
            result.classList.add('highlight')
            await kit.wait(.1)
            result.classList.remove('highlight')
        }
    }
}

window.kit = kit
