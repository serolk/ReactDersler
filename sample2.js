function wl(str){

	console.log(str)

}
////////////////////////////////////////
function main(){
rande
	let numbers = [-1, 7, -3, 4, 6]

	///SLICE//////

	// let sliced = numbers.slice(2, 3)
	// let sliced = numbers.slice(-3, -1) //(2, 4) demek

	// let sliced = numbers.slice(30, 3) //Array out of bound exception vermiyor...

	// wl(sliced)

	///INDEXOF//////

	// let index = numbers.indexOf(-3) // indexi olan 2 yi döner. Hiç bulamazsa -1 döner

	let index = numbers.indexOf(7, 2) //2. indexten başlayarak 7 yi ara demek. startIndex 2.parametresidir



	wl(index)

}

main()
//////////////////////////////////////


function anonymousMethod(){

	let products = [
		{name: "motherboard", stock: 50, price: 500, toString: toString},
		{name: "laptop", stock: 60, price: 4345, toString: toString},
		{name: "mouse", stock: 40, price: 70, toString: toString}
	]

	products.sort((p2, p1) => p1.stock * p1.price - p2.stock * p2.price)

	wl(products)

}

////////////////////////////////////////
function lambdaExample(){

	let min = 20
	let max = 40

	generate(10, () => parseInt(Math.random() * (max - min) + min), val => wl(val))

	let x = 1

	generate(5, () => x++, wl)
}

function generate(n, supplier, consumer)
{
	while(n--)
		consumer(supplier())
}

function exampleSum(){

	let add = () => {
		let total = 0
		for(let val of arguments)
		{
			total += val
		}
		return total
	}

	wl(sum(10, 20))

	wl(add(10, 20, 30))

}

function sum2()
{
	let total = 0
	for(let val of arguments)
	{
		total += val
	}

	return total
}

