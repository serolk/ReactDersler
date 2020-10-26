function wl(a) {
	console.log(a)
}

function main()
{

	let now = new Date()
	// now = new Date(2020, 3, 15, 23, 4, 5, 7)
	// wl(now.toString())

	//Aylar 0 -> Ocak olarak şekilde 0-11 arasıdır

	now = new Date()
	// let haftaninKacinciGunu = now.getDay() //Haftanın kaçıncı günü olduğunu verir. 0 -> Pazar 6 -> Cumartesi şeklinde
	// wl(haftaninKacinciGunu)
	//
	// wl(now.getDate()) // day of month
	//
	// wl(now.getFullYear())
	//
	// wl(now.getTime())

	// let deprem = new Date(1999, 8, 17, 3, 2)
	// wl(now.getFullYear() - deprem.getFullYear())

	//Date.now() --1.1.1970 ten bu ana kadar geçen milisaniyeyi verir
	// wl(Date.now())

	// let Person = function (isim, tc, dogumTarih) {
	// 	this.isim = isim
	// 	this.tc = tc
	// 	this.dogumTarih = dogumTarih
	// 	this.getAge = function () {
	// 		let now = new Date()
	// 		return (now.getFullYear() - this.dogumTarih.getFullYear())
	//
	// 	}
	// }
	//
	// let Persons = [
	// 	new Person("Serol", 1243123, new Date(1986, 10, 7)),
	// 	new Person("Kerime", 1243123, new Date(1989, 2, 13)),
	// 	new Person("Kaya", 1243123, new Date(2015, 5, 20)),
	// 	new Person("Fevziye", 1243123, new Date(1960, 4, 1)),
	// 	new Person("Gamze", 1243123, new Date(1980, 7, 20)),
	// ]
	//
	// wl(averageAge(Persons))

	// wl(`${now.getUTCDate()}.${now.getUTCMonth() + 1}.${now.getUTCFullYear()} ${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`)

	// for (let i = 0; i < 5; ++i)
	// {
	// 	wl(randomInt(10, 20))
	// 	wl(randomBoolean())
	// 	wl(randomNumber(10, 20))
	// }

	randomDate()
}

function averageAge(arr)
{
	let sum = 0
	for(let person of arr)
		sum += person.getAge()
	//
	// for(let i = 0; i < arr.length; i++)
	// 	sum += arr[i].getAge()

	return sum / arr.length
}

let dayOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0

let randomInt = (min, max) => parseInt(randomNumber(min, max))

let randomBoolean = () => parseInt(randomInt(0, 2)) === 1

let randomNumber  = (min, max) => Math.random() * (max - min) + min

main()

function getDayName(day, lang)
{
	let dayName = ""
	switch (day) {
		case 0 :
			dayName = lang === "TR" ? "Pazar" : "Sun"
			break
		case 1 :
			dayName = lang === "TR" ? "Pazartesi" : "Mon"
			break
		case 2 :
			dayName = lang === "TR" ? "Salı" : "Tue"
			break
		case 3 :
			dayName = lang === "TR" ? "Çarşamba" : "Wed"
			break
		case 4 :
			dayName = lang === "TR" ? "Perşembe" : "Thu"
			break
		case 5 :
			dayName = lang === "TR" ? "Cuma" : "Fri"
			break
		case 6 :
			dayName = lang === "TR" ? "Cumartesi" : "Sat"
			break
	}

	return dayName
}

function getMonthName(month, lang)
{
	let monthName = ""
	switch (month) {
		case 0 :
			monthName = lang === "TR" ? "Ocak" : "Jan"
			break
		case 1 :
			monthName = lang === "TR" ? "Şubat" : "Feb"
			break
		case 2 :
			monthName = lang === "TR" ? "Mart" : "Mar"
			break
		case 3 :
			monthName = lang === "TR" ? "Nisan" : "Apr"
			break
		case 4 :
			monthName = lang === "TR" ? "Mayıs" : "May"
			break
		case 5 :
			monthName = lang === "TR" ? "Haziran" : "Jun"
			break
		case 6 :
			monthName = lang === "TR" ? "Temmuz" : "Jul"
			break
		case 7 :
			monthName = lang === "TR" ? "Ağustos" : "Aug"
			break
		case 8 :
			monthName = lang === "TR" ? "Eylül" : "Sep"
			break
		case 9 :
			monthName = lang === "TR" ? "Ekim" : "Oct"
			break
		case 10 :
			monthName = lang === "TR" ? "Kasım" : "Nov"
			break
		case 11 :
			monthName = lang === "TR" ? "Aralık" : "Dec"
			break
	}

	return monthName
}

function getDayAbb(day)
{
	if(day % 10 === 1)
		return `${day}st`
	if(day % 10 === 2)
		return `${day}nd`
	if(day % 10 === 3)
		return `${day}rd`
	// if(day % 10 === 4)
	// 	return `${day}th`
	// if(day % 10 === 5)
	// 	return `${day}st`

	return `${day}th`

}

function randomDate()
{
	let year = 0
	switch (arguments.length) {
		case 0 :
			year = new Date().getFullYear()
			break
		case 1 :
			year = arguments[0]
			break
		case 2 :
			year = randomInt(arguments[0], arguments[1] + 1)
			break
	}


	let month = randomInt(0, 12)
	let day = month === 1 && isLeapYear(year) ? 29 : randomInt(0, dayOfMonths[month] + 1)

	displayDateTR(year, month, day)
	displayDateEN(year, month, day)

}

function displayDateTR(year, month, day)
{
	wl(`${day} ${getMonthName(month, "TR")} ${year} ${getDayName(new Date(year, month, day).getDay(), "TR")}`)
}

function displayDateEN(year, month, day)
{
	wl(`${getDayAbb(day)} ${getMonthName(month, "EN")} ${year} ${getDayName(new Date(year, month, day).getDay(), "EN")}`)
}