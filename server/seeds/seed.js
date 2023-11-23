const db = require("../config/connection");
const { Car } = require("../models");
const cleanDB = require("./cleanDB");

const carData = require("./carData.json");

db.once("open", async () => {
  await cleanDB("Car", "cars");

  await Car.insertMany(carData);

  console.log("successfully seeded");
  process.exit(0);
});
