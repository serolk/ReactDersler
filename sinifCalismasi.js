function wl(a) {
	console.log(a)
}

function write(a)
{
	process.stdout.write(a)
}

function main() {
	// let c = new Circle(-3)

	// wl(c.area)

	// let p = new Point(100, 100)
	// wl(p.toString())
	//
	// p.offset(20, 30)
	//
	// wl(p.toString())
	//
	// p.offset(-10)
	//
	// wl(p.toString())

	// let ac = new AnalyticalCircle(-3.4,100, 100)
	//
	// wl(`{x: ${ac.x}, y: ${ac.y}}`)
	//
	// let center = ac.center;
	//
	// center.offset(20)
	//
	// wl(`{center_x: ${center.x}, center_y: ${center.y}}`)
	//
	//
	//
	// ac.offset(20, 30)
	//
	// wl(`{x: ${ac.x}, y: ${ac.y}}`)
	//
	// ac.center = new Point(200,200)
	//
	// wl(`{x: ${ac.x}, y: ${ac.y}}`)
	//
	// wl(new Point(3, 4).distance(new Point(0,0)))


	// wl(`{r: ${ac.r}, x: ${ac.x}, y: ${ac.y}}`)






	for (let i = 0; i < 10; i++) {
		write(Random.nextInt(1, 100) + " ")
	}

	wl("")

	for (let i = 0; i < 10; i++) {
		wl(Random.nextNumber(3.4, 7.789))
	}

	for (let i = 0; i < 10; i++) {
		wl(Random.nextBoolean())
	}
}

class Circle {
	constructor(r = 0) {
		this.r = r
	}


	get r() {
		return this._r;
	}

	set r(value) {
		this._r = Math.abs(value)
	}

	get area() {
		return Math.PI * this._r * this._r
	}

	get circumference() {
		return Math.PI * 2 * this._r
	}

}

class Point {
	get x() {
		return this._x;
	}

	set x(value) {
		this._x = value;
	}

	get y() {
		return this._y;
	}

	set y(value) {
		this._y = value;
	}

	constructor(x = 0, y = 0) {

		this._x = x;
		this._y = y;
	}

	static distance(x1, y1, x2, y2) {
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 + y2) * (y1 + y2))
	}

	distance(point) {
		return Point.distance(this._x, this._y, point.x, point.y)
	}

	offset(dx, dy = dx) {
		this._x += dx
		this._y += dy
	}

	toString() {
		return `{x: ${this._x}, y: ${this._y}}`
	}
}

class AnalyticalCircle extends Circle {

	constructor(r = 0, x = 0, y = 0) {
		super(r)
		this._center = new Point(x, y)
	}

	get x() {
		return this._center.x
	}

	get y() {
		return this._center.y
	}

	set x(value) {
		this._center.x = value
	}

	set y(value) {
		this._center.y = value
	}

	get center() {
		return new Point(this.x, this.y)
	}

	set center(value) {
		this.x = value.x;
		this.y = value.y
	}

	offset(dx, dy = dx) {
		this._center.offset(dx, dy)
	}

}

class Random {

	static nextNumber(min, max) // [min, max)
	{
		return Math.random() * (max - min) + min
	}

	static nextInt(min, max) // [min, max)
	{
		return parseInt(Random.nextNumber(min, max))
	}

	static nextBoolean() {
		return Random.nextInt(0, 2) === 1
	}
}

main()
