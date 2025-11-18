import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Event {
    id: String!
    title: String!
    date: String!
    time: String!
    location: String!
    venue: String!
    host: String!
    description: String!
  }

  type User {
    id: String!
    name: String!
    email: String!
    rollno: String!
  }

  type RegistrationResponse {
    success: Boolean!
    message: String!
    registrationId: String
  }

  type Query {
    events: [Event!]!
    event(id: String!): Event
    getUser(email: String!): User
  }

  type Mutation {
    createEvent(
      title: String!
      date: String!
      time: String!
      location: String!
      venue: String!
      host: String!
      description: String!
    ): Event!

    registerForEvent(
      eventId: String!
      fullName: String!
      rollNumber: String!
      email: String!
      phone: String!
      dietaryRestrictions: String
      specialRequirements: String
    ): RegistrationResponse!
  }
`;

export default typeDefs;
