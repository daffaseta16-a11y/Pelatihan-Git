require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { moviesRouter } = require('./src/route/moviesRouter');
// const { moviesRouter } = require('./src/route/moviesRouter');
const app = express();
const port = 3000

var corsOptions = {
origin: 'http://localhost:3000',
optionsSuccessStatus: 200
}


app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', moviesRouter);
//app.use("/movies/:id", )

// app.get('/', (req, res) => {
//   res.send('helo jaem!');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});