// class car {
//     constructor(brand,factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "honk! honk! vromrom"
//     }
// }

// // Instance dari class car
// var inovam = new car("Inovam", "toyotwo")
// console.log(inovam)

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return "i have a" + this.carname;
//     }
// }

// mycar = new Car("Ford");
// console.log(mycar.present())

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present(x) {
        return x + ", i have a " + this.carname;
    }
}

mycar = new Car("Ford")
console.log(mycar.present("hello"))
mycar = new Car("Toyota")
console.log(mycar.present("hello"))