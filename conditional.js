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

var minimarketStatus = "open"
var telur = "ready"
var buah ="soldout"
if(minimarketStatus == "open"){
    console.log("saya akan membeli telur dan buah")
if(telur == "soldout" || buah == "solout"){
    console.log("belanjaan saya tidak lengkap")
}else if( telur == "solout"){
    console.log("telur habis")
}else if( buah == "soldout"){
    console.log("buah habis")
}
}else{
    console.log("minimarket tutup.saya pulang lagi")
}