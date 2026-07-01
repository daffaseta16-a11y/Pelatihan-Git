const express = require('express');
const app = express();
const port = 3000;

let movies = [
    {id: 1, title: "spiderman", year: 2002},
    {id: 2, title: "Jhon wick", year: 2014},
    {id: 3, title: "The Avegers", year: 2012},
    {id: 4, title: "Logan", year: 2017}
]

const getMovies = (req, res) => {
  let {title} = req.query 

   console.log(title)

   if(title == undefined){
   title = ""
   }

   let result = ""

   movies.forEach((item, index) => {
    if(item.title.toLowerCase().includes(title)) {
    result += `<h3> ${index+1}.</br>tittle : ${item.title}<br>year : ${item.year}`
    }
    // if (result === "")

    // res.send(`<h3>Data tidak ditemukan.<hbr>`)
  })
  res.send(result);
}


const getMoviesId = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
    return item.id === Number(id)
  })
// if(hasil){
//   return res.send("<h3>Movie tidak dapat ditemukan</br>")
// }
  res.send(`<h3>Title: ${hasil.title} <br> Year: ${hasil.year}</br>`)
}

app.get('/movies', getMovies)
app.get('/movies/:id', getMoviesId)




const getMoviesApi = (req, res) => {
  let {title} = req.query 

   console.log(title)

   if(title == undefined){
   title = ""
   }

   let result = movies.filter((item, index) => {
    return item.title.toLowerCase().includes(title.toLowerCase())
   })

   res.json(result)
}


const getMoviesbyIdApi = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
    return item.id === Number(id)
  })
if(hasil){
  return res.send("<h3>Movie tidak dapat ditemukan</br>")
}
  res.send(`<h3>Title: ${hasil.title} <br> Year: ${hasil.year}</br>`)
}

app.get('/api/movies', getMoviesApi)
app.get('/api/movies/:id', getMoviesbyIdApi)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});