function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//

function getFibonacci(val)
{
	let prev1 = 1, prev2 = 0, result = 0

	if(val <= 2)
		return val - 1

	for(let i = 2; i < val; i++)
	{
		result = prev1 + prev2
		prev2 = prev1
		prev1 = result
	}
	return result
}

function main() {
	for (let j = 1; j < 10; j++)
	{
		wl(getFibonacci(j))
	}
}

main()


