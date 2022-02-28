var fs = require('fs');
var bodyParser = require("body-parser");
var parser = require('xml2js');
const express = require('express')
const app = express()
const port = 5000

app.use(bodyParser.json())

const cors = require('cors');
const { json } = require('express');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
  res.send({data: 'Hello World!'})
})

async function getXMLFiletoJSON(){
  let res = {}
  let xml = fs.readFileSync( './buchladen.xml').toString()
  res = await parser.parseStringPromise(xml)
  return res
}

app.get('/alldata', async (req, res) => {
  let data = await getXMLFiletoJSON();
  console.log(data.buchladen.buchabteilung.keys());
  res.send({data: data});
});

app.get('/sections', async (req, res) => {
  let data = await getXMLFiletoJSON();
  console.log(Object.keys(data.buchladen.buchabteilung[0]));
  res.send({data: Object.keys(data.buchladen.buchabteilung[0])});
});

app.post("/abteilung", async (req, res) => {
  let data = await getXMLFiletoJSON();
  //console.log(data.buchladen.buchabteilung[0][[req.body.abteilung]][0].buch);
  res.send({data: data.buchladen.buchabteilung[0][req.body.abteilung][0].buch});
});



app.get('/infos', (req, res) => {
  res.send({data: ['Hello World!', 'other Data', 'Sussys']})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
