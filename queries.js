import { gql } from '@apollo/client';

export const GET_ALL_EVENTS = gql`
  query GetAllEvents {
    events {
      id
      title
      date
      time
      location
      venue
      host
      description
    }
  }
`;

export const GET_EVENT = gql`
  query GetEvent($id: String!) {
    event(id: $id) {
      id
      title
      date
      time
      location
      venue
      host
      description
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $title: String!
    $date: String!
    $time: String!
    $location: String!
    $venue: String!
    $host: String!
    $description: String!
  ) {
    createEvent(
      title: $title
      date: $date
      time: $time
      location: $location
      venue: $venue
      host: $host
      description: $description
    ) {
      id
      title
      date
      time
      location
      venue
      host
      description
    }
  }
`;

export const REGISTER_FOR_EVENT = gql`
  mutation RegisterForEvent(
    $eventId: String!
    $fullName: String!
    $rollNumber: String!
    $email: String!
    $phone: String!
    $dietaryRestrictions: String
    $specialRequirements: String
  ) {
    registerForEvent(
      eventId: $eventId
      fullName: $fullName
      rollNumber: $rollNumber
      email: $email
      phone: $phone
      dietaryRestrictions: $dietaryRestrictions
      specialRequirements: $specialRequirements
    ) {
      success
      message
      registrationId
    }
  }
`;
