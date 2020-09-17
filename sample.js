function wl(a)
{
	console.log(a)
}
///////////////////////////////////////////////////////////////////////


function foo() {
	wl("foo")
	return true
}


function bar() {
	wl("bar")
	return false
}


function tar() {
	wl("tar")
	return false
}


wl(foo() || bar() && tar())
wl(foo() && bar() || tar())

wl(foo() | bar() & tar())
wl(foo() & bar() | tar())
