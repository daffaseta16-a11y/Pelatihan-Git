console.log("Deklarasi Object")
var orang = {
    nama : "abdul",
    warnaKulit : "sawo matang",
    tinggiBadan : 185,
    jenisKelamin : "laki-laki",
    beratBadan : 70,
    usia : 20
}

console.log(orang)

console.log("array of object")
var orang = [
{
    nama : "abdul",
    warnaKulit : "sawo matang",
    tinggiBadan : 185,
    jenisKelamin : "laki-laki",
    beratBadan : 70,
    usia : 20
},
{
    nama : "yoyo",
    warnaKulit : "gelap",
    tinggiBadan : 175,
    jenisKelamin : "laki-laki",
    beratBadan : 60,
    usia : 29
},
{
    nama : "era",
    warnaKulit : "putih",
    tinggiBadan : 165,
    jenisKelamin : "perempuan",
    beratBadan : 50,
    usia : 19
}
]
console.log(orang[2].tinggiBadan)

console.log("array Iteration")
for(i=0; i < orang.length; i++){
    console.log(orang[1].tinggiBadan)
}

console.log(".forEach")
orang.forEach(function(item){
    console.log(item.warnaKulit)
})

console.log(".map")
var warnaKulit = orang.map(function(item){
    return item.warnaKulit
})

console.log(warnaKulit)

console.log(".filter")
var filterUsia = orang.filter(function(item){
    return item.usia >= 20
})

console.log(filterUsia)