function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//

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
		return true
	return false
}

for(let i = 1; i < 1000000; i++)
	if(isArmstrong(i))
		wl(i + " : " + isArmstrong(i))