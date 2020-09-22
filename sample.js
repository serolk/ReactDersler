function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//gövdesiz for

function  main() {
	for(let i = 0, k = 10; i < 10 && k > 0; wl(`i = ${i} ve k = ${k}`), ++i, k-= 2);
}


main()