var angka = [2, 3, 1, 6, 8]
console.log(angka[0])
console.log(angka[3])
console.log(angka)

// length
console.log(angka.length)

// push
console.log("sebelum push : "+angka)
angka.push(9)
console.log("setelah push : "+angka)

// pop
console.log("sebelum pop : " + angka)
angka.pop()
console.log("setelah pop : " + angka)

// unshift
console.log("sebelum unshift : "+angka)
angka.unshift(8)
console.log("setelah unshift : "+angka)

// shift
console.log("sebelum shift : "+angka)
angka.shift()
console.log("setelah shift : "+angka)

var peserta = ["Andra, Taufik, Adit, Debby"]
console.log(peserta)

// join
console.log("sebelum join")
console.log(peserta)
// peserta.join ("-")
console.log("setelah join")
console.log(peserta.join("-"))

//split
var nama = "Daffa seta Az-Zahra Resqiumah"
console.log("sebelum split")
console.log(nama)
console.log("setelah di split")
console.log(nama.split(""))

console.log("sebelum ")
console.log(nama)
console.log("setelah di split")
console.log(nama.split(" ").length)

console.log(nama.length)

var peserta = ["Andra", "Taufik", "Adit", "Debby"]
console.log("sebelum sort")
console.log(peserta)
console.log("setelah di sort")
console.log(peserta.sort())
console.log(peserta)

console.log("setelah di Reverse")
console.log(peserta.reverse())
console.log(peserta)

console.log("sebelum slice")
console.log(peserta)
var newPeserta = peserta.slice(1,3)
console.log(newPeserta)
console.log(peserta)

console.log("sebelum Splice")
console.log(peserta)
console.log("setelah di splice")
peserta.splice(1,2)
console.log(peserta)
