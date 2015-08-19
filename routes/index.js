var express = require('express');
var router = express.Router();
var models = require('../models');
// var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Hotel = models.Hotel;

/* GET home page. */
router.get('/', function(req, res, next) {
  var promArr = [];
  promArr.push(Restaurant.find({}).exec());
  promArr.push(Activity.find({}).exec());
  promArr.push(Hotel.find({}).exec());
  Promise.all(promArr).then(function(results) {
    res.render('index',{
      restaurants: results[0],
      activities: results[1],
      hotels: results[2]
    });
  });
});

module.exports = router;
