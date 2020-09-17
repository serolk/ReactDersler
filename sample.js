function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//sınıf çalışması

findRoots(1,-3,-8)
findRoots(1,1,1)
findRoots(1,4,4)
findRoots(3.4,-3,-9.8)

function findRoots(a, b, c)
{
	if(delta > 0)
	{
		let delta = b * b - 4 * a * c
		let sqrtDelta = Math.sqrt(delta)
		let x1 = (-b + sqrtDelta) / (2 * a)
		let x2 = (-b - sqrtDelta) / (2 * a)
		wl(`x1 = ${x1} ve x2 = ${x2}`)
	}
	else if(!delta)
	{
		let x = -b / (2 * a)
		wl(`x1 = x2 = ${x}`)
	}
	else
	{
		wl("Gerçek Kök")
	}

}
