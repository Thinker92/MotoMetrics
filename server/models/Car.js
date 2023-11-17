const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
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
});

const Thought = mongoose.model("Car", carSchema);

module.exports = Thought;
