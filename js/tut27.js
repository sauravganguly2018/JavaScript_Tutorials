console.log("This is tut 27");

// Object Literal for creating objects
let car = {
    name: "Maruti Suzuki",
    topspeed: 100,
    run: function () {
        console.log("car is running");
    }
}

// We have already seen constructors like these
// new Date();

// Creating a constructor for cars
function Generalcar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.speed} km/h than Mercedes`);
    }
}

car1 = new Generalcar("Nissan", 140);
car2 = new Generalcar("Maruti Alto", 90);
car3 = new Generalcar("Mercedes", 200);
console.log(car1,car2,car3);