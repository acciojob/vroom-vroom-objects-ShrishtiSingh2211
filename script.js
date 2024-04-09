// Complete the js code
function Car(make, model) {
	this.make = make;
    this.model = model;
}
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model); // Call the Car constructor with make and model arguments
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype into the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Method added to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
