var express = require('express');
var router = express.Router();
var url = require('url');
var fs = require('fs'); // per leggere il file da restituire

var txt = "This is the new text uploaded dynamically from the server.";

var hint = require('./getHint');

var list = [{Name: "Alfreds Futterkiste", City: "Berlin", Country: "Germany"}, { Name: "Berglunds snabbköp", City: "Luleå", Country: "Sweden" }, {Name: "Centro comercial Moctezuma", City: "México D.F.", Country: "Mexico"}, { Name: "Ernst Handel", City: "Graz", Country: "Austria" }, { Name: "FISSA Fabrica Inter. Salchichas S.A.", City: "Madrid", Country: "Spain" }, {Name: "Galería del gastrónomo", City: "Barcelona", Country: "Spain"}, { Name: "Island Trading", City: "Cowes", Country: "UK" }, { Name: "Königlich Essen", City: "Brandenburg", Country: "Germany" }, { Name: "Laughing Bacchus Wine Cellars", City: "Vancouver", Country: "Canada" }, {Name: "Magazzini Alimentari Riuniti", City: "Bergamo", Country: "Italy"}, { Name: "North/South", City: "London", Country: "UK" }, {Name: "Paris spécialités", City: "Paris", Country: "France"}, { Name: "Rattlesnake Canyon Grocery", City: "Albuquerque", Country: "USA" }, {Name: "Simons bistro", City: "København", Country: "Denmark"}, { Name: "The Big Cheese", City: "Portland", Country: "USA" }, {Name: "Vaffeljernet", City: "Århus", Country: "Denmark"}, { Name: "Wolski Zajazd", City: "Warszawa", Country: "Poland" }]
;

var names = ["Anna", "Brittany", "Cinderella", "Diana", "Eva", "Fiona", "Gunda", "Hege", "Inga", "Johanna", "Kitty", "Linda", "Nina", "Ophelia", "Petunia", "Amanda", "Raquel", "Cindy", "Doris", "Eve", "Evita", "Sunniva", "Tove", "Unni", "Violet", "Liza", "Elizabeth", "Ellen", "Wenche", "Vicky"];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to TASD server');
});

router.get('/industry', function(req, res, next) {
  res.json(list);
});

router.get('/elenco', function(req, res, next) {
  res.json(names);
});

router.get('/hint', function(req, res, next) {
  /* Use the url module to turn the querystring into an object: */
  var q = url.parse(req.url, true).query;
  /* Extract the passed input from the query object: */
  var str = q.entry;
  res.send(hint.getHint(str));
});

router.get('/datiCovid.csv', function(req, res, next) {
  fs.readFile('us-states.csv', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    return res.end();
  });
});

module.exports = router;
