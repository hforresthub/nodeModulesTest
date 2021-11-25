const book = require('./library')
const show = require('./showCatalogue').showCatalogue.show1

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question(`What is your name, pal?:\n`, res => {
	const wordsArray = res.split(' ')
	let safeLength = wordsArray.length > 0 ? wordsArray.length - 1 : 0
	const noun = wordsArray[safeLength]
	console.log(`My favourite book is ${book.title}, I'm currently watching ${show}, and I'm not your ${noun}, buddy!`)
	readline.close()
})
