// var nama = "john"
// var nama = "doe"

// console.log(nama)

// Let
// let nama = "john"
// if(true)
// {
//     let nama = "doe"
//     console.log(nama)
// }

// console.log(nama)

// let nama = "john"
// if(true)
// {
//     let nama = "doe"
// }

// console.log(nama)

// const pi = 3.14

// pi = 22/7

// console.log(pi)

// console.log("==== arrow function ====")
// var tampilkanNama = (a) => {
//     console.log("halo, "+ a)
// }
// tampilkanNama("Huda")

// const hitungPersegi = (sisi) => {
//     const luas = (s) => s * s 
//     const keliling = (s) => 4 * s
//     console.log("Luas Persegi =", luas(sisi))
//     console.log("Keliling persegi =", keliling(sisi))
// }

// hitungPersegi(6)

// let nama = "Na Jaemin"
// console.log(`halo!, ${nama}. selamat datang!`)

// text1 = "halo"
// text2 = "selamat"
// text3 = "datang"

// console.log(`${text1} ${text2} ${text3}`)

// Enhanced object Literal
// let nama = "jaemin"
// let person = {
//     nama : nama,
//     umur : 28
// }

// console.log(person)

//Destructuring Array
// let number = [1,3,8,6,7]

// let number1 = number[0]
// let number2 = number[1]
// let number3 = number[2]
// let number4 = number[3]
// let number5 = number[4]

// let [num1, num2, num3, num4, lastNum] = [1,3,8,6,7]

// console.log(num3)

//Destrucring Object
// let nama = "jaemin"
// let person = {
//     nama : nama,
//     umur : 28,
//     tinggi : 173
// }

// // let namaPerson = person.nama
// // let umurPerson = person.umur
// // let tinggiPerson = person.tinggi
// // let {nama, umur, tinggi} = person
// console.log(tinggi)

//Rest Parameter
// let [num1, , , , lastNum] = [1,3,8,6,7]

// let footballers = ["messi", "ronaldo", "mbapee", "halland", "neymar"]
// // let [foot1, foot2, foot3, foot4, foot5] = footballers
// let [foot1,foot2,...restFoots] = footballers

// console.log(restFoots)

// let names = "jaemin"
// let person = {
//     nama : names,
//     umur : 26,
//     tinggi : 178
// }

// let {nama, ...restPerson} = person
// console.log(nama)
// console.log(restPerson)

// Spread Operatror
// let buah = ["strawberry", "banana", "watermelon"]
// // buah.unshift("manggo")
// // buah.push("peach")
// // console.log(buah)

// buah = ["Manggo", ...buah,"jeruk"]
// console.log(buah)

// let botol = {
//     merk : "Crystalin",
//     ukuran : "1 liter",
//     harga : 10000
// }

//  botol = {...botol, warna: "biru", kemasan: "kaca",bentuk : "bulat"}
// console.log(botol)

// var isMomHappy = false

// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy){
//             var phone = {
//                 brand: 'samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason);
//         }
    
//     }
// );

// function askMom() {
//     willIGetNewPhone
//     .then(function (terpenuhi) {
//         console.log(terpenuhi);
//     })
//     .catch(function (gagal) {
//         console.log(gagal.message);
//     });
// }

// askMom()

function doAsync(nomorIdPasien) {
    return new Promise (function (resolve, reject){
       var dataPasien = [
        {id: 1, nama: "John", jenisKelamin: "Laki-laki"},
        {id: 2, nama: "Jeno", jenisKelamin: "Laki-laki"},
        {id: 3, nama: "grace", jenisKelamin: "Perempuan"},
        {id: 4, nama: "jaemin", jenisKelamin: "Laki-laki"},
       ]
       var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
       if (pasien === undefined){
        reject("data pasien tidak ada")
       }else {
        resolve(pasien)
       }
    })
}
async function hello(nomorIdPasien) {
    try {
        var result = await doAsync(nomorIdPasien);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

hello(2);
   
// periksaDataPasien(5).then(function(data) {
//    console.log(data); 
// }).catch(function(err) {
//     console.log(err);
// })


// Async/await

//  function doAsync() {
//     return new Promise( function (resolve, reject){
//         var check = true
//         if (check){
//             resolve("berhasil")
//         }else{
//             reject("gagal")
//         }
//     })
// }

// async function hello() {
//         var result = await doAsync()
//     console.log(result)
// }

// async function hello() {
//     try{
//         var result = await doAsync()
//     console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }

// hello()