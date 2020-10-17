let cities = []
let numberOfCities = 20

let order = []
let populationSize = 500
let population = []
let fitness = [];

let recordDistance = Infinity;
let bestEver;
let currentBest;

function setup() {
	createCanvas(800, 800)
	for (let i = 0; i < numberOfCities; i++) {
		cities.push(new City(random(width), random(height)))
		order.push(i)
	}
	console.log(order)

	for (let i = 0; i < populationSize; i++) {
		population.push(shuffle(order))
	}
}

function draw() {
	calculateFitness();
	nextGeneration();

	background("#041020")
	// translate(0, height / 2)
	for (let order of population) {
		showPath(order, false)
	}

	showPath(bestEver, true)
	showCities()
}

function showCities() {
	for (let i = 0; i < numberOfCities; i++) {
		cities[i].show()
	}
}

function showPath(order, isBest) {
	let weight = isBest ? 2 : 1
	let alphaVal = isBest ? 255 : 100
	let color = isBest ? 255 : 60
	stroke(color, alphaVal);
	strokeWeight(weight);
	noFill();
	beginShape();
	for (let i = 0; i < numberOfCities; i++) {
		let index = order[i]
		vertex(cities[index].x, cities[index].y);
	}
	endShape();
}