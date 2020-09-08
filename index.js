const express = require("express")
const server = express();
server.use(express.json());

const db = require('./data/dbConfig')

const PORT = process.env.PORT || 4000;

const CarsRouter = require('./car-router');

server.get('/', (req, res)=> {
  res.send('Working!')
})

server.use('/api/cars', CarsRouter)

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});


module.exports = server 