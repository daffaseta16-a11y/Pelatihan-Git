const express = require('express');
const { moviesRouter } = require('./src/route/moviesRouter');
// const { moviesRouter } = require('./src/route/moviesRouter');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('helo jaem!');
// });


app.use(express.json())
app.use('/api', moviesRouter);
//app.use("/movies/:id", )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});