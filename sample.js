function wl(a) {
	console.log(a)
}

function write(a){
	process.stdout.write(a)
}

function writeline(a){
	write(a + "\r\n")
}

///////////////////////////////////////////////////////////////////////

function main() {

	// let names = ["ali", "veli", "kerime"]
	// let emptyArray = []
	// let sameAsEmptyArray = new Array()
	// let a = new Array(10)

	let arr = [1, 2, 3, 4, 5, 6, 7]
	displayArr(getReverse(arr))


}

//Function in function applicapable:

// let foo = function (){
//
// 	writeline("foo")
// 	let bar = function(){
// 		writeline("bar")
// 	}
//
// 	bar()
// }


function getReverse(arr){

	let halfLen = arr.length / 2
	for(let i = 0; i < halfLen; ++i)
	{
		let temp = arr[i]
		arr[i] = arr[arr.length - 1 - i]
		arr[arr.length - 1 - i] = temp
	}

	return arr
}

function displayArr(arr){

	for (let x of arr){
		writeline(x)
	}
}

main()




