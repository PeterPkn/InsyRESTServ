
const express = require('express')
const app = express()
const port = 5000

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
  res.send({data: 'Hello World!'})
})


app.get('/infos', (req, res) => {
  res.send({data: ['Hello World!', 'other Data', 'Sussys']})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
