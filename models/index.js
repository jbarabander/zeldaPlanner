var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zeldaPlanner');
var db = mongoose.connection;
db.on('err', console.error.bind(console, 'mongodb connection error:'));
var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  phone: {type: String, required: true},
  location: {type: [Number], required: true}
})
var hotelSchema = new Schema({
  name: {type: String, required: true},
  place: [placeSchema],
  num_stars: {type: Number, required: true, min: 1, max: 5},
  amenities: {type: String, required: true}
})

var activitySchema = new Schema({
  name: {type: String, required: true},
  place: [placeSchema],
  age_range: {type: String}
})

var restaurantSchema = new Schema({
  name: {type: String, required: true},
  place: [placeSchema],
  cuisine: {type: String, required: true},
  price: {type: Number, required: true, enum: [1,2,3,4,5]}
})


module.exports = {
  Place: mongoose.model("Place", placeSchema),
  Hotel: mongoose.model("Hotel", hotelSchema),
  Activity: mongoose.model("Activity", activitySchema),
  Restaurant: mongoose.model("Restaurant", restaurantSchema)
}
