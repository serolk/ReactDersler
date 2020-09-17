function wl(a)
{
	console.log(a)
}
///////////////////////////////////////////////////////////////////////


function foo() {
	wl("foo")
	return false
}


function bar() {
	wl("bar")
	return true
}


function tar() {
	wl("tar")
	return false
}


wl(foo() || bar() && tar())
wl(foo() && bar() || tar())

wl(foo() | bar() & tar())
wl(foo() & bar() | tar())
