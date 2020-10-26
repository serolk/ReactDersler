function wl(a) {
	console.log(a)
}

let randomNumber = (min, max) => Math.random() * (max - min) + min
let randomInt = (min, max) => parseInt(randomNumber(min, max))

let arr = []

function main() {

	for(let i = 0; i < 10; i++) {
		arr = []
		let val = randomInt(0, 99999999999999)
		wl(val)
		getDigitsInTrees(val)
	}
}

main()


function getDigitsInTrees(val) {

	if (val === 0)
		return wl(arr)

	arr.unshift(val % 1000)
	getDigitsInTrees(parseInt(val / 1000))

}