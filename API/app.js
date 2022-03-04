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

app.get('/sec:data', async (req, res) => {
  res.send({data: req});
});



// Add Book:
// Elements: buch, autor(vorname, nachname), buchtitel, verlag, isbn, jahr, ort, hersteller, auflage, lieferung
// Path: Buchladen, Buchabteilung, Abteilung

app.post("/setbook", async (req, res) => {
  let current_xml_file = await getXMLFiletoJSON();
  let buchdaten = req.body.buchdaten;

  current_xml_file.buchladen.buchabteilung[0][[req.body.abteilung]][0].buch.push(buchdaten);
  console.log(current_xml_file.buchladen.buchabteilung[0][[req.body.abteilung]][0].buch);

  var builder = new parser.Builder();
  var xml = builder.buildObject(current_xml_file);

  fs.writeFile("buchladen.xml", xml, function(err, data) {
    if (err) console.log(err);

    console.log("successfully written our update xml to file");
  });

  let success_status = "";
  
  res.send({data : success_status})
});

app.get('/infos', (req, res) => {
  res.send({data: ['Hello World!', 'other Data', 'Sussys']})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

