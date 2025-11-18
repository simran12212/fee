import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const startServer = async () => {
  const app = express();
  
  // Middleware
  app.use(cors());
  app.use(express.json());

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });

  // Start Apollo Server
  await server.start();

  // Apply Apollo middleware
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`✅ GraphQL Server running at http://localhost:${PORT}/graphql`);
    console.log(`🚀 Apollo Server ready`);
  });
};

startServer().catch(err => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
