// import path from 'path'

function date() {

	let date = new Date()

	const f = n => n.toFixed().padStart(2, '0')
	const signed = n => n < 0 ? n.toString() : '+' + n.toString()

	let gmt = signed(-date.getTimezoneOffset() / 60)

	return date.getFullYear() + '-' + f(1 + date.getMonth()) + '-' + f(date.getDate()) + ' ' + f(date.getHours()) + ':' + f(date.getMinutes()) + ` GMT(${gmt})`

}

function banner() {

	return `
/*
	kit.js
	${date()}
	js toolkit
	https://github.com/jniac/js-kit
*/
`.trim() + '\n'

}

export default {
	input: './src/kit.js',
	plugins: [

	],
	// external: [path.resolve('./src/event.js')],
	// sourceMap: true,
	output: [
		{
			format: 'umd',
			name: 'kit',
			exports: 'named',
			file: 'build/kit.js',
			indent: '\t'
		},
		{
			format: 'es',
			file: 'build/kit.module.js',
			banner: banner(),
			indent: '\t'
		}
	]
}
