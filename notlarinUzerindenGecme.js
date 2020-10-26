function wl(a) {
	console.log(a)
}

function diziOzellikleri()
{
	//Dizi yaratma
	let names = new Array()
	let surnames = ["Ozturk, Babacan, Saygıner"]

	names[0] = "Ali"
	names[1] = "Veli"

	//Dizilerde Döngü Çeşitleri

	let numbers = [1,3,8,-1,2,2,8,0,9,5,6,7,9,3,4,23,67,12,-12,2]

	//for döngüsü ile
	for(let i = 0; i < numbers.length; i++)
	{
		wl(numbers[i])
	}

	//for in deyimi ile
	for(let index in numbers)
	{
		wl(numbers[index])
	}

	//for of deyimi ile
	for(let val of numbers)
	{
		wl(val)
	}
}

function main()
{

	let numbers = [1,3,8,-1,2,2,8,0,9,5,6,7,9,3,4,23,67,12,-12,2]
	// wl(reverseArray(numbers))

	// wl(sumArray(numbers))

	// arrayElemanEklemeCikarma(numbers)

	// arraySort(numbers)

	// sliceArray(numbers)

	// getCountInArray(numbers, 2)

	// findInArray(numbers)

	// let result = myFindInArray(numbers, (val, index) => val % 2 === 0 && index > 3)
	// wl(result)

	// findIndexExample(numbers)

	// everyExam(numbers)
	// someExam(numbers)

	// oopExample()

}

main()

function reverseArray(arr)
{
	let first = 0
	let last = arr.length - 1
	while(first < last)
	{
		let temp = arr[first]
		arr[first++] = arr[last]
		arr[last--] = temp
	}

	return arr

}

function reverseArrayWithArguments()
{
	let arr = arguments
	let first = 0
	let last = arr.length - 1
	while(first < last)
	{
		let temp = arr[first]
		arr[first++] = arr[last]
		arr[last--] = temp
	}

	return arr

}

function sumArray(arr)
{
	let sum = 0
	for(let val of arr)
		sum += val

	//ya da
	sum = 0
	for(let i = 0; i < arr.length; i++)
		sum += arr[i]

	//ya da
	sum = 0
	for(let i in arr)
		sum += arr[i]

	//ya da
	sum = 0
	for(let i = 0; i < arr.length ;sum += arr[i++])
		;

	//ya da
	sum = 0
	arr.forEach(function (element) {
		sum += element
	})

	//ya da
	sum = 0
	arr.forEach(element => sum += element)

	return sum
}

function sumWithArguments()
{
	let sum = 0
	for(let val of arguments)
		sum += val
	return val
}

function arrayElemanEklemeCikarma(arr)
{
	//Array'in sonuna eleman ekleme: (LIFO)
	arr.push(15)
	wl(arr)

	//Array'in sonundan eleman çıkarma: (LIFO)
	arr.pop()
	wl(arr)

	//Array'in başından eleman döndürme ve çıkarma (FIFO)
	let ilkEleman = arr.shift()
	wl(arr)

	//Array'in başına eleman ekleme
	arr.unshift(15)
	wl(arr)

}

function arraySort(arr)
{
	//Dizilerde kendi metotlarında sıralama metodu bulunur:
	// wl(arr.sort()) //Diziyi atama yapmadan değiştirir
	//Bu sıralama, elemanları string olarak algılayıp yapar. Default artan sıralamadır
	//Sıralamanın nasıl yapılacağına dair callback fonksiyonu alır

	arr.sort((p1, p2) => p1 - p2) //artan sıralama (number tipine göre)

	wl(arr)

}

function sliceArray(arr)
{
	let sliced = arr.slice(2,4) //[2,4) 2.eleman dahil, 4.eleman hariç demek
	// wl(sliced)

	//Negatif index numaraları da almaktadır. Bu durumda index son elemana göre almaktadır.

	sliced = arr.slice(-5, -1)
	wl(sliced)
}

function getCountInArray(arr, val)
{
	let count = 0
	for(let index = -1 ;(index = arr.indexOf(val, index + 1)) !== -1; count++)
		;
	wl(`count = ${count}`)
	return count


}

function  findInArray(arr)
{
	//dizide aranan bir elemanın indexini bulma
	// let index = arr.indexOf(2) //ilk bulduğu 2 nin indexini döner. Hiç bulamazsa -1 döner
	// index = arr.indexOf(2, 4) //4. elemandan başlayarak 2 yi arar

	//find verilen koşula uygun ilk elemanı bulur:
	wl(arr.find(val => val % 2 === 0)) //ilk çift sayıyı bulur
	wl(arr.find(val => val < 0)) //ilk negatif sayıyı bulur gibi gibi

	//Koşula uyan eleman yoksa undefined döner
	//İki ifade ile de kullanılabilir
	wl(arr.find(val => val % 2 === 0 && val > 9)) //10 dan büyük ilk çift sayıyı bul

}

function myFindInArray(arr, pred)
{
	for(let i in arr)
		if(pred(arr[i], i, arr))
			return arr[i]

	return undefined

}

function findIndexExample(arr)
{
	//Belli bir koşula uyan ilk elemanın indexini döner, uyan yok ise -1 döner
	let index = arr.findIndex(val => val % 2 === 0)

	wl(index)

}

function everyExam(arr)
{
	//Dizinin tüm elemanları verilen koşula uyuyorsa TRUE, bir tane bile uymayan var ise FALSE döner
	wl(arr.every(val => val % 2 === 0))

}

function someExam(arr)
{
	//Belirtilen koşula uyan hiç eleman yoksa FALSE, en az bir eleman varsa TRUE döner
	wl(arr.some(val => val % 2 === 0))

}

function oopExample()
{

	let Product = function (name, price, stock) {

		this.name = name
		this.price = price
		this.stock = stock
		this.getTotalFee = function () {
			return this.price * this.stock
		}

	}

	let products = new Array()
	products.push(new Product("laptop", 4000, 0))
	products.push(new Product("mouse", 40, 50))
	products.push(new Product("keyboard", 30, 0))
	products.push(new Product("pen", 400, 100))

	let productsNotInStock = new Array(products.length)

	let index = -1

	while(true)
	{
		index = products.findIndex((p, i) => i >= index + 1 && p.stock <= 0)
		if(index == -1)
			break

		productsNotInStock.push(products[index])
	}

	productsNotInStock.forEach(p => wl(p.name))

}

function reduceExamp(arr)
{

}