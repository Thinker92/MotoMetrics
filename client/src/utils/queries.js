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
        title
        vin
        year
        make
        model
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
        title
        vin
        year
        make
        model
      }
    }
  }
`;

export const QUERY_CARS = gql`
  query cars($username: String) {
    cars(username: $username) {
      _id
      title
      vin
      year
      make
      model
    }
  }
`;

export const QUERY_CAR = gql`
  query car($carId: ID!) {
    car(carId: $carId) {
      _id
      title
      vin
      year
      make
      model
    }
  }
`;

export const QUERY_SEARCH_CARS = gql`
  query SearchCars($make: String, $model: String, $fuel_type: String, $drive: String, $cylinders: Int, $transmission: String, $year: Int, $min_city_mpg: Int, $max_city_mpg: Int, $min_hwy_mpg: Int, $max_hwy_mpg: Int, $min_comb_mpg: Int, $max_comb_mpg: Int, $limit: Int) {
    searchCars(make: $make, model: $model, fuel_type: $fuel_type, drive: $drive, cylinders: $cylinders, transmission: $transmission, year: $year, min_city_mpg: $min_city_mpg, max_city_mpg: $max_city_mpg, min_hwy_mpg: $min_hwy_mpg, max_hwy_mpg: $max_hwy_mpg, min_comb_mpg: $min_comb_mpg, max_comb_mpg: $max_comb_mpg, limit: $limit) {
      make
      model
      fuel_type
      drive
      cylinders
      transmission
      year
      min_city_mpg
      max_city_mpg
      min_hwy_mpg
      max_hwy_mpg
      min_comb_mpg
      max_comb_mpg
    }
  }
`;
