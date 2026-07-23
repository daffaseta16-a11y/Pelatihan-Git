require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { moviesRouter } = require('./src/route/moviesRouter');
const {userRouter} = require('./src/route/userRouter');
// const { moviesRouter } = require('./src/route/moviesRouter');
const app = express();
const port = 3000
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json');
const categoryRouter = require('./src/route/categoryRouter');

var corsOptions = {
origin: 'http://localhost:5173',
optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', moviesRouter);
app.use("/api", categoryRouter)
app.use('/', userRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
//app.use("/movies/:id", )

// app.get('/', (req, res) => {
//   res.send('helo jaem!');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});