// src/utils/queries.js
import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query {
    users {
      _id
      username
      email
      cars {
        _id
        year
        make
        model
        fuel_type
        drive
        transmission
        min_comb_mpg
        max_comb_mpg
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      cars {
        _id
        year
        make
        model
        fuel_type
        drive
        transmission
        min_comb_mpg
        max_comb_mpg
      }
    }
  }
`;

export const QUERY_CARS = gql`
  query cars($username: String) {
    cars(username: $username) {
      _id
      year
      make
      model
      fuel_type
      drive
      transmission
      min_comb_mpg
      max_comb_mpg
    }
  }
`;

export const QUERY_CAR = gql`
  query car($carId: ID!) {
    car(carId: $carId) {
      _id
      year
      make
      model
      fuel_type
      drive
      transmission
      min_comb_mpg
      max_comb_mpg
    }
  }
`;

export const QUERY_SEARCH_CARS = gql`
  query SearchCars($make: String, $model: String, $fuel_type: String, $drive: String, $transmission: String, $year: Int, $min_comb_mpg: Int, $max_comb_mpg: Int) {
    searchCars(make: $make, model: $model, fuel_type: $fuel_type, drive: $drive, transmission: $transmission, year: $year, min_comb_mpg: $min_comb_mpg, max_comb_mpg: $max_comb_mpg) {
      make
      model
      fuel_type
      drive
      transmission
      year
      min_comb_mpg
      max_comb_mpg
    }
  }
`;