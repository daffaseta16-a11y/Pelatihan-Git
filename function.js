// console.log("function 1 : sederhana tanpa return")
// function tampilkan(nama){
//     console.log("halo", nama)
// }

// var nama = "Daffa"
// tampilkan(nama)

// console.log("function 2 : sedrehana dengan return")
// function munculkanAngka(){
//     return 3
// }

// var tampung = munculkanAngka()
// console.log(tampung)

// console.log("function 3 : dengan parameter")
// function kalikan(angka){
//     return angka * 3
// }

// var tampung = kalikan(3)
// console.log(tampung)

// console.log("function 4 : pengiriman parameter lebih dari satu dan nilai default")
// function tampilkanAngka(angkaPertama, angkaKedua=2){
//     return angkaPertama + angkaKedua
// }

// console.log(tampilkanAngka(5, 9))
// console.log(tampilkanAngka(6))

// console.log("===Anonymus Function===")
// var fungsiPerkalian = function(angkaPertama, angkaKedua){
//     return angkaPertama * angkaKedua
// }

// console.log(fungsiPerkalian(2, 5))

// Functional Progammming
// console.log("Recursive Function")

// // Program menghitung mundur angka 1
// function countDown(number){
//     console.log(number)

//     var newNumber = number - 2
//     if (newNumber > 0){
//         countDown(newNumber)
//     }
// }

// countDown(10)

// console.log("first-class function")
// function hitungLingkaran(radius){
//     var pi = 22/7

//     function luas(r){
//         return pi * r * r
//     }
//     function keliling(r){
//         return 2 * pi * r
//     }
//     console.log("Luas Lingkaran =", luas(radius))
//     console.log("Keliling lingkaran =", keliling(radius))
// }

// hitungLingkaran(21)

console.log("first-class function")
// fungsi biasa
function hitungPersegi(sisi){

    function luas(s){
        return s * s 
    }
    function keliling(s){
        return 4 * s
    }
    console.log("Luas Persegi =", luas(sisi))
    console.log("Keliling persegi =", keliling(sisi))
}

hitungPersegi(6)

// console.log("====Currying Function====")
// function tambah (a){
//     return function(b){
//         return a + b 
//     }
// }

// console.log(tambah(2)(5))