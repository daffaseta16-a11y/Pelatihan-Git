const express = require('express');
const app = express();
const port = 3000;

let movies = [
    {id:1, tittle: "spiderman", year: 2002}
    {id:2, tittle: "Jhon wick", year: 2014}
    {id:3, tittle: "The Avegers", year: 2012}
    {id:4, tittle: "Logan", year: 2017}
]
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});