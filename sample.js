function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//

function isArmstrong(val)
{
	let sum = 0
	let temp = val
	while(temp)
	{
		sum += Math.pow(parseInt(temp) % 10, 3)
		temp = parseInt(temp) / 10
	}
	if(sum === val)
		return true
	return false
}

function getDigitCount(val)
{
	return val === 0 ? 1 : parseInt(Math.log10(Math.abs(val))) + 1
}

function getPowSum(val)
{
	let count = getDigitCount(val)
	let sum = 0

	while(val)
	{
		sum += Math.pow(val % 10, count)
		val = parseInt(val / 10)
	}
	return sum
}

function isArmstrongHoca(val)
{
	if(val < 0)
		return false
	return getPowSum(val) === val
}


for(let i = 1; i < 1000000; i++)
	if(isArmstrongHoca(i))
		wl(i + " : " + isArmstrongHoca(i))