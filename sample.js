function wl(a)
{
	console.log(a)
}
///////////////////////////////////////////////////////////////////////

// wl(digitCount(123))

wl(10 +"10")

function digitCount(val)
{
	let c = val % 10
	wl(c)
	let b = parseInt((val / 10) % 10)
	wl(b)
	let a = parseInt(val / 100)
	wl(a)

	return Math.abs(a + b + c)
}



