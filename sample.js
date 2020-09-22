function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//gövdesiz for

function isPrime(val)
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

	return true;

}

function getPrime(n)
{
	let count = 0
	let i = 2
	for(; count < n; ++i)
	{
		if(isPrime(i))
			++count

	}

	return i - 1
}

wl(getPrime(1))
wl(getPrime(2))
wl(getPrime(3))
wl(getPrime(4))
wl(getPrime(5))
wl(getPrime(6))
wl(getPrime(20))