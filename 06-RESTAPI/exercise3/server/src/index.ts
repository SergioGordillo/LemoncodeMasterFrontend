// import 'regenerator-runtime/runtime';
// import express from 'express';
// import { ApolloServer } from '@apollo/server';
// import path from 'path';
// import { expressMiddleware } from '@apollo/server/express4';
// import cors from 'cors';
// import { json } from 'body-parser';

// import { hotelApi, cityApi } from './api';

// import { typeDefs, resolvers } from './graphql';

// const graphqlServer = new ApolloServer({
//     typeDefs,
//     resolvers
//   });

//   const PORT = 3000;
//   (async function () {
//     const app = express();
//     app.use(express.json());
//     const graphqlServer = new ApolloServer({
//       typeDefs,
//       resolvers,
//     });
//     await graphqlServer.start();

//     const publicPath = path.resolve(__dirname, './public');
//     app.use(express.static(publicPath));
//     app.use("/graphql", cors<cors.CorsRequest>(), json(), expressMiddleware(graphqlServer));

//     app.listen(PORT, () => {
//       console.log(`Server running http://localhost:${PORT}`);
//       console.log(
//         `GraphQL server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
//       );
//     });
//   })();

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs, resolvers } from './graphql';

interface MyContext {
  token?: string;
}

// Required logic for integrating with Express
(async function () {
  const app = express();
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin
  // for our httpServer.
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // Ensure we wait for our server to start
  await server.start();

  // Set up our Express middleware to handle CORS, body parsing,
  // and our expressMiddleware function.
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  // Modified server startup
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:3000/`);
})();
