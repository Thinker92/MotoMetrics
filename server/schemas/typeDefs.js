const typeDefs = `
  type User {
  _id: ID
  username: String!
  email: String!
  password: String!
  cars: [Car]
  }

  type Car {
    _id: ID
    username: String!
    vin: String
    title: String
    year: Int!
    make: String!
    model: String!
  }

  type Query {
    users: [User]
    user(username: String): User
    cars(username: String): [Car]
    car(carId: ID!): Car
  }

 
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createCar( vin: String, title: String, year: Int!, make: String!, model: String!): Car
    removeCar(Car_Id: ID!): Car
  }
`;

module.exports = typeDefs;
