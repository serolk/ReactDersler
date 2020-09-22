function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//paremetresi ile aldığı bir sayıdan büyük en küçük fibonacii sayısını dön


function nextFibonacci(val)
{
	let prev1 = 1, prev2 = 0, result = 0

	if(val < 0)
		return 0

	do
	{
		result = prev1 + prev2
		prev2 = prev1
		prev1 = result

	} while(val >= result )

	return result
}

function main() {

		wl(nextFibonacci(4))

}

main()


