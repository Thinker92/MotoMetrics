const mongoose = require("mongoose");
require("dotenv");
const password = encodeURIComponent(process.env.Password);
mongoose.connect(
  `mongodb+srv://kimshawnj:${password}@cluster0.wckgwdo.mongodb.net/motodb` ||
    "mongodb://127.0.0.1:27017/motodb"
);
module.exports = mongoose.connection;
