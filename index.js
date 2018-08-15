const express = require('express');
const bodyParser = require('body-parser');
//const request = require('request');
const app = express()

const apiKey = 'e2697cb19764e7c122e52ad54a955b7d';

app.use(express.static(__dirname + "/"));
app.use(express.static("C:/Users/codyu/AppData/Roaming/Factorio/script-output"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('map', {weather: null, error: null});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})