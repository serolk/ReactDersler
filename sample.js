function wl(a) {
	console.log(a)
}

///////////////////////////////////////////////////////////////////////
//virgül operatörü

let a = (foo(), bar())

wl(a)

function foo() {
	wl("foo")
}


function bar() {
	wl("bar")
	return 12
}