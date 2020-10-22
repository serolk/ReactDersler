function wl(a) {
	console.log(a)
}

let randomNumber = (min, max) => Math.random() * (max - min) + min
let randomInt = (min, max) => parseInt(randomNumber(min, max))

let onesTR = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"]
let tensTR = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"]
let basamaklar = ["", "", "Yüz", "Bin", "Milyon", "Milyar", "Trilyon"]

function main() {
	for (let i = 0; i < 10; i++) {
		let val = randomInt(-999, 1000)
		wl(`${val} -> ${numToStrTR3D(val)}`)

	}

}

main()


function numToStrTR3D(val) {
	if (val === 0) return "sıfır"
	let str = val > 0 ? "" : "eksi"

	val = Math.abs(val)

	let a = parseInt(val / 100)
	let b = parseInt(val / 10) % 10
	let c = val % 10

	if (a !== 0) {
		if (a !== 1)
			str += onesTR[a]
		str += "yüz"
	}

	if (b !== 0)
		str += tensTR[b]

	if (c !== 0)
		str += onesTR[c]

	return str


}