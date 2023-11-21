// src/utils/mutations.js
import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const CREATE_CAR = gql`
  mutation createCar($title: String!, $vin: String!, $year: Int!, $make: String!, $model: String!) {
    createCar(title: $title, vin: $vin, year: $year, make: $make, model: $model) {
      _id
      title
      vin
      year
      make
      model
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation removeCar($Car_Id: ID!) {
    removeCar(Car_Id: $Car_Id) {
      _id
      title
      vin
      year
      make
      model
    }
  }
`;
