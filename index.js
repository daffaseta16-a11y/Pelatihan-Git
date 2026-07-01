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
  let {title, id} = req.query 
  let result = ""

   console.log(title)

   let result = ""

   movies.forEach((item, index) => {
    if(item.title.toLowerCase().includes(title.toLowerCase)) {
    result += `<h3> ${index+1}.</br>tittle : ${item.title}<br>year : ${item.year}`
    }
    if (result === "")

    res.send(`<h3>Data tidak ditemukan.<hbr>`)
  })
  res.send(result);
}


app.get('/movies', getMovies)




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});