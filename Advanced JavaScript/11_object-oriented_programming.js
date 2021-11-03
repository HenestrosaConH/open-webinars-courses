/*
    - The use of object-oriented and functional programming in JS depends on our needs
    - Hoisting: In JS, functions are allocated in memory before their usage.  However, this is not applied to classes declared with "class"
    - Since ES6, syntactic sugar "class" was added, but they're functions at their core
*/
// Functional approach to OOP
const VehicleFunctional = function(fuelType) {
    this.fuelType = fuelType;
    this.isStarted = false;
    this.speed = 0;
    this.fuel = 0;
}

VehicleFunctional.prototype.start = function () {
    if (this.fuel > 0) {
        this.isStarted = true;
    }
}

VehicleFunctional.prototype.refuel = function () {
    this.fuel = 100;
}

// Class approach
class Vehicle {
    constructor(fuelType) {
        this.fuelType = fuelType;
        this.isStarted = false;
        this.speed = 0;
        this.fuel = 0;
    }

    start() {
        if (this.fuel > 0) {
            this.isStarted = true;
        }
    }

    refuel() {
        this.fuel = 100;
    }
}

// Inheritance in JS
// Only with class approach
class Car extends Vehicle {
    constructor(fuelType, doors) {
        super(fuelType);
        this.doors = doors;
        this.isOpen = false;
    }

    setOpen(isOpen) {
        this.isOpen = isOpen;
    }
}

const mazda = new Car("Gasoline", 5);
mazda.isOpen; // false
mazda.setOpen(true);
mazda.isOpen; // true
mazda.speed; // 0
