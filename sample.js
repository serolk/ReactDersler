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
	let val = 2

	while(1) {
		if (isPrime(val))
			++count

		if(count == n)
			return val

		++val
	}
}

function isArmstrong(val)
{
	let sum = 0
	let temp = val
	while(temp > 0)
	{
		sum += Math.pow(parseInt(temp) % 10, 3)
		temp = parseInt(temp) / 10
	}
	if(sum === val)
		wl("Armstrong")
	else
		wl("Not")
}

isArmstrong(153)