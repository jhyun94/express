var express = require('express');
var hbs = require('hbs');
var port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageMessage: 'home page message'
  });
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageMessage: 'about page message'
  });
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio.hbs', {
    pageMessage: 'portfolio page message'
  });
})
app.listen(port);