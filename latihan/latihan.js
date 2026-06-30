console.log("Hello guys")
var nama = "jhon Doe"
var nomorUrut = 12
console.log("nama")
console.log(nama)
console.log(nomorUrut)
var hari = "Jum'at"
console.log(hari)
var quote = '"halo apakabar"'
console.log(quote)
var open = true
if(open == true){
    console.log("BUKA")
}

// Operator Aritmatika
var a = 5
var b = 5
var tambah = a + b
var kurang = a - b
var kali = a * b
var bagi = a / b
var modulus = a % b
console.log(a)
console.log(b)
console.log('hasil tambah :', tambah)
console.log('hasil kurang :', kurang)
console.log('hasil kali :', kali)
console.log('hasil bagi :', bagi)
console.log('hasil modulus :', modulus)

// Operator Perbandingan
console.log("Operator Perbandingan")
console.log("=======================")
console.log(1==1)
console.log("1"==="1")
console.log(1==2)
console.log(11 != 11)
console.log(3<1)
console.log(3<3)
console.log(5>=6)
console.log(5<=6)

// Operator Kodisional
console.log("Operator Kodisional")
console.log("=====================")

// &&(AND) || (OR)
//console.log(false || false)
var status = "close"
var jamBuka = 9

console.log(status == "open" && jamBuka == 9)

// Operator STRING
console.log("STRING")
console.log("=============")
var word = "Web Programming"
var word1 = "Web"
var word2 = "Progamming"
console.log(word)
console.log(word.length)
console.log(word1)
console.log(word.charAt(3))
console.log(word1, word2, 'tahun 2026')

var word3 = word.substring(3)
console.log(word3)
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(word.trim())
console.log(word.replace('r','R'))
console.log(word.replaceAll(' ','-'))

console.log('Mengubah menjadi String')
// Mengubah menjadi String
// 1.   .toString
// 2.   String(namaVariabel)

var angka = 10
console.log(angka)
console.log(angka+angka)
console.log(String(angka))
console.log(angka.toString())

var angka = angka.toString()
console.log(angka)
console.log(angka+angka)

// Mengubah jadi Angka/Number
// 1.   parseInt(namaVariabel)
// 2.   Number(namavariabel)

var kata = "7"
console.log(kata)
console.log(Number(kata))
console.log(parseInt(kata))

var angka1 = 1.5
var angka2 = 2.7
console.log(angka1)
console.log(angka2)

var angka3 = angka1 + angka2
console.log(angka3)

if(true){
    console.log("jalankan code")
}

if(false){
    console.log("code tidak dijalankan")
}

var mood = "happy"
if ( mood == "sad"){
    console.log("hari ini aku bahagia")
}