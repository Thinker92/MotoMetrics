const typeDefs = `
  type User {
  _id: ID
  username: String
  email: String
  password: String
  cars: [Car]!
  }

  type Car {
    _id: ID
    username: String
    vin: String
    title: String
    year: Int
    make: String
    model: String
    fuel_type: String
    drive: String
    transmission: String
    min_comb_mpg: Int
    max_comb_mpg: Int
  }

  type Query {
    users: [User]!
    user(username: String): User
    cars(username: String): [Car]!
    car(carId: ID!): Car
    searchCars(make: String, model: String, fuel_type: String, drive: String, transmission: String, year: Int, min_comb_mpg: Int, max_comb_mpg: Int, limit: Int): [ExternalCar]
  }

 
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    createCar( vin: String, title: String, year: Int!, make: String!, model: String!): Car
    removeCar(Car_Id: ID!): Car
  }
`;

module.exports = typeDefs;
