var express = require('express');
var path = require('path');
const app = express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

app.use(express.static('images'));
app.use(express.static('styles'));
app.use(express.static('scripts'));

app.set('view engine','nunjucks');
nunjucks.configure('templates', {
  autoescape: true,
  express: app
});
app.set('viewengine', 'nunjucks');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.route('/')
  .get((req, res) => {
    res.render('zero');
  })

  app.route('/buybooks')
  .get((req, res) => {
    res.render('buybooks');
  })

  app.route('/contactus')
  .get((req, res) => {
    res.render('contactus');
  })

  app.route('/locations')
  .get((req, res) => {
    res.render('locations');
  })

  app.route('/sellbooks')
  .get((req, res) => {
    res.render('sellbooks');
  })

  app.route('/sellbooks')
  .get((req, res) => {
    res.render('sellbooks');
  })

  app.route('/sign-in')
  .get((req, res) => {
    res.render('sign-in');
  })

  app.route('/sign-in2')
  .get((req, res) => {
    res.render('sign-in2');
  })

  app.route('/sign-up')
  .get((req, res) => {
    res.render('sign-up');
  })

  app.route('/sign-up2')
  .get((req, res) => {
    res.render('sign-up2');
  })

  app.route('/firstbook')
  .get((req, res) => {
    res.render('firstbook');
  })

  app.route('/secondbook')
  .get((req, res) => {
    res.render('secondbook');
  })

  app.route('/thirdbook')
  .get((req, res) => {
    res.render('thirdbook');
  })

  app.route('/fourthbook')
  .get((req, res) => {
    res.render('fourthbook');
  })

  app.route('/fifthbook')
  .get((req, res) => {
    res.render('fifthbook');
  })

  app.route('/sixthbook')
  .get((req, res) => {
    res.render('sixthbook');
  })

  



app.listen(5050);

