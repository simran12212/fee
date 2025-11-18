# EventBuddy - GraphQL Setup Guide

## Server Architecture

Your EventBuddy project now has a full GraphQL backend setup!

### ✅ What's Included

1. **GraphQL Server** (Apollo Server)
   - Location: `server/` folder
   - Port: 4000
   - Provides: Events, User management, Registrations

2. **React Frontend** (Vite)
   - Location: `src/` folder
   - Port: 5174
   - Uses: Apollo Client for data fetching

3. **GraphQL Schema**
   - Queries: `events`, `event`, `getUser`
   - Mutations: `createEvent`, `registerForEvent`

## How to Run

### Terminal 1: Start GraphQL Server
```bash
npm run server
```
or
```bash
npm run dev-server
```

Server will start at: **http://localhost:4000/graphql**

You can test queries directly in Apollo GraphiQL interface!

### Terminal 2: Start React Frontend
```bash
npm run dev
```

Frontend will start at: **http://localhost:5174**

## File Structure

```
fee_project/
├── server/
│   ├── index.js          # Main server file
│   ├── schema.js         # GraphQL schema (typeDefs)
│   └── resolvers.js      # Query/Mutation resolvers & data
├── src/
│   ├── apollo-client.js  # Apollo Client configuration
│   ├── graphql/
│   │   └── queries.js    # GraphQL queries & mutations
│   └── App.jsx           # Main React component
└── package.json          # Dependencies & scripts
```

## API Endpoints

### GraphQL Endpoint
```
http://localhost:4000/graphql
```

### Available Queries

#### Get All Events
```graphql
query {
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
```

#### Get Single Event
```graphql
query {
  event(id: "1") {
    id
    title
    description
  }
}
```

### Available Mutations

#### Create Event
```graphql
mutation {
  createEvent(
    title: "New Event"
    date: "2025-01-30"
    time: "10:00 AM"
    location: "Test Block"
    venue: "Test Block - Hall A"
    host: "Me"
    description: "Event description"
  ) {
    id
    title
  }
}
```

#### Register for Event
```graphql
mutation {
  registerForEvent(
    eventId: "1"
    fullName: "John Doe"
    rollNumber: "2024BT001"
    email: "john@example.com"
    phone: "9876543210"
    dietaryRestrictions: "vegetarian"
    specialRequirements: "None"
  ) {
    success
    message
    registrationId
  }
}
```

## Integration Notes

- Apollo Client is configured at `src/apollo-client.js`
- GraphQL queries/mutations are in `src/graphql/queries.js`
- The React app can fetch data from the server using Apollo hooks
- Currently using in-memory storage (data resets on server restart)

## Next Steps

1. Run both servers in separate terminals
2. Visit http://localhost:5174 to use the app
3. Test GraphQL queries at http://localhost:4000/graphql
4. Integrate Apollo Client hooks into React components for live data fetching

## Tips

- Keep both servers running simultaneously
- Use Apollo DevTools browser extension for debugging
- Check server console for any errors
- GraphQL schema is introspectable - explore it in GraphiQL!
