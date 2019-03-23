const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const fs = require('fs');
const port = 3000;

//Change this path to where the images are
app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/public/"));
app.use(express.static(__dirname + "/components/"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
	const myLayers = fs.readdirSync(__dirname + "/public/Layers").filter( (name) => name.match(/map_\d+_\w+_\d+/));
	res.render('map', { myLayers: myLayers});
})	

app.get('/soap', function (req, res) {
	const soapList = JSON.parse(fs.readFileSync(__dirname + '/components/soaps.json', 'utf8'));
	res.render('soaps', { mySoaps: soapList});
})

app.listen(port, function () {
  console.log('Running Node server on port 127.0.0.1:' + port + '...')
})

console.log(__dirname);