// if(true){
//     console.log("kode program dijalankan")
// }

// if(false){
//     console.log("kode program tidak dijalankan")
// }

// var mood = "happy"
// if(mood == "bad"){
//     console.log("saya sedang bahagia hari ini")
// }else{
//     console.log("hari ini sedang tidak baik baik saja")
// }

// var minimarketStatus = "open"
// var minuteRemainingToOpen = 8
// if(minimarketStatus == "open"){
//     console.log("saya akan membeli telur dan buah")
// }else if (minuteRemainingToOpen <= 5){
//     console.log("minimarket buka sebentar lagi, saya tungguin")
// }else{
//     console.log("minimarket tutup, saya pulang lagi")
// }

// var minimarketStatus = "open"
// var telur = "ready"
// var buah ="soldout"
// if(minimarketStatus == "open"){
//     console.log("saya akan membeli telur dan buah")
// if(telur == "soldout" || buah == "solout"){
//     console.log("belanjaan saya tidak lengkap")
// }else if( telur == "solout"){
//     console.log("telur habis")
// }else if( buah == "soldout"){
//     console.log("buah habis")
// }
// }else{
//     console.log("minimarket tutup.saya pulang lagi")
// }

// var umur = 35
// if(umur >= 17){
//     console.log("sudah memiliki KTP")
//     if(umur > 20){
//         console.log("Umur kurang dari 20 tahun")
//     }else if(umur > 30){
//         console.log("usia antara 20-30 tahun")
//     }else if(umur > 40){
//         console.log("usia antara 30-40 tahun")
//     }else{
//         console.log("sudah berumur")
//     }
// }else{
//     console.log("belum memiliki KTP")
// }

// var warna = "pink"
// switch(warna){
//     case "merah" : {
//         console.log("warna merah")
//         break
//     }
//     case "kuning" : {
//         console.log("warna kuning")
//         break
//     }
//     case "hijau" : {
//         console.log("warna hijau")
//         break
//     }
//     case "biru" : {
//         console.log("warna biru")
//         break
//     }
//     default : {
//         console.log("warna yang ada pilih tidak ada")
//     }
// }

// for(var angka = 1; angka < 10; angka++){
//     console.log('literasi ke-' + angka);
// }

// var jumlah = 0
// for(var deret = 5;deret > 0;deret){
//     jumlah += deret
//     console.log('jumlah saat ini ' + jumlah)
// }

// console.log('jumlah terakhir :' + jumlah)

//contoh 1
// var flag = 1
// while(flag < 10){
//     console.log('literasi ke-' + flag)
//     flag++
// }

//contoh 2
var flag = 1
do {
    console.log('literas ke-' + flag)
    flag++
} while(flag < 10)