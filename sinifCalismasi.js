function wl(a) {
	console.log(a)
}


function main()
{
	let text = "Bugün hava çok çok güzel. Bu çok güzel havada ders mi yapılır çok"
	let subStr = "çok"

	wl(countString(text, subStr))
}

main()


function countString2(str, inStr)
{
	let index = -1
	let counter = 0
	for(; index = str.indexOf(inStr, index + 1) != -1; ++counter)
		;

	return counter
}

function countString(str, inStr)
{
	let index = -1
	let counter = 0
	while((index = str.indexOf(inStr, index + 1)) != -1)
	{
		counter++
	}

	return counter
}


function a()
{
	{
		var b = 10
	}
	wl(b)
}

function b()
{
	{
		let c = 10
	}
	wl(c)
}
