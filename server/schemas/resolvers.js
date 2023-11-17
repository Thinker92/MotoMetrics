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
  },
  Mutation: {
    createUser: async (parent, args) => {
      const createdUser = await User.create({ username, email, password });
      const token = signToken(user);
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
    createCar: async (parent, { title, vin, year, make, model }, context) => {
      if (context.user) {
        const createdCar = await Car.create({
          username: context.user.username,
          title,
          vin,
          year,
          make,
          model,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
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
};

module.exports = resolvers;
