function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//sınıf çalışması

findRoots(1,10,25)

function findRoots(a, b, c)
{
	let delta = b * b - 4 * a * c

	if(delta > 0)
	{
		let sqrtDelta = Math.sqrt(delta)
		let x1 = (-b + sqrtDelta) / (2 * a)
		let x2 = (-b - sqrtDelta) / (2 * a)
		wl(`x1 = ${x1} ve x2 = ${x2}`)
	}
	else if(delta === 0)
	{
		let x1 = -b / (2 * a)
		let x2 = x1
		wl(`x1 = ${x1} ve x2 = ${x2}`)
	}
	else
	{
		wl("Gerçek Kök")
	}

}
