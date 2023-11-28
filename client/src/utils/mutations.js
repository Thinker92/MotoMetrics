// src/utils/mutations.js
import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
    token
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        _id
        username
        email
      
    }
  }
`;

export const CREATE_CAR = gql`
  mutation createCar($year: Int, $make: String, $model: String, $fuel_type: String, $drive: String, $transmission: String, $min_comb_mpg: Int, $max_comb_mpg: Int) {
    createCar(year: $year, make: $make, model: $model, fuel_type: $fuel_type, drive: $drive, transmission: $transmission, min_comb_mpg: $min_comb_mpg, max_comb_mpg: $max_comb_mpg) {
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

export const REMOVE_CAR = gql`
  mutation removeCar($Car_Id: ID!) {
    removeCar(Car_Id: $Car_Id) {
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
