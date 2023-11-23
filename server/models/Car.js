const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 20,
  },
  vin: {
    type: String,
    minlength: 11,
    maxlength: 17,
  },
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
  drive: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  min_comb_mpg: {
    type: Number,
  },
  max_comb_mpg: {
    type: Number,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
