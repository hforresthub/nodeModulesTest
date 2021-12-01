const book = require('./library')
const { show1 } = require('./showCatalogue').showCatalogue
// const app = require('express')

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

const testA = () => {
	console.log("Test A completed.");
}

const testB = () => {
	console.log("Test B completed.");
}

const testC = () => {
	console.log("Test C completed.");
}

const testD = (input) => {
	console.log(input);
}

const testE = () => {
	console.log("Test E completed.");
}

const testF = () => {
	console.log("Test F completed.");
}

readline.question(`What is your name, pal?:\n`, res => {
	const wordsArray = res.split(' ')
	let safeLength = wordsArray.length > 0 ? wordsArray.length - 1 : 0
	const noun = wordsArray[safeLength]
	console.log(`My favourite book is ${book.title}, I'm currently watching ${show1},` + (wordsArray.length > 1 ? `and I'm not your ${noun}, buddy!` : ` nice to meet you, ` + noun))

	// execution order tests
	setTimeout(testA, 1000)
	setTimeout(testB, 0)
	new Promise ((resolve, reject) => {
		resolve("Test D completed.")
	}).then((resolve) => {
		testD(resolve);
	})
	testC()
	process.nextTick(() => {
		testE()
	})
	setImmediate(() => {
		testF()
	})

	readline.close()
})
