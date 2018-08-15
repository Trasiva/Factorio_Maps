const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static(__dirname + "/"));
//Change this path to where the images are
app.use(express.static("C:/Users/codyu/AppData/Roaming/Factorio/script-output"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('map', {weather: null, error: null});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})