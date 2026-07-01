const express = require('express');
const app = express();
const port = 3000;

let mahasiswa = ["Daffa","Irtiyah","Andra","Yulita"]
let objectMahasiswa = [
  {nim :161328,
    nama : "Na Jaemin"
  },
  {nim :281613, nama: "Jung Jaehyun"},
  {nim :130128, nama: "Ohm Pawat"},
  {nim :131628, nama: "Ing Asavanud"}
]

const getObjectMahasiswa = (req, res) => {
  let {nama} = req.query 
  let result = ""

   if(nama == undefined){
   nama = ""
   }

console.log(nama)
  objectMahasiswa.forEach((item, index) => {
    if(item.nama.toLowerCase().includes(nama)) {
    result += `<h3> ${index+1}.</br>NIM : ${item.nim}<br>Nama : ${item.nama}`
    }
    if (result === "")

    res.send(`<h3>Data tidak ditemukan.<hbr>`)
  })
  res.send(result);
}


const getMahasiswa = (req, res) => {
  let result = ""

  mahasiswa.forEach(function(item, index){
    result += `<br>${index + 1}.${item}</br>`
  })

  res.send(`${result}`);
}


const getObjectMahasiswabyNim = (req, res) => {
  let {nim} = req.params;
  let hasil = objectMahasiswa.find((item) => {
    return item.nim === Number(nim)
  })

  res.send(`${hasil.nama}`)
}

app.get('/', (req, res) => {
  res.send('helo, nama saya Daffa');
});

app.get('/mahasiswa', getMahasiswa)
app.get('/objectmahasiswa', getObjectMahasiswa)
app.get('/objectmahasiswa/:nim', getObjectMahasiswabyNim)

app.listen(port, () => {
  console.log('example app listening on port ${port}')
});