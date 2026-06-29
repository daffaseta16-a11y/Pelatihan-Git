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

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(x) {
//         return x + ", i have a " + this.carname;
//     }
// }

// mycar = new Car("Ford")
// console.log(mycar.present("hello"))
// mycar2 = new Car("Toyota")
// console.log(mycar2.present("hello"))

//Cara lain 1
// class Car {
//     constructor(brand, mobilku) {
//         this.carname = brand;
//         this.mobilku = mobilku
//     }
//     present(x) {
//         return x + ", i have a " + this.carname;
//     }
// }

// mycar = new Car("Ford")
// console.log(mycar.present("hello"))
// mobilku = new Car("Toyota")
// console.log(mobilku.present("hei"))

//setter & getter
// class Car {
//     constructor(brand) {
//         this._carname = brand;
//     }
//     get carname() {
//         return this._carname;
//     }
//     set carname(x) {
//         this._carname = x;
//     }
// }

// mycar = new Car("BMW");
// mycar.carname = "kijang"

// inheritance
class Person{
    constructor(nama){
        this.nama = nama
        this._mapel = ""
    }
    get personMapel(){
        return this._mapel
    }
    set personMapel(mapel){
        this._mapel = mapel
    }

    berjalan(){
        return "ui ui ui"
    }
}

class School extends Person{
    constructor(nama){
        super(nama)
        this.School = ""
    }
}

var guru = new School("Pak Jaemin")
guru.personMapel = "matematika"
console.log(guru)
console.log(guru.berjalan())