function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//sınıf çalışması



function getDigitCount(sayi) {

	let basamak = 0

	if (!sayi)
		return 1

	// return parseInt(Math.log10(Math.abs(sayi))) + 1

	while (sayi) {
		++basamak
		sayi = parseInt(sayi / 10)
	}
	return basamak
}

wl(getDigitCount(1234567))

wl(getReverse(4321))

function getReverse(sayi) {

	let result = 0

	if (sayi < 10)
		return sayi

	while(sayi)
	{
		result = result * 10 + sayi % 10
		sayi = parseInt(sayi / 10)

	}

	return result
}