const { User, Car } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("cars");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("cars");
    },
    cars: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Car.find(params);
    },
    car: async (parent, { _id }) => {
      return Car.findOne({ _id });
    },


    searchCars: async (_, args) => {
      // Filter out empty or undefined parameters
      const validParams = Object.entries(args).reduce((acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      }, {});

      const queryParams = new URLSearchParams(validParams).toString();
      console.log(`queryParams: ${queryParams}`);
      const url = `https://api.api-ninjas.com/v1/cars?${queryParams}`;

      try {
        const response = await fetch(url, {
          headers: { "X-Api-Key": process.env.CARS_API_KEY },
        });
        const data = await response.json();
        // console.log(data);
        return data.map((car) => ({
          make: car.make,
          model: car.model,
          fuel_type: car.fuel_type,
          drive: car.drive,
          transmission: car.transmission,
          year: car.year,
          min_comb_mpg: car.min_comb_mpg,
          max_comb_mpg: car.max_comb_mpg,
        }));
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching data from external API");
      }
    },

  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const createdUser = await User.create({ username, email, password });
      const token = signToken(createdUser);
      return { createdUser, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    createCar: async (
      parent,
      {
        title,
        vin,
        year,
        make,
        model,
        fuel_type,
        drive,
        transmission,
        min_comb_mpg,
        max_comb_mpg,
      },
      context
    ) => {
      if (context.user) {
        const createdCar = await Car.create({
          username: context.user.username,
          title,
          vin,
          year,
          make,
          model,
          fuel_type,
          drive,
          transmission,
          min_comb_mpg,
          max_comb_mpg,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
    removeCar: async (parent, { Car_Id }, context) => {
      if (context.user) {
        const car = await Car.findOneAndDelete({
          _id: Car_Id,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { Cars: car._id } }
        );

        return Car;

      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
