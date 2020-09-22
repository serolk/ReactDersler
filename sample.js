function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//gövdesiz for

function isPrime(val) {

	if(val <= -1)
		return false
	else if(val % 2 === 0)
		return val === 2

	sqrt = parseInt(Math.sqrt(val))
	for(let i = 3; i <= sqrt; i += 2) {
		if(val % i === 0)
			return false;
	}
	return true;

}

function isPrimeRecursive(val)
{
	if(val <= 1)
		return false

	if(val % 2 === 0)
		return val === 2

	if(val % 3 === 0)
		return val === 3

	if(val % 5 === 0)
		return val === 5

	if(val % 7 === 0)
		return val === 7

	sqrt = Math.sqrt(val)
	if(sqrt === parseInt(Math.sqrt(val)))
		return false

	for(let i = 11; i <= sqrt; i += 2) {
		if(num % i === 0)
			return false;
	}

	// for(let i = 11; i * i <= val; i += 2) {
	// if(num % i === 0)
	// 	return false;
	// }

	return true;

}

let num = 1000003

if(isPrimeRecursive(num))
	wl("True")
else
	wl("False")
